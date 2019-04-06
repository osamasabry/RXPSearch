var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var rxp_AccountUserSchema = mongoose.Schema({
   
		AccountUser_Code        :Number,
        AccountUser_UserName    :String,
        AccountUser_Password    :String,
		AccountUser_Account_ID  :Number,
		AccountUser_Permission  :[String],
}, {
    toObject: { virtuals: true }
});

rxp_AccountUserSchema.virtual('Account',{
    ref: 'rxp_accounts',
    localField: 'AccountUser_Account_ID',
    foreignField: 'Account_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AccountUserSchema.methods.verifyPassword = function(password) {
    if(passwordHash.verify(password,this.AccountUser_Password) == 1)
        return 1;
    else
        return 0;
};



var Account_User = module.exports = mongoose.model('rxp_account_user', rxp_AccountUserSchema);


module.exports.getLastCode = function(callback){
    
    Account_User.findOne({},callback).sort({Account_Code:-1});
}