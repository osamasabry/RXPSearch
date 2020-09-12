var mongoose = require('mongoose');

var rxp_DepartmentsSchema = mongoose.Schema({
    
	Department_Code     			:Number,
    Department_Name     			:String,
    Department_Description  		:String,
    Department_Manager_Employee_ID  :Number,
    Department_IsActive  			:Number,
    
}, {
    toObject: { virtuals: true }
});

rxp_DepartmentsSchema.virtual('Employee',{
    ref: 'rxp_employees',
    localField: 'Department_Manager_Employee_ID',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships
});


var Department =module.exports = mongoose.model('rxp_department', rxp_DepartmentsSchema);


module.exports.getLastCode = function(callback){
    
    Department.findOne({},callback).sort({Department_Code:-1});
}