import bodyParser from 'body-parser';

export default function bodyParserConfig(app){
  return app.use(bodyParser.json({limit: '50mb'}));
}

