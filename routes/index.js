var models = require('../model');


exports.view = function(req, res) {
   // var data = {data: []};


    models.Message.find({}, function(err, stuff){
		    if (!err){
		   // console.log(stuff);
		   
		    var data = {'data': stuff};
		    //console.log(data);
		    res.render('index', data);
		    } else { console.log(err);}
	});
    //res.render("index", data);
}
