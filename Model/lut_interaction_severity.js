var mongoose = require('mongoose');

var rxp_InteractionSeveritySchema = mongoose.Schema({
    
	InteractionSeverity_Code     	   :Number,
    InteractionSeverity_Name     	   :String,
    InteractionSeverity_Description    :String,
    InteractionSeverity_IsActive       :Number,
    
});


InteractionSeverity = module.exports = mongoose.model('rxp_interaction_severity', rxp_InteractionSeveritySchema);


module.exports.getLastCode = function(callback){
    
    InteractionSeverity.findOne({},callback).sort({InteractionSeverity_Code:-1});
}