import mongoose, { Model, Schema } from "mongoose";

const ConversationSchema = new Schema({
  created_at: {
    type: Date,
    defaut: Date.now(),
  },
  last_message_at: {
    type: Date,
    default: Date.now(),
  },
  messageIds: [Schema.Types.ObjectId],
  users: [String],
});

export default mongoose.models.ConversationSchema ??
  mongoose.model("Conversation", ConversationSchema);
