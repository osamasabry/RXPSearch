var mongoose = require('mongoose');

var SystemSettingsSchema = mongoose.Schema({
    
	System_Setting_ID     			: Number,
    System_Setting_ConfigName     	: String,
    System_Setting_ConfigValue      : [{
        ID: Number,
        Name: String,
        // PermissionDisplayName : String
    }]
});


module.exports = mongoose.model('system_setting', SystemSettingsSchema);
