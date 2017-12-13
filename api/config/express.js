import bodyParser from 'body-parser';
import { environment } from './config';

var configCORS = (req, res, next) => {
  
  if(environment == 'local') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  // else dont allow with eyes closed.
  
  return next();
}


export default (app) => {
  app.set('port', (process.env.PORT || 8080));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(configCORS);
};