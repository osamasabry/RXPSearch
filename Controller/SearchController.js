var AI = require('../Model/AI');
var TN = require('../Model/TN');
var CountryBasedAI = require('../Model/country_based_AI');
var CountryBasedTN = require('../Model/country_based_TN');

var Country 				   = require('../Model/countries');
var Pharmaceutical_category    = require('../Model/lut_pharmaceutical_categories');
var Forms                      = require('../Model/lut_form');
var Routes                     = require('../Model/lut_route');
var Concentration              = require('../Model/lut_concentration');
var StrengthUnits              = require('../Model/lut_strength_units');
var WeightUnits                = require('../Model/lut_weight_units');
var VolumeUnits                = require('../Model/lut_volume_units');
var Forms                      = require('../Model/lut_form');
var Routes                     = require('../Model/lut_route');
var UsageDoseUnit              = require('../Model/lut_usage_dose_unit');
var UsageDoseDuration          = require('../Model/lut_usage_dose_duration_unit');
var UsageDoseType              = require('../Model/lut_usage_dose_types');
var UsageFrequenInterval       = require('../Model/lut_usage_frequency_interval_unit');
var UsageAge      			   = require('../Model/lut_usage_age');
var MedicalCondition           = require('../Model/lut_medical_condition');



var Data=[];
var AllData=[];
var getTNData=[];

var TNData=[];

var FindData=[];

var DataBySearch = [];

module.exports = {
	SearchByName:function(req,res){
		Data =[];
		AI.aggregate([
			{ "$project": {
				"_id": 0,
				"key": "$AI_Code",
				"value": "$AI_Name",
				"type": "AI"
			}
		}]).exec(function(err, ai) {
				if (err){
					return res.send({
						message: err
					});
				} else {
					Data = Data.concat(ai);
					findTN();
				}
		})

		function findTN(){
			TN.aggregate([
				{ 
				    $match: { 
				        TN_Status: 1,
			    	}
				},
				{ 
					"$project": {
						"_id": 0,
						"key": "$TN_Code",
						"value": "$TN_Name",
						"type": "TN",
						"aicode": "$TN_ActiveIngredients"
					}
				}
			]).exec(function(err, tn) {

				if (err){
					return res.send({
					message: err
					});
				} else {
					Data = Data.concat(tn);
					// getMedicalCondition();
					res.send(Data);
				}
			})
		}

		function getMedicalCondition(){
			MedicalCondition.aggregate([
				{ "$project": {
					"_id": 0,
					"key": "$MedicalCondition_Code",
					"value": "$MedicalCondition_Name",
					"type": "MedicalCondition",
				}
			}]).exec(function(err, medicalCon) {

				if (err){
					return res.send({
					message: err
					});
				} else {
					Data = Data.concat(medicalCon);
					console.log(Data)
					res.send(Data);
				}
			})
		}
	},

	getSingleTN:function(req,res){

		TN.findOne({TN_Code: Number(req.body.TN_Code)},function(err, tn){
			if (err){
				res.send({
					message: err
				});
			} else {
				TNData.push({tndata:tn});
				getCountryBasedTN()
			}
		})

		function getCountryBasedTN(){

			CountryBasedTN.findOne({CountryBasedTN_TN_Code: Number(req.body.TN_Code)},function(err, countrybasedtn){
				if (err){
					res.send({
						message: err
					});
				} else {
					TNData.push({CountryBasedTNData:countrybasedtn});
					res.send(TNData);
				}
			})

		}
	},

	checkDataAI:function(req,res){
		FindData =[];
		AI.findOne({$and:[ {'AI_Code':Number(req.body.AI_Code)}, 
				{$or: [ { 'AI_Status': 1 },{ 'AI_Status': 2 }]}]},function(err, ai){
		// AI.findOne({AI_Code: Number(req.body.AI_Code)},function(err, ai){
			if (err){
				res.send({
					message: err
				});
			} else if(ai){
				FindData.push({AI_Status:true});
			}else{
				FindData.push({AI_Status:false});
			}
			CheckCountryBasedAI();
		})

		function CheckCountryBasedAI(){
			var Searchquery = req.body.country_ids;
			CountryBasedAI.find({$and:[ {'CountryBasedAI_Country_ID':{$in:Searchquery}}, 
				{'CountryBasedAI_AI_Code':Number(req.body.AI_Code)} ]})
				.populate({ path: 'CountryBasedAICountry', select: 'Country_Name' })
				.select('CountryBasedAI_Country_ID')
				.lean().exec(function(err, countrybasedai){
				if (err){
					res.send({
						message: err
					});
				} else {
					var Countries=[];
					for (var i = 0; i < countrybasedai.length; i++) {
						Countries.push({
							CountryCode:countrybasedai[i].CountryBasedAICountry.Country_Code,
							CountryName:countrybasedai[i].CountryBasedAICountry.Country_Name
						});
					}
					FindData.push({Countries: Countries});
				}
				res.send( FindData);
			})
		}
	},

	checkDataTN:function(req,res){
		FindData =[];
		TN.findOne({TN_Code: Number(req.body.TN_Code)},function(err, tn){
			if (err){
				res.send({
					message: err
				});
			} else if(tn) {
				FindData.push({tn:true});
			}else{
				FindData.push({tn:false});
			}
			CheckCountryBasedTN()
		})

		function CheckCountryBasedTN(){
			var Searchquery = req.body.country_ids;
			CountryBasedTN.find({$and:[ {'CountryBasedTN_Country_ID':{$in:Searchquery}}, 
				{'CountryBasedTN_TN_Code':Number(req.body.TN_Code)} ]})
				.populate({ path: 'CountryBasedTNCountry', select: 'Country_Name' })
				.select('CountryBasedTN_Country_ID')
				.lean().exec(function(err, countrybasedtn){
				if (err){
					res.send({
						message: err
					});
				} else {
					var Countries=[];
					for (var i = 0; i < countrybasedtn.length; i++) {
						Countries.push({
							CountryCode:countrybasedtn[i].CountryBasedTNCountry.Country_Code,
							CountryName:countrybasedtn[i].CountryBasedTNCountry.Country_Name
						});
					}
					FindData.push({Countries: Countries});
				}
				res.send(FindData);
			})

		}
	},

	getAIByMedicalCondition:function(req,res){
		var Searchquery = req.body.search;
		AI.find({'AI_Dosing.Dosing_MedicalCondition_Code' :  Number(Searchquery)})
			.select('AI_Code AI_Name')
			.lean()
			.exec(function(err, ai){
			if (err){
				res.send({
					message: err
				});
			} else {
				res.send(ai);
			}
		})
	},

	getDataAI:function(req,res){
		AllData=[];
		getTNData=[];
		AI.findOne({AI_Code: Number(req.body.AI_Code)})
		.populate({ path: "pharamaceutical", select: 'Pharmaceutical_Category_Name Pharmaceutical_Category_ATC_Code -_id' })
		.lean()
		.exec(function(err, ai){
			if (err){
				res.send({
					message: err
				});
			} else {
				AllData.push({AIData:ai});
				getTN();
			}
		})

		function getTN(){
			TN.find({TN_ActiveIngredients:{$in:[req.body.AI_Code]}})
				.select('TN_Code TN_Name')
				.lean()
				.exec(function(err, tn) {
				if (err){
					return res.send({
						message: err
					});
				} else {
					for (var i = 0; i < tn.length; i++) {
						getTNData.push({
							key: tn[i].TN_Code,
							value: tn[i].TN_Name,
						});
					}
					AllData.push({'TNsData':getTNData});
					res.json(AllData);
				}
			})
		}
	},
	
	getDataTN:function(req,res){
		AllData=[];
		TNData=[];
		getTNData=[];
		// console.log(req.body.ai_ids);
		var search = req.body.ai_ids[0];
		
		AI.findOne({AI_Code: Number(search)})
		.populate({ path: 'pharamaceutical', select: 'Pharmaceutical_Category_Name Pharmaceutical_Category_ATC_Code' })
		.lean().exec(function(err, ai){
			if (err){
				res.send({
					message: err
				});
			} else {
				AllData.push({AIData:ai});
				getAllTN();
			}
		})

		function getAllTN(){
			TN.find({TN_ActiveIngredients:{$in:[search]}})
				.select('TN_Code TN_Name')
				.lean()
				.exec(function(err, tn) {
				if (err){
					return res.send({
						message: err
					});
				} else {
					for (var i = 0; i < tn.length; i++) {
						getTNData.push({
							key: tn[i].TN_Code,
							value: tn[i].TN_Name,
						});
					}
					AllData.push({TNList:getTNData});
					getTN();

					// res.send(AllData);
				}
			})
		}
		
		function getTN(){
			TN.find({TN_Code:req.body.TN_Code })
				.populate({ path: 'form', select: 'Form_Name' })
				.populate({ path: 'route', select: 'Route_Name' })
				.populate({ path: 'strength', select: 'StrengthUnit_Name' })
				.populate({ path: 'weight', select: 'WeightUnit_Name' })
				.populate({ path: 'volume', select: 'VolumeUnit_Name' })
				.populate({ path: 'concentration', select: 'ConcentrationUnit_Name' })
				.populate({ path: 'country', select: 'Country_Name Country_Tcode' })
				.populate({ path: 'ai', select: 'AI_Name' })
				.lean().exec(function(err, tn) {
				if (err){
					return res.send({
						message: err
					});
				} else {
					AllData.push({TNData:tn});
					res.send(AllData);
				}
			})
		}
	},

	getDataCountryAI:function(req,res){

        AllData=[];
        getTNData=[];
        AI.findOne({AI_Code: Number(req.body.AI_Code)})
        .populate({ path: "pharamaceutical", select: 'Pharmaceutical_Category_Name Pharmaceutical_Category_ATC_Code -_id' })
		.lean()
		.exec(function(err, ai){
             if (err){
                 res.send({
                     message: err
                 });
             } else {
                 AllData.push({AIData:ai});
                 getCountryBasedAI();
             }
        })

        function getCountryBasedAI (){

            CountryBasedAI.findOne({  $and:[ {'CountryBasedAI_Country_ID':Number(req.body.country_id), 
				'CountryBasedAI_AI_Code':Number(req.body.AI_Code)} ]})
	         	.lean()
	         	.populate({ path: 'CountryBasedAICountry', select: 'Country_Name' })
            	.populate({ path: 'CountryBasedAIDosingUsageAge', select: 'UsageAge_Name' })
				.populate({ path: 'CountryBasedAIDosingMedicalCondition'})
				.populate({ path: 'CountryBasedAIDosingUsageDoseType', select: 'UsageDoseType_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageDoseUnit', select: 'UsageDoseUnit_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageRoute', select: 'Route_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageForm', select: 'Form_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageFrequenIntervalUnit', select: 'UsageFrequenIntervalUnit_Name' })
            	.exec(function(err, countrybasedai){
			
                 if (err){
                     res.send({
                         message: err
                     });
                 } else {
                     AllData.push({CountryBasedAIData:countrybasedai});
                	 getTN();

                 }
             })
        }
        function getTN(){
             TN.find({TN_ActiveIngredients:{$in:[req.body.AI_Code]}})
                .select('TN_Code TN_Name')
                .lean()
                .exec(function(err, tn) {
                 if (err){
                     return res.send({
                         message: err
                     });
                 } else {
                     for (var i = 0; i < tn.length; i++) {
                         getTNData.push({
                             key: tn[i].TN_Code,
                             value: tn[i].TN_Name,
                         });
                     }
                     AllData.push({TNData:getTNData});
                     res.send(AllData);
                 }
             })
        }
    },

    getDataCountryTN:function(req,res){

        AllData=[];
        getTNData=[];
		var search = req.body.ai_ids[0];

        AI.findOne({AI_Code: Number(search)})
    	.populate({ path: "pharamaceutical", select: 'Pharmaceutical_Category_Name Pharmaceutical_Category_ATC_Code -_id' })
		.lean()
		.exec(function(err, ai){
             if (err){
                 res.send({
                     message: err
                 });
             } else {
                 AllData.push({AIData:ai});
                 getCountryBasedAI();
             }
        })

        function getCountryBasedAI (){
        	 
            CountryBasedAI.findOne({ $and:[ {'CountryBasedAI_Country_ID':Number(req.body.country_id), 
				'CountryBasedAI_AI_Code':Number(search)}]})
            	.populate({ path: 'CountryBasedAICountry', select: 'Country_Name' })
            	.populate({ path: 'CountryBasedAIDosingUsageAge', select: 'UsageAge_Name' })
				.populate({ path: 'CountryBasedAIDosingMedicalCondition'})
				.populate({ path: 'CountryBasedAIDosingUsageDoseType', select: 'UsageDoseType_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageDoseUnit', select: 'UsageDoseUnit_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageRoute', select: 'Route_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageForm', select: 'Form_Name' })
				.populate({ path: 'CountryBasedAIDosingUsageFrequenIntervalUnit', select: 'UsageFrequenIntervalUnit_Name' })
            	.exec(function(err, countrybasedai){
                 if (err){
                     res.send({
                         message: err
                     });
                 } else {
                    AllData.push({CountryBasedAIData:countrybasedai});
                 	getCountryBasedTN();

                 }
            })
        }
     
        function getCountryBasedTN (){

            CountryBasedTN.findOne({$and:[ {'CountryBasedTN_Country_ID':Number(req.body.country_id), 
				'CountryBasedTN_TN_Code':Number(req.body.TN_Code)} ]})
            .lean()
			.exec(function(err, countrybasedtn){
                 if (err){
                     res.send({
                         message: err
                     });
                 } else {
                    AllData.push({CountryBasedTNData:countrybasedtn});
                 	getTN();

                 }
            })
        }

        function getTN(){ 
			 TN.find({TN_Code:req.body.TN_Code})
			 	.populate({ path: 'form', select: 'Form_Name' })
				.populate({ path: 'route', select: 'Route_Name' })
				.populate({ path: 'strength', select: 'StrengthUnit_Name' })
				.populate({ path: 'weight', select: 'WeightUnit_Name' })
				.populate({ path: 'volume', select: 'VolumeUnit_Name' })
				.populate({ path: 'concentration', select: 'ConcentrationUnit_Name' })
				.populate({ path: 'country', select: 'Country_Name Country_Tcode' })
				.populate({ path: 'ai', select: 'AI_Name' })
                .lean()
                .exec(function(err, tn) {
                 if (err){
                     return res.send({
                         message: err
                     });
                 } else {
                    AllData.push({TNData:tn});
                 	getAllTN();

                     // res.send(AllData);
                 }
             })
        }

        function getAllTN(){
             TN.find({TN_ActiveIngredients:Number(search)})
                .select('TN_Code TN_Name')
                .lean()
                .exec(function(err, tn) {
                 if (err){
                     return res.send({
                         message: err
                     });
                 } else {
                     for (var i = 0; i < tn.length; i++) {
                         getTNData.push({
                             key: tn[i].TN_Code,
                             value: tn[i].TN_Name,
                         });
                     }
                     AllData.push({AllTNData:getTNData});
                     res.send(AllData);
                 }
             })
        }
    },

}
