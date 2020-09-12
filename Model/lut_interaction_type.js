var mongoose = require('mongoose');

var rxp_InteractionTypeSchema = mongoose.Schema({
    
	InteractionType_Code     	     :Number,
    InteractionType_Name     	     :String,
    InteractionType_Description    :String,
    InteractionType_IsActive       :Number,
    
});


InteractionType = module.exports = mongoose.model('rxp_interaction_type', rxp_InteractionTypeSchema);


module.exports.getLastCode = function(callback){
    
    InteractionType.findOne({},callback).sort({InteractionType_Code:-1});
}