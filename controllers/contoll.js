// const Employee = require("./../models/model");


const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const POST_title = mongoose.model("Post")

router.get('/', (req,res)=>{
   
    POST_title.find({}, function(err,data){
        if(err) throw err;
        res.render("index2.ejs",{emp: data})
    })
    
})
router.get('/post', (req,res)=>{
    res.render("index.ejs")
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    // var name = req.query.name;
    // console.log(name)
    let emp = new POST_title(req.body)
    emp.save((e,data)=>{
        if (e) {
            console.log(e);
            return res.status(400).json({ msg: "All fields needed" });
          }
          res.json(data)
         //return res.status(200).json({ emp: data });
    })
})

// router.post('/find_data/:name',(req,res)=>{
//     // console.log(req.params.name);
//     var name = req.params.name
//     Employee.findOne({

//         name: {
//             $regex: name,
//             $options: 'i'
//         }

//     }, function(err,data){
//         if(err) throw err;
//         // console.log(data);
//         // 
//         res.send(data)
//         // res.render('form.ejs',{result:data})
//     })
// })

// router.get("/find_data/:id", (req, res) => {
//     // console.log(articles[req.params.id]);
  
//     if (req.params.id) {
//         console.log(req.params.id)
//       POST_title.find({ _id: req.params.id }, (e, data) => {
//         if (e) {
//           return res.status(400).json({ msg: "Can't find result" });
//         }
//         // console.log(data[1]);
  
//         return res.render("index2.ejs", {
//           article: data[0]
//         });
//       });
//     } else {
//       res.json({ msg: "Article not found" });
//     }
//   });



  
router.get('/find_data/:id', (req, res) => {
	console.log(JSON.parse(req.params.id));
	var review = Review(JSON.parse(req.params.id)).save((e, data) => {
		if (e) {
			throw e;
		}
		var id = data._id;

		var review2 = POST_title.find({ _id: id }, (e, data) => {
			if (e) {
				throw e;
			}
			console.log(data);
			res.render('index2.ejs', {
				article: data[0]
			});
		});
	});
})

module.exports = router