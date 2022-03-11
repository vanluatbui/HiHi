const { json } = require('express/lib/response');
const Admin = require('mongodb/lib/admin');

module.exports = {
    get: (req, res) => 
            //res.json({message : "Hello world !", data : true})
{
    const mongoClient = require('mongodb').MongoClient;
    mongoClient.connect('mongodb://127.0.0.1:27017/CookingRecipe', function(err, db) {
    if (err) throw err;
    var monan = db.collection('MonAn');
     monan.find({}).toArray(function (err,data) {

     if (err) throw err;
      res.json(data);
 });
 db.close();
});
},
}
