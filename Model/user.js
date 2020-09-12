var mongoose = require('mongoose');
var passwordHash = require('password-hash');

var rxpUserSchema = mongoose.Schema({
   
		User_Code        :Number,
        User_Name        :String,
        User_Password    :String,
        User_DisplayName :String,
        User_Permissions :[String],
		User_IsActive    :Number,
        User_Employee_ID :Number
        // User_Access_Token:String
}, {
    toObject: { virtuals: true }
});

rxpUserSchema.virtual('Employee', {
    ref: 'rxp_employees',
    localField: 'User_Employee_ID',
    foreignField: 'Employee_Code',
    justOne: true // for many-to-1 relationships
 });

rxpUserSchema.methods.verifyPassword = function(password) {
    if(passwordHash.verify(password,this.User_Password) == 1)
        return 1;
    else
        return 0;
};

// rxpUserSchema.methods.updatePassword = function(password) {
//     this.User_Password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// 	this.save();
// };


// userSchema.methods.updateUser = function(request, response){

// 	this.name = request.body.name;
// 	this.address = request.body.address;
// 	 this.save();
// 	response.redirect('/user');
// };



module.exports = mongoose.model('rxp_users', rxpUserSchema);



// module.exports = mongoose.model('rxp_users', rxpUserSchema);
