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

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.caught = !!req.body.caught
  Fish.create(req.body)
  .then(fish => {
    res.redirect('/fishes')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function newFish(req, res){
  res.render("fishes/new", {
    title: "Add Fishes"
  })
}

function show(req, res){
  Fish.findById(req.params.id)
  .populate("owner")
  .then(fish => {
    res.render('fishes/show', {
      fish: fish,
      title: "Fish Deetails"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

export {
  index,
  create,
  newFish as new,
  show,
}