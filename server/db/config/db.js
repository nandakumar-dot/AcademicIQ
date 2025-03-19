import mongoose from "mongoose";
const MONGO_URL = 'mongodb+srv://ANAND:GITonNWLRvcfQxvY@cluster0.c89dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected...");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB