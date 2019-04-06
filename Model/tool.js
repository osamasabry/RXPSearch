var mongoose = require('mongoose');

var ToolSchema = mongoose.Schema({
    
	Tool_Code     		: Number,
    Tool_Name     		: String,
    Tool_IsActive     	: Number,
    Tool_Description    : String,
});


module.exports = mongoose.model('rxp_extra_tool', ToolSchema);
