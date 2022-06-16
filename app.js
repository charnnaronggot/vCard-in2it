const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const path = require('path') ;
var vCardsJS = require("vcards-js");
var bodyParser = require("body-parser");
const { Router } = require("express");

const data = [{
  firstName : "charnnarong" ,
  lastName : "charoensanongkun" , 
  phone : "0618514442" ,
  company : "in2it" 
}]
app.get("/", (req, res) => {

  res.send("Hello World!");
});

router.get("/register/:firstname/:lastname/:phone/:company/:email/:id", (req, res) => {
  var vCard = vCardsJS();
  var fileName = req.params.id;
  
  vCard.firstName = req.params.firstname;
  vCard.lastName = req.params.lastname;
  vCard.workPhone = req.params.phone;
  vCard.organization = req.params.company;

  vCard.saveToFile(`${fileName}.vcf`);
  res.send(vCard.getFormattedString());

  //const file = `${__dirname}/${firstName}.vcf`;
  //res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(router) ;

app.get("/download"), (req , res) => {
   
    const file = `${__dirname}/${firstName}.vcf`;

}
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
