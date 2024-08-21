"use server";

import Razorpay from "razorpay";
import payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  let option = {
    amount: Number.parseInt(amount),
    currency: "INR",
  }

  let x = await instance.orders.create(option)

  // create a payment object which shows a pending object
  await Payment.create({oid: x.oid, amount: amount, to_user: to_username, name:paymentform.name, message: paymentform.message });

  return x;
};
