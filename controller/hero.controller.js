const db = require("../models")
const Hero = db.hero

// GET ALL HEROES 
exports.getAll = (req, res)=>{


       Hero.find()
           .then(data=>{
               res.send(data)
               console.log(data)
           })
           .catch(error=>{
            res.status(500).send("Could not find hero", error)
            console.log("Could not find hero", error)
           })
}


// CREATE 1 HERO
exports.create = async (req, res)=>{
    if(!req.body){
            res.status(400).send("Cannot add without info")
            return;   
    }
 

    const hero = new Hero ({
           hero_name: req.body.hero_name,
           real_name: req.body.real_name,
           age: req.body.age,
           super_powers: req.body.super_powers,
           weakness: req.body.weakness,
           power_origins: req.body.power_origins,
           nationality: req.body.nationality
        
    })
   
    try{
        hero.save()
        .then(hero=>{

            console.log(hero)
            res.send(hero)  
        })
        return
    }catch (err){
        res.status(500).send('Could not create new hero')
        console.log(`Some err occured : ${err.message}`)
    }
}     



// CLEAR ALL HEROS
exports.deleteAll = (req, res)=>{

    User.deleteMany()
        .then(data=>{
            res.send(data)
            console.log(data)
        })
        .catch(error=>{
            res.status(500).send("Could not delete all heros ", error)
            console.log("Could not delete all", error)
        })
}

// GET A HERO
exports.getOne = (req, res)=>{
    
    const id = req.params.id

    Hero.findById(id, { useFindAndModify: false})
           .then(data=>{
            res.send(data)
            console.log(data) })
           .catch(error=>{
            res.status(500).send("Could not find hero", error)
            console.log("Could not find hero", error)
           })

        
}



// DELETE A HERO
exports.deleteOne = (req, res)=>{
    
    const id = req.params.id

    Hero.findByIdAndRemove(id, { useFindAndModify: false})
        .then(data =>{
            if(!data) {
               res.status(404).send({
                msg: `Cannot delete Hero with id=${id}. Maybe it was not exit/existing`
               })
            } else res.status(201).send({ msg: "Hero was deleted successfully"})
        })
        .catch(err => {
            res.status(500).send({ msg: `Error deleting Hero with id=${id}, Error:  ${err}`})
        })
}



// UPDATE A HERO
exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot update hero")
        return
    }
    const id = req.params.id

    Hero.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data =>{
        if(!data) {
           res.status(404).send({
             msg: `Cannot update Hero with id=${id}. Maybe it was not found`
           })
        } else res.status(201).send({ msg: "Hero was updated successfully"})
    })
    .catch(err => {
        res.status(500).send({ msg: `Error updating Hero with id=${id} ${err}`})
    })
}