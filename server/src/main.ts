/* istanbul ignore file */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: (req, callback) => {
      const origin = req.headers.origin; // Get the origin
      const host = req.headers.host; // Get the destination host
      
      callback(null, {
        origin: true,
        preflightContinue: false,
      })
    },
  })
  await app.listen(3001)
}
bootstrap()
