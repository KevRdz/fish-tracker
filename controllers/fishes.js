import { Fish } from '../models/fish.js'

function index(req, res){
  Fish.find({})
  .then(fishes => {
    res.render('fishes/index', {
      fishes: fishes,
      title: "Fishes",
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.caught = !!req.body.caught
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
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
    console.log(fish)
    res.render('fishes/show', {
      fish: fish,
      title: "Fish Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function edit(req, res){
  Fish.findById(req.params.id)
  .then(fish => {
    res.render('fishes/edit', {
      fish,
      title: "Edit Fish"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function update(req, res) {
  Fish.findById(req.params.id)
  .then(fish => {
    if (fish.owner.equals(req.user.profile._id)){
      for (const key in req.body){
        req.body[key] === "" && delete req.body[key]
      }
      req.body.caught = !!req.body.caught
      fish.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/fishes/${fish._id}`)
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function deleteFish(req, res) {
  Fish.findByIdAndDelete(req.params.id)
  .then(fish => {
    if (fish.owner.equals(req.user.profile._id)){
      fish.delete()
      .then(() => {
        res.redirect('/fishes')
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/fishes')
  })
}

function createMeal(req, res){
  Fish.findById(req.params.id)
  .then(fish => {
    fish.meals.push(req.body)
    fish.save()
    .then(() => {
      res.redirect(`/fishes/${fish._id}`)
    })
  })
}

export {
  index,
  create,
  newFish as new,
  show,
  edit,
  update,
  deleteFish as delete,
  createMeal,
}