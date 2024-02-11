import Bike from "../models/bike";

export const createBike = async (req, res) => {
    try {
        const { model, color, location, rating, reservation_time } = req.body;
        const bike = await new Bike({
            model,
            color,
            location,
            rating,
            reservation_time
        });
        const data = await bike.save();
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(400).json({message: err.message})
    }
};

export const getBikes = async (req, res) => {
    try {
        const data = await Bike.find();
        res.json(data)
    } catch (err) {
        res.status(500).json({message: error.message})
    }
};

export const rentBike = async (req, res) => {
    try {
        const updatedBike = await Bike.updateOne(
            {_id: req.params.id},
            {$push: { reservation_time: req.body.reservation_time}},
        )
        res.json(updatedBike)
    } catch (err) {
        res.status(500).json({message: error.message})
    }
};

export const cancelRent = async (req, res) => {
    try {
        const updatedBike = await Bike.updateOne(
            {_id: req.params.id},
            {$pull: { reservation_time: req.body.reservation_time}},
        )
        res.json(updatedBike)
    } catch (err) {
        res.status(500).json({message: error.message})
    }
};

export const rateBike = async (req, res) => {
    try {
        const updatedBike = await Bike.updateOne(
            {_id: req.params.id},
            {$set: { rating: req.body.rating}},
        )
        res.json(updatedBike)
    } catch (err) {
        res.status(500).json({message: error.message})
    }
};