import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connexion à MongoDB sans les options obsolètes
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);

    console.log("DB Connected");

    // Gestion des événements de la connexion
    mongoose.connection.on("connected", () => {
      console.log("Connexion à MongoDB réussie.");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`Erreur de connexion à MongoDB: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Déconnecté de MongoDB.");
    });
  } catch (error) {
    console.error("Erreur lors de la connexion à MongoDB:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
