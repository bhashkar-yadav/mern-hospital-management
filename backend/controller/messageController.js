import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

// export const sendMessage = catchAsyncErrors(async (req, res, next) => {
//   const { firstName, lastName, email, phone, message } = req.body;
//   if (!firstName || !lastName || !email || !phone || !message) {
//     return next(new ErrorHandler("Please Fill Full Form!", 400));
//   }
//   await Message.create({ firstName, lastName, email, phone, message });
//   res.status(200).json({
//     success: true,
//     message: "Message Sent!",
//   });
// });


export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  let { firstName, lastName, email, phone, message } = req.body;

  // Trim inputs
  firstName = firstName?.trim();
  lastName = lastName?.trim();
  email = email?.trim();
  phone = phone?.trim();
  message = message?.trim();

  // Validate for empty or whitespace-only fields
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill out the full form properly!", 400));
  }

  // Save to database
  await Message.create({ firstName, lastName, email, phone, message });

  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});


export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
