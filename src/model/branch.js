import mongoose, { mongo } from "mongoose";

// delivery partner schema
const branchSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  liveLocation: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  address: { type: String },
  deliveryPartners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryPartners",
    },
  ],
});

const Branch = mongoose.model("Branch", branchSchema);
export default Branch;
