import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  fishes:  [{type: mongoose.Schema.Types.ObjectId, ref: "Fish"}],
  // fishes: [fishSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
