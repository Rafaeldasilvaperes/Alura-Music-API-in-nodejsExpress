import cors from 'cors';

export default function corsConfig(app){
  return app.use(cors())
}