import mongoose from "mongoose";

//Basic User Schema

const useSchema = new mongoose.Schema({
  name: { type: String },
  role: {
    type: String,
    enum: ["Customer", "Admin", "DeliveryPartners"],
    required: true,
  },
  isActivated: { type: Boolean, default: false },
});

//customer schema

const customerSchema = new mongoose.Schema({
  ...useSchema.obj,
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ["Customer"],
    default: "Customer",
  },
  liveLocation: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  address: { type: String },
});

// delivery partner schema
const deliveryPartnerSchema = new mongoose.Schema({
    ...useSchema.obj,
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["DeliveryPartners"],
      default: "DeliveryPartners",
    },
    liveLocation: {
      longitude: { type: Number },
      latitude: { type: Number },
    },
    address: { type: String },
    branch : 
    {
        type : mongoose.Schema.ObjectId,
        ref : "Branch"
    }
  });
  
  //admin Schema

  const adminSchema = new mongoose.Schema({
    ...useSchema.obj,
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["Admin"],
      default: "Admin",
    },
  });

  export const Customer = mongoose.model("Customer",customerSchema);

  export const DeliveryPartner = mongoose.model("DeliveryPartners",deliveryPartnerSchema);

  export const Admin = mongoose.model("Admin",adminSchema);