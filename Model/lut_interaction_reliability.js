var mongoose = require('mongoose');

var rxp_InteractionReliabilitySchema = mongoose.Schema({
    
	InteractionReliability_Code     	  :Number,
    InteractionReliability_Name     	  :String,
    InteractionReliability_Description    :String,
    InteractionReliability_IsActive       :Number,
    
});


InteractionReliability = module.exports = mongoose.model('rxp_interaction_reliability', rxp_InteractionReliabilitySchema);


module.exports.getLastCode = function(callback){
    
    InteractionReliability.findOne({},callback).sort({InteractionReliability_Code:-1});
}