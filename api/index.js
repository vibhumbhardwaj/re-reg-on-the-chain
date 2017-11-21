import express from 'express';
import expressConfig from './config/express';
import routesConfig from './config/routes';
import setupWeb3 from './config/web3';
const app = express();


expressConfig(app);
routesConfig(app);

var server = app.listen(app.get('port'), ()=>{
  setupWeb3().then(()=>{
    console.log('web3 Configuration Complete');
    console.log('Web Server now listening on port--> ' + app.get('port'));
  }).catch((err)=>{
    console.error('Error initialising the web3 configurations--> \n' + err);
    console.log('Stopping Server...');
    server.close();
  })
});