var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxp_LutLabTestSchema = mongoose.Schema({
    
	LabTest_Code     	   :Number,
    LabTest_Name     	   :String,
    LabTest_Description    :String,
    LabTest_IsActive       :Number,
});


LabTest = module.exports = mongoose.model('rxp_lut_lab_test', rxp_LutLabTestSchema);


module.exports.getLastCode = function(callback){
    
    LabTest.findOne({},callback).sort({LabTest_Code:-1});
}