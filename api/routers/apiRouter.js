import express from 'express';
import {createBaseContract, getInstruction, getAllInstructions} from './../controller/baseInstruction';


let router = express.Router();

router.use(function(req, res, next) {
  console.log('\n[INFO]@API  @ time: ' + new Date().toUTCString() + ' URL--> ' + req.url.toString());
	
	// Add authorisation of the request maybe?
	next();
});


router.post('/createBaseContract', createBaseContract);
router.post('/getCustomerDetails', getInstruction);
router.all('/viewInstructions/:max', getAllInstructions);


export default router;
