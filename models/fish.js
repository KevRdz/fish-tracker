import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fishSchema = new Schema({
  name: String,
  catch: String,
  owner:  {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Fish = mongoose.model('Fish', fishSchema)

export {
  Profile
}
