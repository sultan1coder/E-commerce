import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password must be at least 6 characters long"]
    },
    chartItems: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ],
    role: {
        type: String,
        enum: ["customer", "admin",],
        default: "customer"
    }
},
    {
        timestamps: true,
    })


const user = mongoose.model("user", userSchema)

//pre-save hook to hash password before saving to database
userSchema.pre("save", async function (next) {
    if (!this.isModified(password)) return next()

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {

    }
})
//sulta 1234567
//1234567 => invalid credentials 
userSchema.methods.comparPassowrd = async function (password) {
    return bcrypt.compare(password, this.password);
}

export default user;