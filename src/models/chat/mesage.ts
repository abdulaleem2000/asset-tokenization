import mongoose, { Schema, Model } from "mongoose";

const MessageSchema = new Schema({
  body: String,
  image: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  seen_user_ids: [Schema.Types.ObjectId],
  conversation_id: Schema.Types.ObjectId,
  sender_id: Schema.Types.ObjectId,
});
