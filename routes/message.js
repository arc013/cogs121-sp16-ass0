
var models = require('../model');

exports.send= function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
   // console.log( Date.now());
    //
    var message = new models.Message({
		    "email": req.body.email,
		    "content": req.body.content,
		    "created": Date.now()
		    
		    

		    });
    message.save(dothis);
    function dothis(err){
	    if(!err) { res.redirect('/'); } else {
		    console.log(err);}


    }
    //res.render('', message);
   // console.log(message);
   // res.redirect('/');
};




