var mongoose = require('mongoose');



var rxp_AIMasterRevisionsSchema = mongoose.Schema({
    
    AIMasterRevision_Code                                                    :Number,
    AIMasterRevision_Name                                                    :String,
    AIMasterRevision_ATC_Code                                                :[String],
    AIMasterRevision_NDC_Code                                                :String,
    AIMasterRevision_Status                                                  :Number,
    AIMasterRevision_Pharmacological_Categories_ID                           :[Number],
    AIMasterRevision_Alternative_Name                                        :[String],
    AIMasterRevision_FDAFeed_Alerts                                          :String,
    AIMasterRevision_EUFeed_Alerts                                           :String,
    AIMasterRevision_General_Alerts                                          :String,
    AIMasterRevision_BlackBoxWarning                                         :String,
    AIMasterRevision_Comparative_Efficacy                                    :String,
    AIMasterRevision_Clinical_Practice_Guidelines                            :String,
    AIMasterRevision_Dietary_Considerations                                  :String,
    AIMasterRevision_Medication_Safety_Issues                                :String,
    AIMasterRevision_Contraindications                                       :String,
    AIMasterRevision_Warnings_Precautions                                    :String,
    AIMasterRevision_Geriatric_Considerations                                :String,
    AIMasterRevision_Pediatric_Considerations                                :String,// need add to routes and modules
    AIMasterRevision_Pregnancy_Category_Code                                 :Number,
    AIMasterRevision_Pregnancy_Considerations                                :String,
    AIMasterRevision_Breast_Feeding_Category_Code                            :Number,
    AIMasterRevision_Breast_Feeding_Considerations                           :String,
    AIMasterRevision_First_Trimester_Considerations                          :String,
    AIMasterRevision_Second_Trimester_Considerations                         :String,
    AIMasterRevision_Third_Trimester_Considerations                          :String,
    AIMasterRevision_Adverse_Reactions                                       :String,
    AIMasterRevision_Allergy_Idiosyncratic_Reactions                         :String,
    AIMasterRevision_Toxicology                                              :String,
    AIMasterRevision_Monitoring_Parameters                                   :String,
    AIMasterRevision_Nursing_Considerations                                  :String,
    AIMasterRevision_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AIMasterRevision_Nursing_Physical_Assessment_Monitoring                  :String,
    AIMasterRevision_Mechanism_Of_Action                                     :String,
    AIMasterRevision_PharmacoKinetics                                        :String,
    AIMasterRevision_PharmacoKinetics_Additional_Considerations              :String,
    AIMasterRevision_Route_Specific_Pharmacokinetics                         :String,
    AIMasterRevision_Age_Specific_Pharmacokinetics                           :String,
    AIMasterRevision_Pearls_Related_Information                              :String,
    AIMasterRevision_References                                              :String,
    AIMasterRevision_VersionCode                                             :Number,
    AIMasterRevision_AI_ID                                                   :Number,

    AIMasterRevision_AssiendToEditor_Employee_ID                             :Number,
    AIMasterRevision_EditStatus                                              :Number,
    AIMasterRevision_EditedBy_Employee_ID                                    :Number,
    AIMasterRevision_Log:[{
        AIMasterRevision_Log_Action         :String,
        AIMasterRevision_Log_Date           :Date,
        AIMasterRevision_Log_Employee_ID    :Number,
        AIMasterRevision_Log_Type           :String,
    }],
    AIMasterRevision_AssiendToReviewer_Employee_ID                            :Number,
    AIMasterRevision_ReviewStatus                                             :Number,
    AIMasterRevision_ReviewedBy_Employee_ID                                   :Number,
    AIMasterRevision_AssiendToGrammer_Employee_ID                             :Number,
    AIMasterRevision_GrammerStatus                                            :Number,
    AIMasterRevision_GrammerReviewBy_Employee_ID                              :Number,
    AIMasterRevision_AssiendToPublisher_Employee_ID                           :Number,
    AIMasterRevision_PublishStatus                                            :Number,
    AIMasterRevision_Publishedby_Employee_ID                                  :Number,
    AIMasterRevision_VersionCode                                              :Number,
    AIMasterRevision_Comments                       :[{
        AIMasterRevision_Comments_Employee_ID       : Number,
        AIMasterRevision_Comments_ToEmployee_ID     : Number,
        AIMasterRevision_Comments_Message           : String,
        AIMasterRevision_Comments_Date              : Date,
        AIMasterRevision_Comments_SenderRoleType    : String
    }],

    AIMasterRevision_Dosing                          :[{
        Dosing_UsageAge_Code                       : Number,
        Dosing_Population_Code                     : Number,
        Dosing_MedicalCondition_Code               : Number,
        Dosing_Route_Code                          : Number,
        Dosing_Discussion                          : String,
    }],

    // AIMasterRevision_Interaction_Food           :[{
    //         Food_Code           : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Managment   : String,
    //         Discusion           : String, 
    //         Reffrerance         : String,
    //         Note                : String,
    // }],

    // AIMasterRevision_Interaction_AI           :[{
    //         AI_Code             : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Managment   : String,
    //         Discusion           : String,
    //         Reffrerance         : String,
    //         Note                : String,
    // }],

    // AIMasterRevision_Interaction_LabTest     :[{
    //         LabTest_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Managment   : String,
    //         Discusion           : String,
    //         Reffrerance         : String,
    //         Note                : String,
    // }],

    // AIMasterRevision_Interaction_Herbs     :[{
    //         Herbs_Code          : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Managment   : String,
    //         Discusion           : String,
    //         Reffrerance         : String,
    //         Note                : String,
    // }],

    // AIMasterRevision_Interaction_Alcohol     :[{
    //         Alcohol_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Managment   : String,
    //         Discusion           : String,
    //         Reffrerance         : String,
    //         Note                : String,
    // }],

    AIMasterRevision_Interaction_General_Info                                 :String,
    AIMasterRevision_LabeledIndications                                       :String,
    AIMasterRevision_OffLabeledIndications                                    :String,
    AIMasterRevision_Storage                                                  :String,
    AIMasterRevision_Stability                                                :String,
    AIMasterRevision_PreparationForAdministration                             :String,
    AIMasterRevision_Dental_Information                                       :String,
    AIMasterRevision_Pharmacodynamics                                         :String,
    AIMasterRevision_IV_Compatibility                                         :String,
   
    AIMasterRevision_Administration_Rectal                                    :String,
    AIMasterRevision_Administration_Oral                                      :String,
    AIMasterRevision_Administration_Intravenous                               :String,
    AIMasterRevision_Administration                                           :String,
    AIMasterRevision_Administration_Auricular                                 :String,
    AIMasterRevision_Administration_Buccal                                    :String,
    AIMasterRevision_Administration_Conjunctival                              :String,
    AIMasterRevision_Administration_Cutaneous                                 :String,
    AIMasterRevision_Administration_Dental                                    :String,
    AIMasterRevision_Administration_Electro_Osmosis                           :String,
    AIMasterRevision_Administration_Endocervical                              :String,
    AIMasterRevision_Administration_Endosinusial                              :String,
    AIMasterRevision_Administration_Endotracheal                              :String,
    AIMasterRevision_Administration_Enteral                                   :String,
    AIMasterRevision_Administration_Epidural                                  :String,
    AIMasterRevision_Administration_Extra_Amniotic                            :String,
    AIMasterRevision_Administration_Extracorporeal                            :String,
    AIMasterRevision_Administration_Hemodialysis                              :String,
    AIMasterRevision_Administration_Infiltration                              :String,
    AIMasterRevision_Administration_Interstitial                              :String,
    AIMasterRevision_Administration_Intra_Abdominal                           :String,
    AIMasterRevision_Administration_Intra_Amniotic                            :String,
    AIMasterRevision_Administration_Intra_Arterial                            :String,
    AIMasterRevision_Administration_Intra_Articular                           :String,
    AIMasterRevision_Administration_Intrabiliary                              :String,
    AIMasterRevision_Administration_Intrabronchial                            :String,
    AIMasterRevision_Administration_Intrabursal                               :String,
    AIMasterRevision_Administration_Intracardiac                              :String,
    AIMasterRevision_Administration_Intracartilaginous                        :String,
    AIMasterRevision_Administration_Intracaudal                               :String,
    AIMasterRevision_Administration_Intracavernous                            :String,
    AIMasterRevision_Administration_Intracavitary                             :String,
    AIMasterRevision_Administration_Intracerebral                             :String,
    AIMasterRevision_Administration_Intracisternal                            :String,
    AIMasterRevision_Administration_Intracorneal                              :String,
    AIMasterRevision_Administration_Intracoronal_Dental                       :String,
    
    AIMasterRevision_Administration_Intracoronary                             :String,
    AIMasterRevision_Administration_Intracorporus_Cavernosum                  :String,
    AIMasterRevision_Administration_Intradermal                               :String,
    AIMasterRevision_Administration_Intradiscal                               :String,
    AIMasterRevision_Administration_Intraductal                               :String,
    AIMasterRevision_Administration_Intraduodenal                             :String,
    AIMasterRevision_Administration_Intradural                                :String,
    AIMasterRevision_Administration_Intraepidermal                            :String,
    AIMasterRevision_Administration_Intraesophageal                           :String,
    AIMasterRevision_Administration_Intragastric                              :String,
    AIMasterRevision_Administration_Intragingival                             :String,
    AIMasterRevision_Administration_Intraileal                                :String,
    AIMasterRevision_Administration_Intralesional                             :String,
    AIMasterRevision_Administration_Intraluminal                              :String,
    AIMasterRevision_Administration_Intralymphatic                            :String,
    AIMasterRevision_Administration_Intramedullary                            :String,
    AIMasterRevision_Administration_Intrameningeal                            :String,
    AIMasterRevision_Administration_Intramuscular                             :String,
    AIMasterRevision_Administration_Intraocular                               :String,
    AIMasterRevision_Administration_Intraovarian                              :String,
    AIMasterRevision_Administration_Intrapericardial                          :String,
    AIMasterRevision_Administration_Intraperitoneal                           :String,
    AIMasterRevision_Administration_Intrapleural                              :String,
    AIMasterRevision_Administration_Intraprostatic                            :String,
    AIMasterRevision_Administration_Intrapulmonary                            :String,
    AIMasterRevision_Administration_Intrasinal                                :String,
    AIMasterRevision_Administration_Intraspinal                               :String,
    AIMasterRevision_Administration_Intrasynovial                             :String,
    AIMasterRevision_Administration_Intratendinous                            :String,
    AIMasterRevision_Administration_Intratesticular                           :String,
    AIMasterRevision_Administration_Intrathecal                               :String,
    AIMasterRevision_Administration_Intrathoracic                             :String,
    AIMasterRevision_Administration_Intratubular                              :String,
    AIMasterRevision_Administration_Intratumor                                :String,
    AIMasterRevision_Administration_Intratympanic                             :String,
    AIMasterRevision_Administration_Intrauterine                              :String,
    AIMasterRevision_Administration_Intravascular                             :String,
    AIMasterRevision_Administration_Intravenous_Bolus                         :String,
    AIMasterRevision_Administration_Intravenous_Drip                          :String,
    AIMasterRevision_Administration_Intraventricular                          :String,
    AIMasterRevision_Administration_Intravesical                              :String,
    AIMasterRevision_Administration_Intravitreal                              :String,
    AIMasterRevision_Administration_Iontophoresis                             :String,
    AIMasterRevision_Administration_Irrigation                                :String,
    AIMasterRevision_Administration_Laryngeal                                 :String,
    AIMasterRevision_Administration_Nasal                                     :String,
    AIMasterRevision_Administration_Nasogastric                               :String,

    AIMasterRevision_Administration_Not_Applicable                            :String,
    AIMasterRevision_Administration_Occlusive_Dressing_Technique              :String,
    AIMasterRevision_Administration_Ophthalmic                                :String,
    AIMasterRevision_Administration_Oropharyngeal                             :String,
    AIMasterRevision_Administration_Other                                     :String,
    AIMasterRevision_Administration_Parenteral                                :String,
    AIMasterRevision_Administration_Percutaneous                              :String,
    AIMasterRevision_Administration_Periarticular                             :String,
    AIMasterRevision_Administration_Peridural                                 :String,
    AIMasterRevision_Administration_Perineural                                :String,
    AIMasterRevision_Administration_Periodontal                               :String,
    AIMasterRevision_Administration_Respiratory                               :String,
    AIMasterRevision_Administration_Retrobulbar                               :String,
    AIMasterRevision_Administration_Soft_Tissue                               :String,
    AIMasterRevision_Administration_Subarachnoid                              :String,
    AIMasterRevision_Administration_Subconjunctival                           :String,
    AIMasterRevision_Administration_Subcutaneous                              :String,
    AIMasterRevision_Administration_Sublingual                                :String,
   
    AIMasterRevision_Administration_Submucosal                                :String,
    AIMasterRevision_Administration_Topical                                   :String,
    AIMasterRevision_Administration_Transdermal                               :String,
    AIMasterRevision_Administration_Transmucosal                              :String,
    AIMasterRevision_Administration_Transplacental                            :String,
    AIMasterRevision_Administration_Transtracheal                             :String,
    AIMasterRevision_Administration_Transtympanic                             :String,
    AIMasterRevision_Administration_Unassigned                                :String,
    AIMasterRevision_Administration_Unknown                                   :String,
    AIMasterRevision_Administration_Ureteral                                  :String,
    AIMasterRevision_Administration_Urethral                                  :String,
    AIMasterRevision_Administration_Vaginal                                   :String,

},{
    toObject: { virtuals: true }
});



rxp_AIMasterRevisionsSchema.virtual('FromEmployee', {
    ref: 'rxp_employees',
    localField: 'AIMasterRevision_Comments.AIMasterRevision_Comments_Employee_ID',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AIMasterRevisionsSchema.virtual('ToEmployee', {
    ref: 'rxp_employees',
    localField: 'AIMasterRevision_Comments.AIMasterRevision_Comments_ToEmployee_ID',
    foreignField: 'Employee_Code',
    justOne: false // for many-to-1 relationships

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

rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionPopulation', {
    ref: 'rxp_lut_population',
    localField: 'AIMasterRevision_Dosing.Dosing_Population_Code',
    foreignField: 'Population_Code',
    justOne: false // for many-to-1 relationships

});



rxp_AIMasterRevisionsSchema.virtual('MasterAIRevisionDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'AIMasterRevision_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});


rxp_AIMasterRevisionsSchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AIMasterRevision_Interaction_Food.Food_Code',
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
    localField: 'AIMasterRevision_Interaction_Alcohol.Alcohol_Code',
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
    localField: 'AIMasterRevision_Interaction_Herbs.Herbs_Code',
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
    localField: 'AIMasterRevision_Interaction_LabTest.LabTest_Code',
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
    localField: 'AIMasterRevision_Interaction_AI.AI_Code',
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

rxp_AIMasterRevisionsSchema.virtual('AIPregnancyCategory', {
    ref: 'rxp_lut_pregnancy',
    localField: 'AIMasterRevision_Pregnancy_Category_Code',
    foreignField: 'Pregnancy_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AIMasterRevisionsSchema.virtual('AIBreastFeedingCategory', {
    ref: 'rxp_lut_breast_feeding',
    localField: 'AIMasterRevision_Breast_Feeding_Category_Code',
    foreignField: 'BreastFeeding_Code',
    justOne: false // for many-to-1 relationships
});



var AIMasterRevisions  = module.exports = mongoose.model('rxp_AI_master_clinical_data_revision', rxp_AIMasterRevisionsSchema);

module.exports.getLastCode = function(callback){
    
    AIMasterRevisions.findOne({},callback).sort({AIMasterRevision_Code:-1});
}
