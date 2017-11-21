import errorResponse from '../controller/errorController'
import {createBaseContract} from '../controller/createBaseContract';

export default (app) => {
  
  //API Routes:
  app.get('/api/createBaseContract', createBaseContract);
  
  //Default 404:
  app.route('/*').get(errorResponse);
};