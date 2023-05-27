module.exports = mongoose => {
    let schemaHero = mongoose.Schema({
   
          hero_name: {
           type: String,
           require: true
        }, 
          real_name: {
          type: String,
          require: true
        }, 
          age: {
            type: Number,
            require: false
        },
          super_powers: {
          type: String,
          require: true
        },
          power_origins: {
          type: String,
          require: false
        },
          weakness: {
          type: String,
          require: false
        },
         nationality: {
         type: String,
         require: false
         }  
   
          })
   
       schemaHero.method("toJSON", function() {
                   const{__v, _id, ...object } = this.toObject();
                   object.id = _id;
                   return object;
   
       });
   
   let Hero = mongoose.model('Hero', schemaHero);
   return Hero
   }