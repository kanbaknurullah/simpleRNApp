import mongoose from "mongoose";
const { Schema } = mongoose;
const bikeSchema = new Schema({
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reservation_time: {
        type: [String],
    }
})

export default mongoose.model("Bike", bikeSchema);