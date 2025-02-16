import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
    catergory: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        required: false,
    }
}, { timestamp: true });

const product = mongoose.model("Product", productSchema);

export default product;