var mongoose = require('mongoose');

var rxp_CountryBasedTNHistorySchema = mongoose.Schema({
    
    CountryBasedTNHistory_Code                            :Number,
	CountryBasedTNHistory_UnitPrice     	  		      :Number,
    CountryBasedTNHistory_Images	                      :[String],
    CountryBasedTNHistory_Currency                        :Number,
    CountryBasedTNHistory_Manufacturer                    :String,
    CountryBasedTNHistory_Status                          :Number,
    CountryBasedTNHistory_IsRegistered                    :Number,
    CountryBasedTNHistory_Registration_Number             :String,
    CountryBasedTNHistory_Origin                          :String,
    CountryBasedTNHistory_Licensor_Name                   :String,
    CountryBasedTNHistory_TN_Code                         :Number,
    CountryBasedTNHistory_Country_ID                      :Number,
    CountryBasedTNHistory_CountryBasedTN_Code             :Number,

    CountryBasedTNHistory_Log:[{
        CountryBasedTNRevision_Log_Action         :String,
        CountryBasedTNRevision_Log_Date           :Date,
        CountryBasedTNRevision_Log_Employee_ID    :Number,
        CountryBasedTNRevision_Log_Type           :String,
    }],
    

    CountryBasedTNHistory_AssiendToEditor_Employee_ID    :Number,
    CountryBasedTNHistory_EditStatus                     :Number,
    CountryBasedTNHistory_EditedBy_Employee_ID           :Number,
    CountryBasedTNHistory_AssiendToReviewer_Employee_ID  :Number,
    CountryBasedTNHistory_ReviewStatus                   :Number,
    CountryBasedTNHistory_ReviewedBy_Employee_ID         :Number,
    CountryBasedTNHistory_AssiendToPublisher_Employee_ID :Number,
    CountryBasedTNHistory_PublishStatus                  :Number,
    CountryBasedTNHistory_Publishedby_Employee_ID        :Number,
    CountryBasedTNHistory_RevisionCode                   :Number,
    CountryBasedTNHistory_Comments                       :[{
        CountryBasedTNRevision_Comments_Employee_ID       : Number,
        CountryBasedTNRevision_Comments_ToEmployee_ID     : Number,
        CountryBasedTNRevision_Comments_Message           : String,
        CountryBasedTNRevision_Comments_Date              : Date,
        CountryBasedTNRevision_Comments_SenderRoleType    : String
    }],
});


var CountryBasedTNHistory_table = module.exports = mongoose.model('rxp_country_based_tn_history', rxp_CountryBasedTNHistorySchema);


module.exports.getLastCode = function(callback){
    
    CountryBasedTNHistory_table.findOne({},callback).sort({CountryBasedTNHistory_Code:-1});
}