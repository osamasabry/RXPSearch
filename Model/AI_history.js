var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var rxp_AIHistorySchema = mongoose.Schema({
    
	AIHistory_Code     	  				 	:Number,
    AIHistory_Name     	 				 	:String,
    AIHistory_ATC_Code						:String,
    AIHistory_NDC_Code                      :String,
    AIHistory_Status 						:Number,
    AIHistory_Pharmaceutical_Categories_ID  :[Number],
    AIHistory_FDAFeed			 			:String,
    AIHistory_EUFeed			 			:String,
    AIHistory_USBoxedWarning                :String,
    
    AIHistory_Alternative_Name                                        :[String],
    AIHistory_Comparative_Efficacy                                    :String,
    AIHistory_Clinical_Practice_Guidelines                            :String,
    AIHistory_Dietary_Considerations                                  :String,
    AIHistory_Medication_Safety_Issues                                :String,
    AIHistory_Contraindications                                       :String,
    AIHistory_Warnings_Precautions                                    :String,
    AIHistory_Geriatric_Considerations                                :String,
    AIHistory_Pregnancy_Considerations                                :String,
    AIHistory_Breast_Feeding_Considerations                           :String,
    AIHistory_Adverse_Reactions                                       :String,
    AIHistory_Allergy_Idiosyncratic_Reactions                         :String,
    AIHistory_Toxicology                                              :String,
    AIHistory_Metabolism_Transport_Effects                            :String,
    AIHistory_Drug_Interactions                                       :String,
    AIHistory_Food_Interactions                                       :String,
    AIHistory_Test_Interactions                                       :String,
    AIHistory_Monitoring_Parameters                                   :String,
    AIHistory_Nursing_Considerations                                  :String,
    AIHistory_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AIHistory_Nursing_Physical_Assessment_Monitoring                  :String,
    AIHistory_Mechanism_Of_Action                                     :String,
    AIHistory_Pharmacodynamics_Kinetics                               :String,
    AIHistory_Pharmacodynamics_Kinetics_Additional_Considerations     :String,
    AIHistory_Dental_Use                                              :String,
    AIHistory_Local_Anesthetic_Vasoconstrictor_Precautions            :String,
    AIHistory_Dental_Health_Professional_Considerations               :String,
    AIHistory_Effects_On_Dental_Treatment                             :String,
    AIHistory_Dental_Usual_Dosing                                     :String,
    AIHistory_Effects_On_Bleeding                                     :String,
    AIHistory_Related_Information                                     :String,
    AIHistory_Index_Terms                                             :String,
    AIHistory_References                                              :String,

    AIHistory_AssiendToEditor_Employee_ID   :Number,
    AIHistory_EditStatus                    :Number,
    AIHistory_EditedBy_Employee_ID          :Number,
    AIHistory_Log:[{
        AIMasterRevision_Log_Action         :String,
        AIMasterRevision_Log_Date           :Date,
        AIMasterRevision_Log_Employee_ID    :Number,
        AIMasterRevision_Log_Type           :String,
    }],

    AIHistory_AssiendToReviewer_Employee_ID :Number,
    AIHistory_ReviewStatus                  :Number,
    AIHistory_ReviewedBy_Employee_ID        :Number,
    AIHistory_AssiendToGrammer_Employee_ID  :Number,
    AIHistory_GrammerStatus                 :Number,
    AIHistory_GrammerReviewBy_Employee_ID   :Number,
    AIHistory_AssiendToPublisher_Employee_ID:Number,
    AIHistory_PublishStatus                 :Number,
    AIHistory_Publishedby_Employee_ID       :Number,
    AIHistory_VersionCode                   :Number,
    AIHistory_Comments                       :[{
        AIMasterRevision_Comments_Employee_ID       : Number,
        AIMasterRevision_Comments_ToEmployee_ID     : Number,
        AIMasterRevision_Comments_Message           : String,
        AIMasterRevision_Comments_Date              : Date,
        AIMasterRevision_Comments_SenderRoleType    : String
    }],

    AIHistory_Interaction_Food           :[{
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

    AIHistory_Interaction_AI           :[{
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

    AIHistory_Interaction_LabTest     :[{
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

    AIHistory_Interaction_Herbs     :[{
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

    AIHistory_Interaction_Alcohol     :[{
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

    AIHistory_Interaction_Note     :String,
    AIHistory_Dosing_Note          :String,
    AIHistory_Alert                           :String,
    AIHistory_Dosing                          :[{
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
    AIHistory_UsaageLabeledIndications        :String,
    AIHistory_UsaageOffLabeledIndications     :String,
    AIHistory_Administration_IV               :String,
    AIHistory_Administration_Injectable_Detail:String,
    AIHistory_Administration_Oral             :String,
    AIHistory_Administration_Rectal           :String,
    AIHistory_DietaryConsiderations           :String,
    AIHistory_PreparationForAdministration    :String,
    AIHistory_PregnancyConsideration          :String,
    AIHistory_Storage_Stability               :String,
    AIHistory_Compatibility                   :String,

},{
    toObject: { virtuals: true }
});



rxp_AIHistorySchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AIHistory_Interaction_Food.Compain_Code',
    foreignField: 'Food_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('LevelFood', {
    ref: 'rxp_interaction_level',
    localField: 'AIHistory_Interaction_Food.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('ReliabilityFood', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIHistory_Interaction_Food.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('SeverityFood', {
    ref: 'rxp_interaction_severity',
    localField: 'AIHistory_Interaction_Food.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});



rxp_AIHistorySchema.virtual('Alcohol', {
    ref: 'rxp_lut_alcohol',
    localField: 'AIHistory_Interaction_Alcohol.Compain_Code',
    foreignField: 'Alcohol_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('LevelAlcohol', {
    ref: 'rxp_interaction_level',
    localField: 'AIHistory_Interaction_Alcohol.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('ReliabilityAlcohol', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIHistory_Interaction_Alcohol.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('SeverityAlcohol', {
    ref: 'rxp_interaction_severity',
    localField: 'AIHistory_Interaction_Alcohol.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});



rxp_AIHistorySchema.virtual('Herbs', {
    ref: 'rxp_lut_herbs',
    localField: 'AIHistory_Interaction_Herbs.Compain_Code',
    foreignField: 'Herbs_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('LevelHerbs', {
    ref: 'rxp_interaction_level',
    localField: 'AIHistory_Interaction_Herbs.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('ReliabilityHerbs', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIHistory_Interaction_Herbs.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('SeverityHerbs', {
    ref: 'rxp_interaction_severity',
    localField: 'AIHistory_Interaction_Herbs.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AIHistorySchema.virtual('LabTest', {
    ref: 'rxp_lut_lab_test',
    localField: 'AIHistory_Interaction_LabTest.Compain_Code',
    foreignField: 'LabTest_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('LevelLabTest', {
    ref: 'rxp_interaction_level',
    localField: 'AIHistory_Interaction_LabTest.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('ReliabilityLabTest', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIHistory_Interaction_LabTest.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('SeverityLabTest', {
    ref: 'rxp_interaction_severity',
    localField: 'AIHistory_Interaction_LabTest.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('AI', {
    ref: 'rxp_ai',
    localField: 'AIHistory_Interaction_AI.Compain_Code',
    foreignField: 'AI_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('LevelAI', {
    ref: 'rxp_interaction_level',
    localField: 'AIHistory_Interaction_AI.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('ReliabilityAI', {
    ref: 'rxp_interaction_reliability',
    localField: 'AIHistory_Interaction_AI.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AIHistorySchema.virtual('SeverityAI', {
    ref: 'rxp_interaction_severity',
    localField: 'AIHistory_Interaction_AI.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});



var AI_History = module.exports = mongoose.model('rxp_ai_history', rxp_AIHistorySchema);


module.exports.getLastCode = function(callback){
    
    AI_History.findOne({},callback).sort({AIHistory_Code:-1});
}
