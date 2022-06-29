import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  // fish: [fishSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
