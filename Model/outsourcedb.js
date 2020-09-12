var mongoose = require('mongoose');

var OutSourceSchema = mongoose.Schema({
    
	OutSource_Code     		: Number,
    OutSource_Name     		: String,
    OutSource_IsActive     	: Number,
    OutSource_Description    : String,
});


module.exports = mongoose.model('rxp_outsource', OutSourceSchema);
