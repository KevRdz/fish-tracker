import { Fish } from '../models/fish.js'

function index(req, res){
  Fish.find({})
  .then(fishes => {
    res.render('fishes/index', {
      fishes: fishes,
      title: "Fisshees",
    })
  })
}

export {
  index,

}