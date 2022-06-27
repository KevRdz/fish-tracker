import { Fish } from '../models/fish.js'

function newFishes(req, res){
  res.render("fishes/new", {
    title: "Add Fishes"
  })
}

export {
  newFishes as new,

}