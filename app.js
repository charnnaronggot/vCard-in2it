const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();
const path = require("path");
var vCardsJS = require("vcards-js");
var bodyParser = require("body-parser");
const { Router } = require("express");
const { send } = require("process");
const { route } = require("express/lib/application");
app.use(express.json());

router.get("/form", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/register", (req, res , next) => {
  var vCard = vCardsJS();

  var id = req.query.id;

  vCard.firstName = req.query.firstname;
  vCard.lastName = req.query.lastname;
  vCard.workPhone = req.query.phone;
  vCard.organization = req.query.company;
  vCard.email = req.query.email;
  // vCard.saveToFile(`${id}.vcf`);
  // var fileName = id + ".vcf";
  // res.download(fileName)
  async function saveFile(vCard, id) {
    var options = {
      root: path.join(__dirname),
    };

    await vCard.saveToFile(`${id}.vcf`);
    var fileName = id + ".vcf";

    //var test = "img.png" ;
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log("Sent:", fileName);
        console.log("extention:" , fileName.split('.').pop())
        next();
      }
    });
  }

  saveFile(vCard, id);
  //   res.send(vCard.getFormattedString())
  //res.download(vCard)
  //res.redirect('/' , vCard);
  //res.redirect('https://www.youtube.com/watch?v=sqjzO3loj2s&ab_channel=DevNami');
  //const file = `${__dirname}/${firstName}.vcf`;
  //res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(router);

router.get("/download/:id", (req, res) => {
  const id = req.params.id;
  const fileName = `${__dirname} + ${id}`;

  res.download(fileName);
  res.send(id);
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
