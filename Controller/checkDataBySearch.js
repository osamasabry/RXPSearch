var AI = require('../Model/AI');
var TN = require('../Model/TN');

var DataBySearch = [];


module.exports = {

	checkDataBySearch:function(req,res){
		var Searchquery = req.body.search;
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


