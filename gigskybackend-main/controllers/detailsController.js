const Detail = require('../models/detailsModel');
const fraudUpiIds = require('../models/fraud');


const createTransaction = async (req, res) => {
  try {
    console.log(req.body);
    const existingUpiId = await fraudUpiIds.findOne({
      fraudUpiIds: { $in: [req.body.UPI_ID] },
    });
    console.log(existingUpiId)

    if(existingUpiId){
      return res.status(404).json({
        success:true,
        message:'This UPIID is Reported an Fraud'
      })
    }

    const newDetail = new Detail({
      senderName: req.body.senderName,
      UPI_number: req.body.UPI_number,
      UPI_ID: req.body.UPI_ID
    });

    const savedPost = await newDetail.save();
    res.status(200).json({
      success: true,
      message:'Transaction is successful',
      savedPost
    });
    
  } catch (err) {
    console.log('Error in making transaction',err)
    res.status(500).json(err);
  }
};

const checkDetails = async (req, res) => {
  try {
    const detail = await Detail.findOne({ UPI_ID: req.params.UPI_ID }).select('-_id  ');
    if (detail) {
      res.status(200).json({
        isFound: true,
        message: `UPI_ID ${req.params.UPI_ID} is reported as fraud`,
        detail: detail
      })
    }
    else {
      res.status(200).json({
        isFound: false,
        message: `UPI_ID ${req.params.UPI_ID} is not reported as fraud yet`
      })
    }
  }
  catch (err) {
    console.log('Error in Checking repoted account')
  }
}
const ReportUpi = async (req, res) => {
  try {
    //  console.log(req.body)
     const existingUpiId = await fraudUpiIds.findOne({
      fraudUpiIds: req.body.upiId,
    });

     if(existingUpiId){
       return res.json({
          success:false,
          message:'This UpiId is Already Reported'
        });
     }
    const reporting = await fraudUpiIds.findOneAndUpdate(
      {},
      { $addToSet: { fraudUpiIds: req.body.upiId } },
      { new: true, upsert: true }
    );

     res.status(200).json({
      success:true,
      message:'Thank You For Reporting',
      reporting
     })
  }
  catch (err) {
    console.log('Error in reporting UPIID')
    res.status(400).json({
      success:false,
      message:'Error in reporting UPIID'
    });
  }
}


module.exports = {
  createTransaction,
  checkDetails,
  ReportUpi
}