var mongoose = require('mongoose');

var rxp_AITableSchema = mongoose.Schema({
    
	AI_Code     	  				 	                       :Number,
    AI_Name     	 				 	                       :String,
    AI_ATC_Code							                       :[String],
    AI_NDC_Code                                                :String,
    AI_Status 						 	                       :Number,
    AI_Pharmaceutical_Categories_ID  	                       :[Number],
    AI_FDAFeed			 				                       :String,
    AI_EUFeed			 				                       :String,
    AI_USBoxedWarning                                          :String,
    AI_Alternative_Name                                        :[String],
    AI_Comparative_Efficacy                                    :String,
    AI_Clinical_Practice_Guidelines                            :String,
    AI_Dietary_Considerations                                  :String,
    AI_Medication_Safety_Issues                                :String,
    AI_Contraindications                                       :String,
    AI_Warnings_Precautions                                    :String,
    AI_Geriatric_Considerations                                :String,
    AI_Pregnancy_Considerations                                :String,
    AI_Breast_Feeding_Considerations                           :String,
    AI_Adverse_Reactions                                       :String,
    AI_Allergy_Idiosyncratic_Reactions                         :String,
    AI_Toxicology                                              :String,
    AI_Metabolism_Transport_Effects                            :String,
    AI_Drug_Interactions                                       :String,
    AI_Food_Interactions                                       :String,
    AI_Test_Interactions                                       :String,
    AI_Monitoring_Parameters                                   :String,
    AI_Nursing_Considerations                                  :String,
    AI_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AI_Nursing_Physical_Assessment_Monitoring                  :String,
    AI_Mechanism_Of_Action                                     :String,
    AI_Pharmacodynamics_Kinetics                               :String,
    AI_Pharmacodynamics_Kinetics_Additional_Considerations     :String,
    AI_Dental_Use                                              :String,
    AI_Local_Anesthetic_Vasoconstrictor_Precautions            :String,
    AI_Dental_Health_Professional_Considerations               :String,
    AI_Effects_On_Dental_Treatment                             :String,
    AI_Dental_Usual_Dosing                                     :String,
    AI_Effects_On_Bleeding                                     :String,
    AI_Related_Information                                     :String,
    AI_Index_Terms                                             :String,
    AI_References                                              :String,
    AI_VersionCode                                             :Number,

    AI_Interaction_Food           :[{
            AI                  : Number,
            Compain_Code        : Number,
            Severity            : Number,
            Level               : Number,
            Reliability         : Number,
            Alert               : String,
            Patient_Managment   : String,
            Discusion           : String,
            Reffrerance         : [String],
            Note                : String
    }],

    AI_Interaction_AI           :[{
            AI                  : Number,
            Compain_Code        : Number,
            Severity            : Number,
            Level               : Number,
            Reliability         : Number,
            Alert               : String,
            Patient_Managment   : String,
            Discusion           : String,
            Reffrerance         : [String],
            Note                : String
    }],

    AI_Interaction_LabTest     :[{
            AI                  : Number,
            Compain_Code        : Number,
            Severity            : Number,
            Level               : Number,
            Reliability         : Number,
            Alert               : String,
            Patient_Managment   : String,
            Discusion           : String,
            Reffrerance         : [String],
            Note                : String
    }],

    AI_Interaction_Herbs     :[{
            AI                  : Number,
            Compain_Code        : Number,
            Severity            : Number,
            Level               : Number,
            Reliability         : Number,
            Alert               : String,
            Patient_Managment   : String,
            Discusion           : String,
            Reffrerance         : [String],
            Note                : String
    }],

    AI_Interaction_Alcohol     :[{
            AI                  : Number,
            Compain_Code        : Number,
            Severity            : Number,
            Level               : Number,
            Reliability         : Number,
            Alert               : String,
            Patient_Managment   : String,
            Discusion           : String,
            Reffrerance         : [String],
            Note                : String
    }],

    AI_Interaction_Note     :String,
    AI_Dosing_Note          :String,
    AI_Alert                           :String,
    AI_Dosing                          :[{
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
        Dosing_ScheduleOfAdministration            : String,
        Dosing_Note                                : String
    }],
    AI_UsaageLabeledIndications        :String,
    AI_UsaageOffLabeledIndications     :String,
    AI_Administration_IV               :String,
    AI_Administration_Injectable_Detail:String,
    AI_Administration_Oral             :String,
    AI_Administration_Rectal           :String,
    AI_DietaryConsiderations           :String,
    AI_PreparationForAdministration    :String,
    AI_PregnancyConsideration          :String,
    AI_Storage_Stability               :String,
    AI_Compatibility                   :String,

},{
    toObject: { virtuals: true }
});

rxp_AITableSchema.virtual('pharamaceutical', {
    ref: 'rxp_pharmaceutical_category',
    localField: 'AI_Pharmaceutical_Categories_ID',
    foreignField: 'Pharmaceutical_Category_Code',
    justOne: false // for many-to-1 relationships

});



rxp_AITableSchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AI_Interaction_Food.Compain_Code',
    foreignField: 'Food_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('LevelFood', {
    ref: 'rxp_interaction_level',
    localField: 'AI_Interaction_Food.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('ReliabilityFood', {
    ref: 'rxp_interaction_reliability',
    localField: 'AI_Interaction_Food.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('SeverityFood', {
    ref: 'rxp_interaction_severity',
    localField: 'AI_Interaction_Food.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AITableSchema.virtual('Alcohol', {
    ref: 'rxp_lut_alcohol',
    localField: 'AI_Interaction_Alcohol.Compain_Code',
    foreignField: 'Alcohol_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('LevelAlcohol', {
    ref: 'rxp_interaction_level',
    localField: 'AI_Interaction_Alcohol.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('ReliabilityAlcohol', {
    ref: 'rxp_interaction_reliability',
    localField: 'AI_Interaction_Alcohol.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('SeverityAlcohol', {
    ref: 'rxp_interaction_severity',
    localField: 'AI_Interaction_Alcohol.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('Herbs', {
    ref: 'rxp_lut_herbs',
    localField: 'AI_Interaction_Herbs.Compain_Code',
    foreignField: 'Herbs_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('LevelHerbs', {
    ref: 'rxp_interaction_level',
    localField: 'AI_Interaction_Herbs.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('ReliabilityHerbs', {
    ref: 'rxp_interaction_reliability',
    localField: 'AI_Interaction_Herbs.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('SeverityHerbs', {
    ref: 'rxp_interaction_severity',
    localField: 'AI_Interaction_Herbs.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AITableSchema.virtual('LabTest', {
    ref: 'rxp_lut_lab_test',
    localField: 'AI_Interaction_LabTest.Compain_Code',
    foreignField: 'LabTest_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('LevelLabTest', {
    ref: 'rxp_interaction_level',
    localField: 'AI_Interaction_LabTest.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('ReliabilityLabTest', {
    ref: 'rxp_interaction_reliability',
    localField: 'AI_Interaction_LabTest.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('SeverityLabTest', {
    ref: 'rxp_interaction_severity',
    localField: 'AI_Interaction_LabTest.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});
/////
rxp_AITableSchema.virtual('AIDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'AI_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'AI_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageDoseType', {
    ref: 'rxp_lut_usage_dose_type',
    localField: 'AI_Dosing.Dosing_UsageDoseType_Code',
    foreignField: 'UsageDoseType_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageDoseUnit', {
    ref: 'rxp_lut_usage_dose_unit',
    localField: 'AI_Dosing.Dosing_UsageDoseUnit_Code',
    foreignField: 'UsageDoseUnit_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'AI_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageForm', {
    ref: 'rxp_lut_form',
    localField: 'AI_Dosing.Dosing_Form_Code',
    foreignField: 'Form_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageFrequenIntervalUnit', {
    ref: 'rxp_lut_usage_frequency_interval_unit',
    localField: 'AI_Dosing.Dosing_UsageFrequenIntervalUnit_Code',
    foreignField: 'UsageFrequenIntervalUnit_Code',
    justOne: false // for many-to-1 relationships

});




var AI_table = module.exports = mongoose.model('rxp_ai', rxp_AITableSchema);


module.exports.getLastCode = function(callback){
    
    AI_table.findOne({},callback).sort({AI_Code:-1});
}
