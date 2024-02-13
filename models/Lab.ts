import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI!)
mongoose.Promise = global.Promise

const labSchema = new Schema(
  {
    email: String,
    name: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  },
)

const Lab = mongoose.models.Lab || mongoose.model("Lab", labSchema)

export default Lab
