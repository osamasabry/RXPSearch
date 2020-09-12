var mongoose = require('mongoose');

var rxp_LutFoodSchema = mongoose.Schema({
    
	Food_Code     	  	:Number,
    Food_Name     	  	:String,
    Food_Description    :String,
    Food_IsActive       :Number,
});


Food = module.exports = mongoose.model('rxp_lut_food', rxp_LutFoodSchema);


module.exports.getLastCode = function(callback){
    
    Food.findOne({},callback).sort({Food_Code:-1});
}