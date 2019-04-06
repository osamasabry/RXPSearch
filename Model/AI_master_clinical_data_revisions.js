var mongoose = require('mongoose');



var rxp_AIMasterRevisionsSchema = mongoose.Schema({
    
	AIMasterRevision_Code     	  					:Number,
  	AIMasterRevision_Name     	 				 	:String,
    AIMasterRevision_ATC_Code						:String,
    AIMasterRevision_NDC_Code                       :String,
    AIMasterRevision_Status 						:Number,
    AIMasterRevision_Pharmaceutical_Categories_ID  	:[Number],
    AIMasterRevision_FDAFeed			 			:String,
    AIMasterRevision_EUFeed			 				:String,
    AIMasterRevision_USBoxedWarning                 :String,
    AIMasterRevision_Alternative_Name                                        :[String],    
    AIMasterRevision_Comparative_Efficacy                                    :String,
    AIMasterRevision_Clinical_Practice_Guidelines                            :String,
    AIMasterRevision_Dietary_Considerations                                  :String,
    AIMasterRevision_Medication_Safety_Issues                                :String,
    AIMasterRevision_Contraindications                                       :String,
    AIMasterRevision_Warnings_Precautions                                    :String,
    AIMasterRevision_Geriatric_Considerations                                :String,
    AIMasterRevision_Pregnancy_Considerations                                :String,
    AIMasterRevision_Breast_Feeding_Considerations                           :String,
    AIMasterRevision_Adverse_Reactions                                       :String,
    AIMasterRevision_Allergy_Idiosyncratic_Reactions                         :String,
    AIMasterRevision_Toxicology                                              :String,
    AIMasterRevision_Metabolism_Transport_Effects                            :String,
    AIMasterRevision_Drug_Interactions                                       :String,
    AIMasterRevision_Food_Interactions                                       :String,
    AIMasterRevision_Test_Interactions                                       :String,
    AIMasterRevision_Monitoring_Parameters                                   :String,
    AIMasterRevision_Nursing_Considerations                                  :String,
    AIMasterRevision_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AIMasterRevision_Nursing_Physical_Assessment_Monitoring                  :String,
    AIMasterRevision_Mechanism_Of_Action                                     :String,
    AIMasterRevision_Pharmacodynamics_Kinetics                               :String,
    AIMasterRevision_Pharmacodynamics_Kinetics_Additional_Considerations     :String,
    AIMasterRevision_Dental_Use                                              :String,
    AIMasterRevision_Local_Anesthetic_Vasoconstrictor_Precautions            :String,
    AIMasterRevision_Dental_Health_Professional_Considerations               :String,
    AIMasterRevision_Effects_On_Dental_Treatment                             :String,
    AIMasterRevision_Dental_Usual_Dosing                                     :String,
    AIMasterRevision_Effects_On_Bleeding                                     :String,
    AIMasterRevision_Related_Information                                     :String,
    AIMasterRevision_Index_Terms                                             :String,
    AIMasterRevision_References                                              :String,

    AIMasterRevision_AI_ID 							:Number,

    AIMasterRevision_AssiendToEditor_Employee_ID    :Number,
    AIMasterRevision_EditStatus                     :Number,
    AIMasterRevision_EditedBy_Employee_ID           :Number,
    AIMasterRevision_Log:[{
        AIMasterRevision_Log_Action         :String,
        AIMasterRevision_Log_Date           :Date,
        AIMasterRevision_Log_Employee_ID    :Number,
        AIMasterRevision_Log_Type           :String,
    }],
    AIMasterRevision_AssiendToReviewer_Employee_ID  :Number,
    AIMasterRevision_ReviewStatus                   :Number,
    AIMasterRevision_ReviewedBy_Employee_ID         :Number,
    AIMasterRevision_AssiendToGrammer_Employee_ID   :Number,
    AIMasterRevision_GrammerStatus                  :Number,
    AIMasterRevision_GrammerReviewBy_Employee_ID    :Number,
    AIMasterRevision_AssiendToPublisher_Employee_ID :Number,
    AIMasterRevision_PublishStatus                  :Number,
    AIMasterRevision_Publishedby_Employee_ID        :Number,
    AIMasterRevision_VersionCode                    :Number,
    AIMasterRevision_Comments                       :[{
        AIMasterRevision_Comments_Employee_ID       : Number,
        AIMasterRevision_Comments_ToEmployee_ID     : Number,
        AIMasterRevision_Comments_Message           : String,
        AIMasterRevision_Comments_Date              : Date,
        AIMasterRevision_Comments_SenderRoleType    : String
    }],

    AIMasterRevision_Interaction_Food           :[{
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

    AIMasterRevision_Interaction_AI           :[{
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

    AIMasterRevision_Interaction_LabTest     :[{
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

    AIMasterRevision_Interaction_Herbs     :[{
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

    AIMasterRevision_Interaction_Alcohol     :[{
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

    
    AIMasterRevision_Interaction_Note     :String,

    AIMasterRevision_Alert                           :String,
    AIMasterRevision_Dosing                          :[{
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
    AIMasterRevision_Dosing_Note                     :String,
    AIMasterRevision_UsaageLabeledIndications        :String,
    AIMasterRevision_UsaageOffLabeledIndications     :String,
    AIMasterRevision_Administration_IV               :String,
    AIMasterRevision_Administration_Injectable_Detail:String,
    AIMasterRevision_Administration_Oral             :String,
    AIMasterRevision_Administration_Rectal           :String,
    AIMasterRevision_DietaryConsiderations           :String,
    AIMasterRevision_PreparationForAdministration    :String,
    AIMasterRevision_PregnancyConsideration          :String,
    AIMasterRevision_Storage_Stability               :String,
    AIMasterRevision_Compatibility                   :String,

},{
    toObject: { virtuals: true }
});


rxp_AIMasterRevisionsSchema.virtual('FromEmployee', {
    ref: 'rxp_employees',
    localField: 'AIMasterRevision_Comments.AIMasterRevision_Comments_Employee_ID',
    foreignField: 'Employee_Code',
    justOne: true // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('ToEmployee', {
    ref: 'rxp_employees',
    localField: 'AIMasterRevision_Comments.AIMasterRevision_Comments_ToEmployee_ID',
    foreignField: 'Employee_Code',
    justOne: true // for many-to-1 relationships

});



rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'AIMasterRevision_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'AIMasterRevision_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageDoseType', {
    ref: 'rxp_lut_usage_dose_type',
    localField: 'AIMasterRevision_Dosing.Dosing_UsageDoseType_Code',
    foreignField: 'UsageDoseType_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageDoseUnit', {
    ref: 'rxp_lut_usage_dose_unit',
    localField: 'AIMasterRevision_Dosing.Dosing_UsageDoseUnit_Code',
    foreignField: 'UsageDoseUnit_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'AIMasterRevision_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageForm', {
    ref: 'rxp_lut_form',
    localField: 'AIMasterRevision_Dosing.Dosing_Form_Code',
    foreignField: 'Form_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageFrequenIntervalUnit', {
    ref: 'rxp_lut_usage_frequency_interval_unit',
    localField: 'AIMasterRevision_Dosing.Dosing_UsageFrequenIntervalUnit_Code',
    foreignField: 'UsageFrequenIntervalUnit_Code',
    justOne: false // for many-to-1 relationships

});


rxp_AIMasterRevisionsSchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AIMasterRevision_Interaction_Food.Compain_Code',
    foreignField: 'Food_Code',
    justOne: false // for many-to-1 relationships

});


rxp_AIMasterRevisionsSchema.virtual('LevelFood', {
    ref: 'rxp_interaction_level',
    localField: 'AIMasterRevision_Interaction_Food.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('ReliabilityFood', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIMasterRevision_Interaction_Food.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('SeverityFood', {
    ref: 'rxp_interaction_severity',
    localField: 'AIMasterRevision_Interaction_Food.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships

});


rxp_AIMasterRevisionsSchema.virtual('Alcohol', {
    ref: 'rxp_lut_alcohol',
    localField: 'AIMasterRevision_Interaction_Alcohol.Compain_Code',
    foreignField: 'Alcohol_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('LevelAlcohol', {
    ref: 'rxp_interaction_level',
    localField: 'AIMasterRevision_Interaction_Alcohol.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('ReliabilityAlcohol', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIMasterRevision_Interaction_Alcohol.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('SeverityAlcohol', {
    ref: 'rxp_interaction_severity',
    localField: 'AIMasterRevision_Interaction_Alcohol.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships

});


rxp_AIMasterRevisionsSchema.virtual('Herbs', {
    ref: 'rxp_lut_herbs',
    localField: 'AIMasterRevision_Interaction_Herbs.Compain_Code',
    foreignField: 'Herbs_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('LevelHerbs', {
    ref: 'rxp_interaction_level',
    localField: 'AIMasterRevision_Interaction_Herbs.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('ReliabilityHerbs', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIMasterRevision_Interaction_Herbs.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('SeverityHerbs', {
    ref: 'rxp_interaction_severity',
    localField: 'AIMasterRevision_Interaction_Herbs.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('LabTest', {
    ref: 'rxp_lut_lab_test',
    localField: 'AIMasterRevision_Interaction_LabTest.Compain_Code',
    foreignField: 'LabTest_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('LevelLabTest', {
    ref: 'rxp_interaction_level',
    localField: 'AIMasterRevision_Interaction_LabTest.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('ReliabilityLabTest', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIMasterRevision_Interaction_LabTest.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('SeverityLabTest', {
    ref: 'rxp_interaction_severity',
    localField: 'AIMasterRevision_Interaction_LabTest.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AIMasterRevisionsSchema.virtual('AI', {
    ref: 'rxp_ai',
    localField: 'AIMasterRevision_Interaction_AI.Compain_Code',
    foreignField: 'AI_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('LevelAI', {
    ref: 'rxp_interaction_level',
    localField: 'AIMasterRevision_Interaction_AI.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('ReliabilityAI', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIMasterRevision_Interaction_AI.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIMasterRevisionsSchema.virtual('SeverityAI', {
    ref: 'rxp_interaction_severity',
    localField: 'AIMasterRevision_Interaction_AI.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});



var AIMasterRevisions  = module.exports = mongoose.model('rxp_AI_master_clinical_data_revision', rxp_AIMasterRevisionsSchema);

module.exports.getLastCode = function(callback){
    
    AIMasterRevisions.findOne({},callback).sort({AIMasterRevision_Code:-1});
}
