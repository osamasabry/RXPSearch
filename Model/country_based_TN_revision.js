var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxp_CountryBasedTNRevisionSchema = mongoose.Schema({
    
    CountryBasedTNRevision_Code                            :Number,
    CountryBasedTNRevision_UnitPrice			           :String,
    CountryBasedTNRevision_Images					       :[String],
    CountryBasedTNRevision_Currency                        :Number,
    CountryBasedTNRevision_Manufacturer                    :String,
    CountryBasedTNRevision_Status                          :Number,
    CountryBasedTNRevision_IsRegistered                    :Number,
    CountryBasedTNRevision_Registration_Number             :String,
    CountryBasedTNRevision_Origin                          :String,
    CountryBasedTNRevision_Licensor_Name                   :String,
    CountryBasedTNRevision_TN_Code                         :Number,
    CountryBasedTNRevision_Country_ID                      :Number,
    CountryBasedTNRevision_CountryBasedTN_Code             :Number,
    CountryBasedTNRevision_Log:[{
        CountryBasedTNRevision_Log_Action         :String,
        CountryBasedTNRevision_Log_Date           :Date,
        CountryBasedTNRevision_Log_Employee_ID    :Number,
        CountryBasedTNRevision_Log_Type           :String,
    }],
    CountryBasedTNRevision_AssiendToEditor_Employee_ID    :Number,
    CountryBasedTNRevision_EditStatus                     :Number,
    CountryBasedTNRevision_EditedBy_Employee_ID           :Number,
    CountryBasedTNRevision_AssiendToReviewer_Employee_ID  :Number,
    CountryBasedTNRevision_ReviewStatus                   :Number,
    CountryBasedTNRevision_ReviewedBy_Employee_ID         :Number,
    CountryBasedTNRevision_AssiendToPublisher_Employee_ID :Number,
    CountryBasedTNRevision_PublishStatus                  :Number,
    CountryBasedTNRevision_Publishedby_Employee_ID        :Number,
    CountryBasedTNRevision_RevisionCode                   :Number,
    CountryBasedTNRevision_Comments                       :[{
        CountryBasedTNRevision_Comments_Employee_ID       : Number,
        CountryBasedTNRevision_Comments_ToEmployee_ID     : Number,
        CountryBasedTNRevision_Comments_Message           : String,
        CountryBasedTNRevision_Comments_Date              : Date,
        CountryBasedTNRevision_Comments_SenderRoleType    : String
    }],


});


var CountryBasedTNRevision_table = module.exports = mongoose.model('rxp_country_based_tn_revision', rxp_CountryBasedTNRevisionSchema);


module.exports.getLastCode = function(callback){
    
    CountryBasedTNRevision_table.findOne({},callback).sort({CountryBasedTNRevision_Code:-1});
}