var AI = require('../Model/AI');
var TN = require('../Model/TN');

var DataBySearch = [];


module.exports = {

	checkDataBySearch:function(req,res){
		var Searchquery = req.body.search;

		AI.find({AI_ATC_Code:{$regex:Searchquery}})
			// .select('AI_Code AI_Name')
			.exec(function(err, ATC_Code) {
				if (err){
					return response.send({
						user : request.user ,
						message: err
					});
				}else if(ATC_Code.length = 1){
					res.send(ATC_Code);					
				}else {
					DataBySearch.push(ATC_Code);
					getNDCCode()
				}

			function getNDCCode(){
				AI.find({AI_NDC_Code:{$regex:Searchquery}})
				// .select('AI_Code AI_Name')
				.exec(function(err, NDC_Code) {
					if (err){
						return response.send({
							user : request.user ,
							message: err
						});
					}else if(NDC_Code.length = 1){
						res.send(NDC_Code);					
					}else {
						DataBySearch.push(NDC_Code);
						getAIData()
					}
				})
			}

			function getAIData(){
				AI.find({AI_Name:{$regex:Searchquery}})
				.select('AI_Code AI_Name')
				.exec(function(err, ai) {
					if (err){
						return response.send({
							user : request.user ,
							message: err
						});
					}else {
						DataBySearch.push(ai);
						getTNData()
					}
				})
			}

			function getTNData(){
				DataBySearch = [];

				TN.find({TN_Name:{$regex:Searchquery}})
				.select('TN_Code TN_Name')
				.exec(function(err, tn) {
					if (err){
						return response.send({
							user : request.user ,
							message: err
						});
					}else {
						DataBySearch.push(tn);
					}
					res.send(DataBySearch);
				})
			}
		})
	}
}


