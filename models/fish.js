import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fishSchema = new Schema({
  name: String,
  caught: Boolean,
  weight: Number,
  catchDate: Date,
  owner:  {type: Schema.Types.ObjectId, ref: "Fish"}
}, {
  timestamps: true
})

const Fish = mongoose.model('Fish', fishSchema)

export {
  Fish
}
