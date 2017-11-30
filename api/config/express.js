import bodyParser from 'body-parser';

export default (app) => {
  app.set('port', (process.env.PORT || 8080));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
};