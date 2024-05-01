const express = require('express');
const router = express.Router();
const { AirModel, validAir } = require('../models/AirModel');

// A post request for a database with the body of the data and saving
router.post( "/"  , async(req,res) => {
    const validBody = validAir(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try {
    console.log("posted:",req.body);
    let userAir = new AirModel(req.body);
    await userAir.save();
    res.status(201).json(userAir._id);
  }
  catch (err) {
    console.log(err);
    res.status(502).json(err);
  }
  });


  // get request to get by id the current.(not needed to project)
  
  // router.get("/", async(req,res) => {
  //   const AirId=req.query.airId
  //       try{
  //           const data = await AirModel.find({_id:AirId});
  //           res.json(data);
  //       }
  //       catch(err){
  //           console.error(err);
  //           res.status(502).json(err);
  //       }
  //     });


  module.exports = router;