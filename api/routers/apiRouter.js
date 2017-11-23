import express from 'express';
import {createBaseContract, getCustomerDetails} from '../controller/baseInstrController';

var router = express.Router();

router.use(function(req, res, next) {

	console.log('\n[INFO]@API  @ time: ' + new Date().toUTCString() + ' URL--> ' + req.url.toString());
	next();
});

router.post('/createBaseContract', createBaseContract);
router.post('/getCustomerDetails', getCustomerDetails);

export default router;