import {notFountError, internalServerError} from '../controller/errors'
import apiRouter from '../routers/apiRouter';

export default (app) => {
  
  //API Routes:
  app.use('/api', apiRouter);
  
  //Default 404:
  app.route('/*').get(notFountError);
    
  //Overwriting Error Handling:
  app.use(internalServerError);
};