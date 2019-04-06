var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxpAccountSchema = mongoose.Schema({
    
	Account_Code      	     :Number,
    Account_Name     		 :String,
    Account_Address   		 :String,
	Account_City 		 	 :String,
	Account_State            :String,
	Account_Country          :Number,
	Account_Telephone        :[String],
    Account_Account_manager  :Number,
	Account_Sales_rep        :Number,
    Account_Cms_manager      :Number,
    Account_Parent_account   :Number,
	Account_Note         	 :String,
	Account_Plane 			 :{
	    interface     		    :String,
		out_source_dbs   	    :Number,
		out_source_tools        :Number,
	    max_concurrent_users    :Number,
	    max_users      			:Number,
	    can_custom_medicaldata  :Number,
	    way_of_access   		:Number,
	    list_ips 				:String
	},
	Account_Subscribe 		 :{
		subscribe_name     	: String,
	    email        		: String,
	    phone     			: String,
		mobile	     	    : String,
		role      		    : String,
		period_of_month     : Number,
		start_date 			: Date,
		end_date 			: Date,
		subscribe_note 		: String,
	},
	Account_Contact        :[{
        Account_ContactTitle           : String,
        Account_ContactName            : String,
        Account_ContactTelphone        : [String],
        Account_ContactEmail           : [String],
        
    },{
        toJSON: { virtuals: true }
    }],

});


rxpAccountSchema.virtual('EmployeeManger',{
    ref: 'rxp_employees',
    localField: 'Account_Account_manager',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('EmployeeSales',{
    ref: 'rxp_employees',
    localField: 'Account_Sales_rep',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('EmployeeCms',{
    ref: 'rxp_employees',
    localField: 'Account_Cms_manager',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('Account',{
    ref: 'rxp_accounts',
    localField: 'Account_Parent_account',
    foreignField: 'Account_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('Country',{
    ref: 'rxp_countries',
    localField: 'Account_Country',
    foreignField: 'Country_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('OutSourceDB',{
    ref: 'rxp_outsources',
    localField: 'Account_Plane.out_source_dbs',
    foreignField: 'code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('OutSourceTool',{
    ref: 'rxp_outsource_tools',
    localField: 'Account_Plane.out_source_tools',
    foreignField: 'code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var Account = module.exports = mongoose.model('rxp_accounts', rxpAccountSchema);

module.exports.getLastCode = function(callback){
    
    Account.findOne({},callback).sort({Account_Code:-1});
}