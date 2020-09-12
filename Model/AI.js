var mongoose = require('mongoose');

var rxp_AITableSchema = mongoose.Schema({

	  AI_Code     	  				 	                                 :Number,
    AI_Name     	 				 	                                   :String,
    AI_ATC_Code							                                   :[String],
    AI_NDC_Code                                                :String,
    AI_Status 						 	                                   :Number,
    AI_Pharmacological_Categories_ID  	                       :[Number],
    AI_Alternative_Name                                        :[String],
    AI_FDAFeed_Alerts			 				                             :String,
    AI_EUFeed_Alerts			 				                             :String,
    AI_General_Alerts										                       :String,
    AI_BlackBoxWarning                                   	     :String,
   
    AI_Comparative_Efficacy                                    :String,
    AI_Clinical_Practice_Guidelines                            :String,
    AI_Dietary_Considerations                                  :String,
    AI_Medication_Safety_Issues                                :String,
   
    AI_Contraindications                                       :String,
    AI_Warnings_Precautions                                    :String,
    AI_Geriatric_Considerations                                :String,
    AI_Pediatric_Considerations                                :String,// need add to routes and modules
    
    AI_Pregnancy_Category_Code                                 :Number,
    AI_Pregnancy_Considerations                                :String,
    AI_Breast_Feeding_Category_Code                            :Number,
    AI_Breast_Feeding_Considerations                           :String,
    AI_First_Trimester_Considerations                          :String,
    AI_Second_Trimester_Considerations                         :String,
    AI_Third_Trimester_Considerations                          :String,
    
    AI_Adverse_Reactions                                       :String,
    AI_Allergy_Idiosyncratic_Reactions                         :String,
    
    AI_Toxicology                                              :String,
   
    AI_Monitoring_Parameters                                   :String,
    AI_Nursing_Considerations                                  :String,
    AI_Advanced_Practitioners_Physical_Assessment_Monitoring   :String,
    AI_Nursing_Physical_Assessment_Monitoring                  :String,
    
    AI_Mechanism_Of_Action                                     :String,
   
    AI_PharmacoKinetics                               		     :String,
    AI_PharmacoKinetics_Additional_Considerations              :String,
    AI_Route_Specific_Pharmacokinetics						             :String,
    AI_Age_Specific_Pharmacokinetics   						             :String,
    
    AI_Pearls_Related_Information                              :String,
    
    AI_References                                              :String,
    AI_VersionCode                                             :Number,
    
    AI_Dosing                          :[{
        Dosing_UsageAge_Code                       : Number,
        Dosing_Population_Code                     : Number,
        Dosing_MedicalCondition_Code               : Number,
        Dosing_Route_Code                          : Number,
        Dosing_Discussion                          : String,
    }],

    // AI_Interaction_Food           :[{
    //         Food_Code           : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AI_Interaction_AI           :[{
    //         AI_Code             : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AI_Interaction_LabTest     :[{
    //         LabTest_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AI_Interaction_Herbs     :[{
    //         Herbs_Code          : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],

    // AI_Interaction_Alcohol     :[{
    //         Alcohol_Code        : Number,
    //         Severity            : Number,
    //         Level               : Number,
    //         Reliability         : Number,
    //         Alert               : String,
    //         Patient_Management  : String,
    //         Discussion          : String,
    //         Reference           : String,
    // }],


    AI_Interaction_General_Info     						    	          :String,
    
    AI_LabeledIndications        								                :String,
    AI_OffLabeledIndications     							      	          :String,
   
    AI_Storage               									                  :String,
    AI_Stability               									                :String,
    
    AI_Dental_Information									          	          :String,
    
    AI_Pharmacodynamics 										                    :String,
    
    AI_IV_Compatibility                   						          :String,
    
    AI_PreparationForAdministration                             :String,
    AI_Administration_Rectal           							            :String,
    AI_Administration_Oral             							            :String,
    AI_Administration_Intravenous              			            :String,
    AI_Administration 		           							              :String,
    AI_Administration_Auricular           						          :String,
    AI_Administration_Buccal           							            :String,
    AI_Administration_Conjunctival           					          :String,
    AI_Administration_Cutaneous           						          :String,
    AI_Administration_Dental           							            :String,
    AI_Administration_Electro_Osmosis           			          :String,
    AI_Administration_Endocervical           					          :String,
    AI_Administration_Endosinusial           					          :String,
    AI_Administration_Endotracheal                              :String,
    AI_Administration_Enteral                                   :String,
    AI_Administration_Epidural                                  :String,
    AI_Administration_Extra_Amniotic                            :String,
    AI_Administration_Extracorporeal                            :String,
    AI_Administration_Hemodialysis                              :String,
    AI_Administration_Infiltration                              :String,
    AI_Administration_Interstitial                              :String,
    AI_Administration_Intra_Abdominal                           :String,
    AI_Administration_Intra_Amniotic                            :String,
    AI_Administration_Intra_Arterial                            :String,
    AI_Administration_Intra_Articular                           :String,
    AI_Administration_Intrabiliary                              :String,
    AI_Administration_Intrabronchial                            :String,
    AI_Administration_Intrabursal                               :String,
    AI_Administration_Intracardiac                              :String,
    AI_Administration_Intracartilaginous                        :String,
    AI_Administration_Intracaudal                               :String,
    AI_Administration_Intracavernous                            :String,
    AI_Administration_Intracavitary                             :String,
    AI_Administration_Intracerebral                             :String,
    AI_Administration_Intracisternal                            :String,
    AI_Administration_Intracorneal                              :String,
    AI_Administration_Intracoronal_Dental                       :String,
   	
   	AI_Administration_Intracoronary                             :String,
   	AI_Administration_Intracorporus_Cavernosum                  :String,
   	AI_Administration_Intradermal                               :String,
   	AI_Administration_Intradiscal                               :String,
   	AI_Administration_Intraductal                               :String,
   	AI_Administration_Intraduodenal                             :String,
   	AI_Administration_Intradural                                :String,
   	AI_Administration_Intraepidermal                            :String,
   	AI_Administration_Intraesophageal                           :String,
   	AI_Administration_Intragastric                              :String,
   	AI_Administration_Intragingival                             :String,
   	AI_Administration_Intraileal                                :String,
   	AI_Administration_Intralesional                             :String,
   	AI_Administration_Intraluminal                              :String,
   	AI_Administration_Intralymphatic                            :String,
   	AI_Administration_Intramedullary                            :String,
   	AI_Administration_Intrameningeal                            :String,
   	AI_Administration_Intramuscular                             :String,
   	AI_Administration_Intraocular                               :String,
   	AI_Administration_Intraovarian                              :String,
   	AI_Administration_Intrapericardial                          :String,
   	AI_Administration_Intraperitoneal                           :String,
   	AI_Administration_Intrapleural                              :String,
   	AI_Administration_Intraprostatic                            :String,
   	AI_Administration_Intrapulmonary                            :String,
   	AI_Administration_Intrasinal                                :String,
   	AI_Administration_Intraspinal                               :String,
   	AI_Administration_Intrasynovial                             :String,
   	AI_Administration_Intratendinous                            :String,
   	AI_Administration_Intratesticular                           :String,
   	AI_Administration_Intrathecal                               :String,
   	AI_Administration_Intrathoracic                             :String,
   	AI_Administration_Intratubular                              :String,
   	AI_Administration_Intratumor                                :String,
   	AI_Administration_Intratympanic                             :String,
   	AI_Administration_Intrauterine                              :String,
   	AI_Administration_Intravascular                             :String,
   	AI_Administration_Intravenous_Bolus                         :String,
   	AI_Administration_Intravenous_Drip                          :String,
   	AI_Administration_Intraventricular                          :String,
   	AI_Administration_Intravesical                              :String,
   	AI_Administration_Intravitreal                              :String,
   	AI_Administration_Iontophoresis                             :String,
   	AI_Administration_Irrigation                                :String,
   	AI_Administration_Laryngeal                                 :String,
   	AI_Administration_Nasal                                     :String,
   	AI_Administration_Nasogastric                               :String,

   	AI_Administration_Not_Applicable                            :String,
   	AI_Administration_Occlusive_Dressing_Technique              :String,
   	AI_Administration_Ophthalmic                                :String,
   	AI_Administration_Oropharyngeal                             :String,
   	AI_Administration_Other                                     :String,
   	AI_Administration_Parenteral                                :String,
   	AI_Administration_Percutaneous                              :String,
   	AI_Administration_Periarticular                             :String,
   	AI_Administration_Peridural                                 :String,
   	AI_Administration_Perineural                                :String,
   	AI_Administration_Periodontal                               :String,
   	AI_Administration_Respiratory                               :String,
   	AI_Administration_Retrobulbar                               :String,
   	AI_Administration_Soft_Tissue                               :String,
   	AI_Administration_Subarachnoid                              :String,
   	AI_Administration_Subconjunctival                           :String,
   	AI_Administration_Subcutaneous                              :String,
   	AI_Administration_Sublingual                                :String,
   	AI_Administration_Submucosal                                :String,
   	AI_Administration_Topical                                   :String,
   	AI_Administration_Transdermal                               :String,
   	AI_Administration_Transmucosal                              :String,
   	AI_Administration_Transplacental                            :String,
   	AI_Administration_Transtracheal                             :String,
   	AI_Administration_Transtympanic                             :String,
   	AI_Administration_Unassigned                                :String,
   	AI_Administration_Unknown                                   :String,
   	AI_Administration_Ureteral                                  :String,
   	AI_Administration_Urethral                                  :String,
   	AI_Administration_Vaginal                                   :String,

},{
    toObject: { virtuals: true }
});

rxp_AITableSchema.virtual('pharamaceutical', {
    ref: 'rxp_pharmaceutical_category',
    localField: 'AI_Pharmacological_Categories_ID',
    foreignField: 'Pharmaceutical_Category_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('Food', {
    ref: 'rxp_lut_food',
    localField: 'AI_Interaction_Food.Food_Code',
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
    localField: 'AI_Interaction_Alcohol.Alcohol_Code',
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
    localField: 'AI_Interaction_Herbs.Herbs_Code',
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
    localField: 'AI_Interaction_LabTest.LabTest_Code',
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

rxp_AITableSchema.virtual('AI', {
    ref: 'rxp_ai',
    localField: 'AI_Interaction_AI.AI_Code',
    foreignField: 'AI_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('LevelAI', {
    ref: 'rxp_interaction_level',
    localField: 'AI_Interaction_AI.Level',
    foreignField: 'InteractionLevel_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('ReliabilityAI', {
    ref: 'rxp_interaction_reliability',
    localField: 'AI_Interaction_AI.Reliability',
    foreignField: 'InteractionReliability_Code',
    justOne: false // for many-to-1 relationships
});

rxp_AITableSchema.virtual('SeverityAI', {
    ref: 'rxp_interaction_severity',
    localField: 'AI_Interaction_AI.Severity',
    foreignField: 'InteractionSeverity_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AITableSchema.virtual('AIPregnancyCategory', {
    ref: 'rxp_lut_pregnancy',
    localField: 'AI_Pregnancy_Category_Code',
    foreignField: 'Pregnancy_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AITableSchema.virtual('AIBreastFeedingCategory', {
    ref: 'rxp_lut_breast_feeding',
    localField: 'AI_Breast_Feeding_Category_Code',
    foreignField: 'BreastFeeding_Code',
    justOne: false // for many-to-1 relationships
});


rxp_AITableSchema.virtual('AIDosingUsageRoute', {
    ref: 'rxp_lut_route',
    localField: 'AI_Dosing.Dosing_Route_Code',
    foreignField: 'Route_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingMedicalCondition', {
    ref: 'rxp_lut_medical_condition',
    localField: 'AI_Dosing.Dosing_MedicalCondition_Code',
    foreignField: 'MedicalCondition_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIDosingUsageAge', {
    ref: 'rxp_lut_usage_age',
    localField: 'AI_Dosing.Dosing_UsageAge_Code',
    foreignField: 'UsageAge_Code',
    justOne: false // for many-to-1 relationships

});

rxp_AITableSchema.virtual('AIPopulation', {
    ref: 'rxp_lut_population',
    localField: 'AI_Dosing.Population_Code',
    foreignField: 'Population_Code',
    justOne: false // for many-to-1 relationships

});


var AI_table = module.exports = mongoose.model('rxp_ai', rxp_AITableSchema);


module.exports.getLastCode = function(callback){
    
    AI_table.findOne({},callback).sort({AI_Code:-1});
}