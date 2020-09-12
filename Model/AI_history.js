var mongoose = require('mongoose');

var rxp_AIHistorySchema = mongoose.Schema({
    
	AIHistory_Code     	  				 	:Number,
    AIHistory_Name                                                    :String,
    AIHistory_ATC_Code                                                :[String],
    AIHistory_NDC_Code                                                :String,
    AIHistory_Status                                                  :Number,
    AIHistory_Pharmacological_Categories_ID                           :[Number],
    AIHistory_Alternative_Name                                        :[String],
    AIHistory_FDAFeed_Alerts                                          :String,
    AIHistory_EUFeed_Alerts                                           :String,
    AIHistory_General_Alerts                                          :String,
    AIHistory_BlackBoxWarning                                         :String,
    AIHistory_Comparative_Efficacy                                    :String,
    AIHistory_Clinical_Practice_Guidelines                            :String,
    AIHistory_Dietary_Considerations                                  :String,
    AIHistory_Medication_Safety_Issues                                :String,
    AIHistory_Contraindications                                       :String,
    AIHistory_Warnings_Precautions                                    :String,
    AIHistory_Geriatric_Considerations                                :String,
    AIHistory_Pediatric_Considerations                                :String,// need add to routes and modules
    AIHistory_Pregnancy_Category_Code                                 :Number,
    AIHistory_Pregnancy_Considerations                                :String,
    AIHistory_Breast_Feeding_Category_Code                            :Number,
    AIHistory_Breast_Feeding_Considerations                           :String,
    AIHistory_First_Trimester_Considerations                          :String,
    AIHistory_Second_Trimester_Considerations                         :String,
    AIHistory_Third_Trimester_Considerations                          :String,
    AIHistory_Adverse_Reactions                                       :String,
    AIHistory_Allergy_Idiosyncratic_Reactions                         :String,
    AIHistory_Toxicology                                              :String,
    AIHistory_Monitoring_Parameters                                   :String,
    AIHistory_Nursing_Considerations                                  :String,
    AIHistory_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AIHistory_Nursing_Physical_Assessment_Monitoring                  :String,
    AIHistory_Mechanism_Of_Action                                     :String,
    AIHistory_PharmacoKinetics                                        :String,
    AIHistory_PharmacoKinetics_Additional_Considerations              :String,
    AIHistory_Route_Specific_Pharmacokinetics                         :String,
    AIHistory_Age_Specific_Pharmacokinetics                           :String,
    AIHistory_Pearls_Related_Information                              :String,
    AIHistory_References                                              :String,
    AIHistory_VersionCode                                             :Number,
    AIHistory_AI_ID                                                   :Number,

    AIHistory_AssiendToEditor_Employee_ID                             :Number,
    AIHistory_EditStatus                                              :Number,
    AIHistory_EditedBy_Employee_ID                                    :Number,
    AIHistory_Log:[{
        AIMasterRevision_Log_Action         :String,
        AIMasterRevision_Log_Date           :Date,
        AIMasterRevision_Log_Employee_ID    :Number,
        AIMasterRevision_Log_Type           :String,
    }],
    AIHistory_AssiendToReviewer_Employee_ID                            :Number,
    AIHistory_ReviewStatus                                             :Number,
    AIHistory_ReviewedBy_Employee_ID                                   :Number,
    AIHistory_AssiendToGrammer_Employee_ID                             :Number,
    AIHistory_GrammerStatus                                            :Number,
    AIHistory_GrammerReviewBy_Employee_ID                              :Number,
    AIHistory_AssiendToPublisher_Employee_ID                           :Number,
    AIHistory_PublishStatus                                            :Number,
    AIHistory_Publishedby_Employee_ID                                  :Number,
    AIHistory_VersionCode                                              :Number,
    AIHistory_Comments                       :[{
        AIMasterRevision_Comments_Employee_ID       : Number,
        AIMasterRevision_Comments_ToEmployee_ID     : Number,
        AIMasterRevision_Comments_Message           : String,
        AIMasterRevision_Comments_Date              : Date,
        AIMasterRevision_Comments_SenderRoleType    : String
    }],

    AIHistory_Dosing                          :[{
        Dosing_UsageAge_Code                       : Number,
        Dosing_Population_Code                     : Number,
        Dosing_MedicalCondition_Code               : Number,
        Dosing_Route_Code                          : Number,
        Dosing_Discussion                          : String,
    }],

    // AIHistory_Interaction_Food           :[{
    //         Food_Code           : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AIHistory_Interaction_AI           :[{
    //         AI_Code             : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AIHistory_Interaction_LabTest     :[{
    //         LabTest_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AIHistory_Interaction_Herbs     :[{
    //         Herbs_Code          : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AIHistory_Interaction_Alcohol     :[{
    //         Alcohol_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    AIHistory_Interaction_General_Info                                 :String,
    AIHistory_LabeledIndications                                       :String,
    AIHistory_OffLabeledIndications                                    :String,
    AIHistory_Storage                                                  :String,
    AIHistory_Stability                                                :String,
    AIHistory_PreparationForAdministration                             :String,
    AIHistory_Dental_Information                                       :String,
    AIHistory_Pharmacodynamics                                         :String,
    AIHistory_IV_Compatibility                                         :String,
    AIHistory_Administration_Rectal                                    :String,
    AIHistory_Administration_Oral                                      :String,
    AIHistory_Administration_Intravenous                               :String,
    AIHistory_Administration                                           :String,
    AIHistory_Administration_Auricular                                 :String,
    AIHistory_Administration_Buccal                                    :String,
    AIHistory_Administration_Conjunctival                              :String,
    AIHistory_Administration_Cutaneous                                 :String,
    AIHistory_Administration_Dental                                    :String,
    AIHistory_Administration_Electro_Osmosis                           :String,
    AIHistory_Administration_Endocervical                              :String,
    AIHistory_Administration_Endosinusial                              :String,
    AIHistory_Administration_Endotracheal                              :String,
    AIHistory_Administration_Enteral                                   :String,
    AIHistory_Administration_Epidural                                  :String,
    AIHistory_Administration_Extra_Amniotic                            :String,
    AIHistory_Administration_Extracorporeal                            :String,
    AIHistory_Administration_Hemodialysis                              :String,
    AIHistory_Administration_Infiltration                              :String,
    AIHistory_Administration_Interstitial                              :String,
    AIHistory_Administration_Intra_Abdominal                           :String,
    AIHistory_Administration_Intra_Amniotic                            :String,
    AIHistory_Administration_Intra_Arterial                            :String,
    AIHistory_Administration_Intra_Articular                           :String,
    AIHistory_Administration_Intrabiliary                              :String,
    AIHistory_Administration_Intrabronchial                            :String,
    AIHistory_Administration_Intrabursal                               :String,
    AIHistory_Administration_Intracardiac                              :String,
    AIHistory_Administration_Intracartilaginous                        :String,
    AIHistory_Administration_Intracaudal                               :String,
    AIHistory_Administration_Intracavernous                            :String,
    AIHistory_Administration_Intracavitary                             :String,
    AIHistory_Administration_Intracerebral                             :String,
    AIHistory_Administration_Intracisternal                            :String,
    AIHistory_Administration_Intracorneal                              :String,
    AIHistory_Administration_Intracoronal_Dental                       :String,
    
    AIHistory_Administration_Intracoronary                             :String,
    AIHistory_Administration_Intracorporus_Cavernosum                  :String,
    AIHistory_Administration_Intradermal                               :String,
    AIHistory_Administration_Intradiscal                               :String,
    AIHistory_Administration_Intraductal                               :String,
    AIHistory_Administration_Intraduodenal                             :String,
    AIHistory_Administration_Intradural                                :String,
    AIHistory_Administration_Intraepidermal                            :String,
    AIHistory_Administration_Intraesophageal                           :String,
    AIHistory_Administration_Intragastric                              :String,
    AIHistory_Administration_Intragingival                             :String,
    AIHistory_Administration_Intraileal                                :String,
    AIHistory_Administration_Intralesional                             :String,
    AIHistory_Administration_Intraluminal                              :String,
    AIHistory_Administration_Intralymphatic                            :String,
    AIHistory_Administration_Intramedullary                            :String,
    AIHistory_Administration_Intrameningeal                            :String,
    AIHistory_Administration_Intramuscular                             :String,
    AIHistory_Administration_Intraocular                               :String,
    AIHistory_Administration_Intraovarian                              :String,
    AIHistory_Administration_Intrapericardial                          :String,
    AIHistory_Administration_Intraperitoneal                           :String,
    AIHistory_Administration_Intrapleural                              :String,
    AIHistory_Administration_Intraprostatic                            :String,
    AIHistory_Administration_Intrapulmonary                            :String,
    AIHistory_Administration_Intrasinal                                :String,
    AIHistory_Administration_Intraspinal                               :String,
    AIHistory_Administration_Intrasynovial                             :String,
    AIHistory_Administration_Intratendinous                            :String,
    AIHistory_Administration_Intratesticular                           :String,
    AIHistory_Administration_Intrathecal                               :String,
    AIHistory_Administration_Intrathoracic                             :String,
    AIHistory_Administration_Intratubular                              :String,
    AIHistory_Administration_Intratumor                                :String,
    AIHistory_Administration_Intratympanic                             :String,
    AIHistory_Administration_Intrauterine                              :String,
    AIHistory_Administration_Intravascular                             :String,
    AIHistory_Administration_Intravenous_Bolus                         :String,
    AIHistory_Administration_Intravenous_Drip                          :String,
    AIHistory_Administration_Intraventricular                          :String,
    AIHistory_Administration_Intravesical                              :String,
    AIHistory_Administration_Intravitreal                              :String,
    AIHistory_Administration_Iontophoresis                             :String,
    AIHistory_Administration_Irrigation                                :String,
    AIHistory_Administration_Laryngeal                                 :String,
    AIHistory_Administration_Nasal                                     :String,
    AIHistory_Administration_Nasogastric                               :String,

    AIHistory_Administration_Not_Applicable                            :String,
    AIHistory_Administration_Occlusive_Dressing_Technique              :String,
    AIHistory_Administration_Ophthalmic                                :String,
    AIHistory_Administration_Oropharyngeal                             :String,
    AIHistory_Administration_Other                                     :String,
    AIHistory_Administration_Parenteral                                :String,
    AIHistory_Administration_Percutaneous                              :String,
    AIHistory_Administration_Periarticular                             :String,
    AIHistory_Administration_Peridural                                 :String,
    AIHistory_Administration_Perineural                                :String,
    AIHistory_Administration_Periodontal                               :String,
    AIHistory_Administration_Respiratory                               :String,
    AIHistory_Administration_Retrobulbar                               :String,
    AIHistory_Administration_Soft_Tissue                               :String,
    AIHistory_Administration_Subarachnoid                              :String,
    AIHistory_Administration_Subconjunctival                           :String,
    AIHistory_Administration_Subcutaneous                              :String,
    AIHistory_Administration_Sublingual                                :String,
    AIHistory_Administration_Submucosal                                :String,
    AIHistory_Administration_Topical                                   :String,
    AIHistory_Administration_Transdermal                               :String,
    AIHistory_Administration_Transmucosal                              :String,
    AIHistory_Administration_Transplacental                            :String,
    AIHistory_Administration_Transtracheal                             :String,
    AIHistory_Administration_Transtympanic                             :String,
    AIHistory_Administration_Unassigned                                :String,
    AIHistory_Administration_Unknown                                   :String,
    AIHistory_Administration_Ureteral                                  :String,
    AIHistory_Administration_Urethral                                  :String,
    AIHistory_Administration_Vaginal                                   :String,

},{
    toObject: { virtuals: true }
});



rxp_AIHistorySchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AIHistory_Interaction_Food.Food_Code',
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
    localField: 'AIHistory_Interaction_Alcohol.Alcohol_Code',
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
    localField: 'AIHistory_Interaction_Herbs.Herbs_Code',
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
    localField: 'AIHistory_Interaction_LabTest.LabTest_Code',
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
    localField: 'AIHistory_Interaction_AI.AI_Code',
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


rxp_AIHistorySchema.virtual('AIPregnancyCategory', {
    ref: 'rxp_lut_pregnancy',
    localField: 'AIHistory_Pregnancy_Category_Code',
    foreignField: 'Pregnancy_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AIHistorySchema.virtual('AIBreastFeedingCategory', {
    ref: 'rxp_lut_breast_feeding',
    localField: 'AIHistory_Breast_Feeding_Category_Code',
    foreignField: 'BreastFeeding_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AIHistorySchema.virtual('AIHistoryDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'AIHistory_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIHistorySchema.virtual('AIHistoryDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'AIHistory_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIHistorySchema.virtual('AIHistoryDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'AIHistory_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIHistorySchema.virtual('AIHistoryPopulation', {
    ref: 'rxp_lut_population',
    localField: 'AIHistory_Dosing.Population_Code',
    foreignField: 'Population_Code',
    justOne: false // for many-to-1 relationships

});


var AI_History = module.exports = mongoose.model('rxp_ai_history', rxp_AIHistorySchema);


module.exports.getLastCode = function(callback){
    
    AI_History.findOne({},callback).sort({AIHistory_Code:-1});
}
