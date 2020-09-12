var mongoose = require('mongoose');

var rxp_CountryBasedAIRevisionSchema = mongoose.Schema({
    
    CountryBasedAIRevision_Code                    :Number,
    CountryBasedAIRevision_Alert                   :String,
	CountryBasedAIRevision_Dosing     	  				   :[{
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
    },{
        toObject: { virtuals: true }
    }],
    CountryBasedAIRevision_UsaageLabeledIndications 	        :String,
    CountryBasedAIRevision_UsaageOffLabeledIndications 	        :String,
    CountryBasedAIRevision_Administration_IV  				    :String,
    CountryBasedAIRevision_Administration_Injectable_Detail     :String,
    CountryBasedAIRevision_Administration_Oral                  :String,
    CountryBasedAIRevision_Administration_Rectal                :String,
    CountryBasedAIRevision_Compatibility                        :String,
    CountryBasedAIRevision_DietaryConsiderations		        :String,
    CountryBasedAIRevision_PreparationForAdministration         :String,
    CountryBasedAIRevision_PregnancyConsideration		        :String,
    CountryBasedAIRevision_Storage_Stability			        :String,
    CountryBasedAIRevision_AI_Code                              :Number,
    CountryBasedAIRevision_Country_ID                           :Number,
    CountryBasedAIRevision_CountryBasedAI_Code                  :Number,

    CountryBasedAIRevision_Log:[{
        CountryBasedAIRevision_Log_Action         :String,
        CountryBasedAIRevision_Log_Date           :Date,
        CountryBasedAIRevision_Log_Employee_ID    :Number,
        CountryBasedAIRevision_Log_Type           :String,
    }],

    CountryBasedAIRevision_AssiendToEditor_Employee_ID    :Number,
    CountryBasedAIRevision_EditStatus                     :Number,
    CountryBasedAIRevision_EditedBy_Employee_ID           :Number,
    CountryBasedAIRevision_AssiendToReviewer_Employee_ID  :Number,
    CountryBasedAIRevision_ReviewStatus                   :Number,
    CountryBasedAIRevision_ReviewedBy_Employee_ID         :Number,
    CountryBasedAIRevision_AssiendToGrammer_Employee_ID   :Number,
    CountryBasedAIRevision_GrammerStatus                  :Number,
    CountryBasedAIRevision_GrammerReviewBy_Employee_ID    :Number,
    CountryBasedAIRevision_AssiendToPublisher_Employee_ID :Number,
    CountryBasedAIRevision_PublishStatus                  :Number,
    CountryBasedAIRevision_Publishedby_Employee_ID        :Number,
    CountryBasedAIRevision_RevisionCode                   :Number,
    CountryBasedAIRevision_Comments                       :[{
        CountryBasedAIRevision_Comments_Employee_ID       : Number,
        CountryBasedAIRevision_Comments_ToEmployee_ID     : Number,
        CountryBasedAIRevision_Comments_Message           : String,
        CountryBasedAIRevision_Comments_Date              : Date,
        CountryBasedAIRevision_Comments_SenderRoleType    : String
    }],

    
},{
    toObject: { virtuals: true }
});

rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionCountry', {
    ref: 'rxp_countries',
    localField: 'CountryBasedAIRevision_Country_ID',
    foreignField: 'Country_Code',
    justOne: true // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageDoseType', {
    ref: 'rxp_lut_usage_dose_type',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_UsageDoseType_Code',
    foreignField: 'UsageDoseType_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageDoseUnit', {
    ref: 'rxp_lut_usage_dose_unit',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_UsageDoseUnit_Code',
    foreignField: 'UsageDoseUnit_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageForm', {
    ref: 'rxp_lut_form',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_Form_Code',
    foreignField: 'Form_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAIRevisionSchema.virtual('CountryBasedAIRevisionDosingUsageFrequenIntervalUnit', {
    ref: 'rxp_lut_usage_frequency_interval_unit',
    localField: 'CountryBasedAIRevision_Dosing.Dosing_UsageFrequenIntervalUnit_Code',
    foreignField: 'UsageFrequenIntervalUnit_Code',
    justOne: false // for many-to-1 relationships

});

var CountryBasedAIRevision_table = module.exports = mongoose.model('rxp_country_based_ai_revision', rxp_CountryBasedAIRevisionSchema);


module.exports.getLastCode = function(callback){
    
    CountryBasedAIRevision_table.findOne({},callback).sort({CountryBasedAIRevision_Code:-1});
}