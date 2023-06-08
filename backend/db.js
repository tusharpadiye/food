const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://tushar07padiye:tushar123@cluster0.5p2bvc4.mongodb.net/Foodmern?retryWrites=true&w=majority";
const mongoDB = () => {
   mongoose.connect(mongoURL, { useNewUrlParser: true }, (err, result) => {
    if(err) console.log("err", err);
    else {
      console.log("Connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
          const foodCategory = mongoose.connection.db.collection("food_Category");
          foodCategory.find({}).toArray(function(err,catData){
            if(err) 
            {console.log(err);}
            else{
              global.food_items =data;
              global.foodCategory =catData;
            }
          })
          /*if(err) console.log(err);
            else{
              global.food_items =data;
               
            }*/

        })
    }
  });
};

module.exports = mongoDB;
