var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxp_LutHerbsSchema = mongoose.Schema({
	Herbs_Code     	  	 :Number,
    Herbs_Name     	  	 :String,
    Herbs_Description    :String,
    Herbs_IsActive       :Number,
});


Herbs = module.exports = mongoose.model('rxp_lut_herbs', rxp_LutHerbsSchema);


module.exports.getLastCode = function(callback){
    
    Herbs.findOne({},callback).sort({Herbs_Code:-1});
}