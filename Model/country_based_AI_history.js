var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxp_CountryBasedAIHistorySchema = mongoose.Schema({
    
    CountryBasedAIHistory_Code                    :Number,
    CountryBasedAIHistory_Alert                   :String,
	CountryBasedAIHistory_Dosing     	  				   :[{
        Dosing_UsageAge_Code                       : Number,
        Dosing_MedicalCondition_Code               : Number,
        Dosing_UsageDoseType_Code                  : Number,
        Dosing_MinDose                             : Number,
        Dosing_MaxDose                             : Number,
        Dosing_UsageDoseUnit_Code                  : Number,
        Dosing_Route_Code                          : Number,
        Dosing_Form_Code                           : Number,
        Dosing_Frequency                           : Number,
        Dosing_UsageFrequenIntervalUnit_Code       : Number,
        Dosing_ScheduleOfAdministration            : String
    }],
    CountryBasedAIHistory_UsaageLabeledIndications 	           :String,
    CountryBasedAIHistory_UsaageOffLabeledIndications 	       :String,
    CountryBasedAIHistory_Administration_IV                    :String,
    CountryBasedAIHistory_Administration_Injectable_Detail     :String,
    CountryBasedAIHistory_Administration_Oral                  :String,
    CountryBasedAIHistory_Administration_Rectal                :String,
    CountryBasedAIHistory_DietaryConsiderations                :String,
    CountryBasedAIHistory_PreparationForAdministration         :String,
    CountryBasedAIHistory_PregnancyConsideration               :String,
    CountryBasedAIHistory_Storage_Stability                    :String,
    CountryBasedAIHistory_Compatibility                        :String,
    CountryBasedAIHistory_AI_Code                              :Number,
    CountryBasedAIHistory_Country_ID                           :Number,
    CountryBasedAIHistory_CountryBasedAI_Code                  :Number,

    CountryBasedAIHistory_Log:[{
        CountryBasedAIRevision_Log_Action         :String,
        CountryBasedAIRevision_Log_Date           :Date,
        CountryBasedAIRevision_Log_Employee_ID    :Number,
        CountryBasedAIRevision_Log_Type           :String,
    }],

    CountryBasedAIHistory_AssiendToEditor_Employee_ID    :Number,
    CountryBasedAIHistory_EditStatus                     :Number,
    // CountryBasedAIHistory_EditDate_Start                 :Date,
    CountryBasedAIHistory_EditedBy_Employee_ID           :Number,
    // CountryBasedAIHistory_EditDate_Close                 :Date,
    
    CountryBasedAIHistory_AssiendToReviewer_Employee_ID  :Number,
    CountryBasedAIHistory_ReviewStatus                   :Number,
    // CountryBasedAIHistory_ReviewDate_Start               :Date,
    CountryBasedAIHistory_ReviewedBy_Employee_ID         :Number,
    // CountryBasedAIHistory_ReviewDate_Close               :Date,
    
    CountryBasedAIHistory_AssiendToGrammer_Employee_ID   :Number,
    CountryBasedAIHistory_GrammerStatus                  :Number,
    // CountryBasedAIHistory_GrammerReview_Date_Start       :Date,
    CountryBasedAIHistory_GrammerReviewBy_Employee_ID    :Number,
    // CountryBasedAIHistory_GrammerReview_Date_Close       :Date,
    
    CountryBasedAIHistory_AssiendToPublisher_Employee_ID :Number,
    CountryBasedAIHistory_PublishStatus                  :Number,
    // CountryBasedAIHistory_PublishDate_Start              :Date,
    CountryBasedAIHistory_Publishedby_Employee_ID        :Number,
    // CountryBasedAIHistory_PublishDate_Close              :Date,
    
    CountryBasedAIHistory_RevisionCode                   :Number,

    CountryBasedAIHistory_Comments                       :[{
        CountryBasedAIRevision_Comments_Employee_ID       : Number,
        CountryBasedAIRevision_Comments_ToEmployee_ID     : Number,
        CountryBasedAIRevision_Comments_Message           : String,
        CountryBasedAIRevision_Comments_Date              : Date,
        CountryBasedAIRevision_Comments_SenderRoleType    : String
    }],
    
});


var CountryBasedAIHistory_table = module.exports = mongoose.model('rxp_country_based_ai_history', rxp_CountryBasedAIHistorySchema);


module.exports.getLastCode = function(callback){
    
    CountryBasedAIHistory_table.findOne({},callback).sort({CountryBasedAIHistory_Code:-1});
}