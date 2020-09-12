var mongoose = require('mongoose');

var rxpEmployeeSchema = mongoose.Schema({
    
	Employee_Code         		:Number,
    Employee_Name     			:String,
    Employee_Email     			:String,
    Employee_Address   			:String,
	Employee_City 		 		:String,
	Employee_State         		:String,
	Employee_Country       		:Number,
	Employee_Telephone       	:String,
	Employee_DateOfBirth   		:Date,
	Employee_Graduation_Year   	:String,
	Employee_Department_ID   	:Number, 
	Employee_Senior_Employee_ID :Number, 
	Employee_Note 				:String
}, {
    toObject: { virtuals: true }
});

rxpEmployeeSchema.virtual('Department', {
	ref: 'rxp_department',
	localField: 'Employee_Department_ID',
	foreignField: 'Department_Code',
	justOne: true // for many-to-1 relationships
 });


rxpEmployeeSchema.virtual('Country',{
    ref: 'rxp_countries',
    localField: 'Employee_Country',
    foreignField: 'Country_Code',
    justOne: false // for many-to-1 relationships
});


var Employee = module.exports = mongoose.model('rxp_employees', rxpEmployeeSchema);

module.exports.getLastCode = function(callback){
    
    Employee.findOne({},callback).sort({Employee_Code:-1});
}





