var mongoose = require('mongoose');

var rxp_LutAlcoholSchema = mongoose.Schema({
    
	Alcohol_Code     	  :Number,
    Alcohol_Name     	  : String,
    Alcohol_Description    :String,
    Alcohol_IsActive       :Number,
});


Alcohol = module.exports = mongoose.model('rxp_lut_alcohol', rxp_LutAlcoholSchema);


module.exports.getLastCode = function(callback){
    
    Alcohol.findOne({},callback).sort({Alcohol_Code:-1});
}