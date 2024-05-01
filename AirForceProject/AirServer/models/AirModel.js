const mongoose = require('mongoose'); 
const joi = require('joi'); 
 
// create a new Schema object with the given properties
const AirSchema = new mongoose.Schema({ 
    Altitude: Number, 
    HIS: Number, 
    ADI: Number 
}, 
// timestamps- See the creation time
    { timestamps: true } , 
) 
// export the schema to the database
exports.AirModel = mongoose.model("airs", AirSchema); 
 
// validate the request body and set the properties of the model
exports.validAir = (_reqbody) => { 
    const joischema = joi.object({ 
        Altitude: joi.number().min(0).max(3000).required(), 
        HIS: joi.number().min(0).max(360).required(), 
        ADI: joi.number().min(0).max(100).required() 
    }) 
    return joischema.validate(_reqbody); 
}