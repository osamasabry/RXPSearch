var mongoose = require('mongoose');

var rxp_InteractionLevelSchema = mongoose.Schema({
    
	InteractionLevel_Code     	    :Number,
    InteractionLevel_Name     	    :String,
    InteractionLevel_Description    :String,
    InteractionLevel_IsActive       :Number,
    
});


InteractionLevel = module.exports = mongoose.model('rxp_interaction_level', rxp_InteractionLevelSchema);


module.exports.getLastCode = function(callback){
    
    InteractionLevel.findOne({},callback).sort({InteractionLevel_Code:-1});
}