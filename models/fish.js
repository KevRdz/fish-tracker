import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mealSchema = new Schema({
  name: String,
  style: String,
  cookTime: Number,

}, {
  timestamps: true
})

const fishSchema = new Schema({
  name: String,
  caught: Boolean,
  weight: Number,
  catchDate: Date,
  owner:  {type: Schema.Types.ObjectId, ref: "Profile"},
  meals: [mealSchema],
  // profiles: [profileSchema]
}, {
  timestamps: true
})

const Fish = mongoose.model('Fish', fishSchema)

export {
  Fish
}
