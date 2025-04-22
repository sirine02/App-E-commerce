import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// ➕ Ajouter un produit
const addProduct = async (req, res) => {
  try {
    // Affiche le contenu du corps de la requête (req.body) et des fichiers (req.files)
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    // Extraire les champs du corps de la requête
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Vérification des champs obligatoires
    if (!name || !description || !price || !category || !subCategory || !sizes) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs obligatoires doivent être remplis."
      });
    }

    const image1 = req.files?.image1 ? req.files.image1[0] : null;
const image2 = req.files?.image2 ? req.files.image2[0] : null;
const image3 = req.files?.image3 ? req.files.image3[0] : null;
const image4 = req.files?.image4 ? req.files.image4[0] : null;

const images = [image1, image2, image3, image4].filter(Boolean);

// Vérifier si au moins une image a été envoyée
if (images.length === 0) {
  return res.status(400).json({ success: false, message: "Au moins une image est requise." });
}

// Vérifier que les fichiers sont bien des images (optionnel, mais recommandé)
const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
for (let image of images) {
  if (!validImageTypes.includes(image.mimetype)) {
    return res.status(400).json({ success: false, message: "Tous les fichiers doivent être des images (JPEG, PNG, GIF)." });
  }
}

    // Télécharger les images sur Cloudinary
    let imageUrls = [];
    try {
      imageUrls = await Promise.all(
        images.map(async (img) => {
          const result = await cloudinary.uploader.upload(img.path, { resource_type: "image" });
          return result.secure_url;
        })
      );
    } catch (uploadError) {
      console.error("Erreur lors de l'upload Cloudinary:", uploadError);
      return res.status(500).json({ success: false, message: "Erreur Cloudinary lors du téléchargement des images." });
    }

    // Traitement des tailles (parsing de JSON)
    let parsedSizes = [];
    try {
      parsedSizes = typeof sizes === "string" ? JSON.parse(sizes) : sizes;
    } catch (err) {
      return res.status(400).json({ success: false, message: "Le champ 'sizes' doit être un tableau JSON valide." });
    }

    // Création de l'objet produit
    const productData = {
      productName: name,
      description,
      price: parseFloat(price), // Assurer que price est un nombre
      category,
      subCategory,
      bestseller: bestseller === "true", // Convertir en boolean
      sizes: parsedSizes,
      imageUrls,
      createdAt: new Date(),
    };

    // Sauvegarde du produit dans la base de données
    const product = new productModel(productData);
    await product.save();

    // Répondre avec succès
    res.json({ success: true, message: "Produit ajouté avec succès.", product });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ success: false, message: "Erreur serveur lors de l'ajout du produit." });
  }
};

// 📋 Lister les produits
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    res.status(500).json({ success: false, message: "Erreur lors de la récupération des produits." });
  }
};

// ❌ Supprimer un produit
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ success: false, message: "ID du produit manquant." });

    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Produit supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression du produit:", error);
    res.status(500).json({ success: false, message: "Erreur lors de la suppression du produit." });
  }
};

// 🔎 Détails d’un produit
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ success: false, message: "ID du produit manquant." });

    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Produit introuvable." });

    res.json({ success: true, product });
  } catch (error) {
    console.error("Erreur lors de la récupération du produit:", error);
    res.status(500).json({ success: false, message: "Erreur lors de la récupération du produit." });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
