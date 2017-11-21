import bodyParser from 'body-parser';

export default (app) => {

  app.set('port', (process.env.PORT || 3000));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
};