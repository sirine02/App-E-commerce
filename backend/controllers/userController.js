import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


// Helper function to create a token
const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'email et le mot de passe sont fournis
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email et mot de passe sont requis" });
    }

    // Recherche de l'utilisateur dans la base de données
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Utilisateur introuvable" });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(205).json({ success: false, message: "Identifiants invalides" });
    }

    // Création du token
    const token = createToken({ id: user._id });
    return res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Vérification des champs requis
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Tous les champs sont requis" });
    }

    // Vérification si l'email est valide
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Email invalide" });
    }

    // Vérification si l'utilisateur existe déjà
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "Utilisateur déjà existant" });
    }

    // Vérification de la longueur du mot de passe
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Mot de passe trop court (8 caractères min.)" });
    }

    // Hash du mot de passe avant de sauvegarder
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Création d'un nouvel utilisateur
    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    // Création du token pour l'utilisateur nouvellement inscrit
    const token = createToken({ id: savedUser._id });
    return res.json({ success: true, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'email et le mot de passe sont fournis
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email et mot de passe sont requis" });
    }

    // Vérification des identifiants administrateur
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = createToken({ email });
      return res.json({ success: true, token });
    } else {
      return res.status(401).json({ success: false, message: "Identifiants administrateur incorrects" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
};

export { loginUser, registerUser, adminLogin };
