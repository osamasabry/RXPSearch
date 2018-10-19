var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

var rxp_CountryBasedAISchema = mongoose.Schema({
    
    CountryBasedAI_Code                            :Number,
	CountryBasedAI_Dosing     	  				   :[{
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
    CountryBasedAI_UsaageLabeledIndications 	   :String,
    CountryBasedAI_UsaageOffLabeledIndications 	   :String,
    CountryBasedAI_Administration  				   :String,
    CountryBasedAI_DietaryConsiderations		   :String,
    CountryBasedAI_PreparationForAdministration    :String,
    CountryBasedAI_PregnancyConsideration		   :String,
    CountryBasedAI_Storage			               :String,
    CountryBasedAI_Stability					   :String,
    CountryBasedAI_AI_Code                         :Number,
    CountryBasedAI_Country_ID                      :Number,
    
},{
    toObject: { virtuals: true }
});

rxp_CountryBasedAISchema.virtual('CountryBasedAICountry', {
    ref: 'rxp_countries',
    localField: 'CountryBasedAI_Country_ID',
    foreignField: 'Country_Code',
    justOne: true // for many-to-1 relationships

});


rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'CountryBasedAI_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'CountryBasedAI_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageDoseType', {
    ref: 'rxp_lut_usage_dose_type',
    localField: 'CountryBasedAI_Dosing.Dosing_UsageDoseType_Code',
    foreignField: 'UsageDoseType_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageDoseUnit', {
    ref: 'rxp_lut_usage_dose_unit',
    localField: 'CountryBasedAI_Dosing.Dosing_UsageDoseUnit_Code',
    foreignField: 'UsageDoseUnit_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'CountryBasedAI_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageForm', {
    ref: 'rxp_lut_form',
    localField: 'CountryBasedAI_Dosing.Dosing_Form_Code',
    foreignField: 'Form_Code',
    justOne: false // for many-to-1 relationships

});
rxp_CountryBasedAISchema.virtual('CountryBasedAIDosingUsageFrequenIntervalUnit', {
    ref: 'rxp_lut_usage_frequency_interval_unit',
    localField: 'CountryBasedAI_Dosing.Dosing_UsageFrequenIntervalUnit_Code',
    foreignField: 'UsageFrequenIntervalUnit_Code',
    justOne: false // for many-to-1 relationships

});


var CountryBasedAI_table = module.exports = mongoose.model('rxp_country_based_ai', rxp_CountryBasedAISchema);


module.exports.getLastCode = function(callback){
    
    CountryBasedAI_table.findOne({},callback).sort({CountryBasedAI_Code:-1});
}