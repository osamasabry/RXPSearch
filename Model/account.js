var mongoose = require('mongoose');

var rxpAccountSchema = mongoose.Schema({
    
	Account_Code      	     :Number,
    Account_Name     		 :String,
    Account_Address   		 :String,
	Account_City 		 	 :String,
	Account_State            :String,
	Account_Country          :Number,
	Account_Telephone        :[String],
    Account_Is_Active        :Number,
   
    Account_Account_Manager  :Number, // ref employee
	Account_SalesRep        :Number, // ref employee
    Account_Cms_Manager      :Number, // ref employee
    // Account_Parent_account   :Number, // ref employee
	Account_Note         	 :String,
	Account_Plane 			 :[{
	    Can_Custom_Medicaldata  		:Number,// 0=not ,1=true 
	    Interface     		    		:[Number],// online = 0 ,mobile 1 
		OutSource_dbs   	    		:[Number], //ref lut outsource
		OutSource_tools        			:[Number], //ref lut tool
	    Way_Of_Access   				:Number,
	    Max_Concurrent_Users    		:Number,
	    Max_Users      					:Number,
	    List_IPs 						:[String],
        Access_key              		:String,
        Plane_Status 					:Number,
		Subscribtion_Owner_Name     	:String,
	    Subscribtion_Owner_Email        :String,
	    Subscribtion_Owner_Phone     	:String,
		Subscribtion_Owner_Mobile	    :[String],
		Subscribtion_Owner_Title        :String,
		Period_Of_Month    				:Number,
		Start_Date 						:Date,
		End_Date 						:Date,
		Subscribe_Note 					:String,
	}],
	Account_Contact        :[{
        Account_ContactTitle           : String,
        Account_ContactName            : String,
        Account_ContactTelphone        : [String],
        Account_ContactEmail           : String,
        
    },{
        toJSON: { virtuals: true }
    }],

}, {
    toObject: { virtuals: true }
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

// rxpAccountSchema.virtual('Account',{
//     ref: 'rxp_accounts',
//     localField: 'Account_Parent_account',
//     foreignField: 'Account_Code',
//     justOne: false // for many-to-1 relationships
// });

rxpAccountSchema.virtual('Country',{
    ref: 'rxp_countries',
    localField: 'Account_Country',
    foreignField: 'Country_Code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('OutSourceDB',{
    ref: 'rxp_outsource',
    localField: 'Account_Plane.OutSource_dbs',
    foreignField: 'code',
    justOne: false // for many-to-1 relationships
});

rxpAccountSchema.virtual('OutSourceTool',{
    ref: 'rxp_extra_tool',
    localField: 'Account_Plane.OutSource_tools',
    foreignField: 'code',
    justOne: false // for many-to-1 relationships
});

// rxpAccountSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

var Account = module.exports = mongoose.model('rxp_accounts', rxpAccountSchema);

module.exports.getLastCode = function(callback){
    
    Account.findOne({},callback).sort({Account_Code:-1});
}