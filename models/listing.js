const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type : String,
        required : true,
    },
    description : {
        type : String
    },
    image : {
        type : String,
        default : "https://www.vecteezy.com/photo/12168187-beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation",
        set : (v) => v === ""
        ? "https://www.vecteezy.com/photo/12168187-beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation" : v,
    },
    price : {
        type : Number,
    },
    loction : {
        type : String,
    },
    country : {
        type : String,
    }

})


//Creating collection in db.
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing