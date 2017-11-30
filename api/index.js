import express from 'express';
import expressConfig from './config/express';
import routesConfig from './config/routes';
import setupWeb3 from './config/web3';
const app = express();

var startServer = () => {
  app.listen(app.get('port'), () => {
    console.log('Web Server now listening on port--> ' + app.get('port'));
  })
}

console.log('__________________________________________');
console.log('\nInitialising Web Server. Just a sec...');
console.log('__________________________________________');

//Go Go Go.
expressConfig(app);
routesConfig(app);
setupWeb3()
  .then(startServer)
  .catch(console.error)