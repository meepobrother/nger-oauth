import { NestFactory } from '@nestjs/core';
import { NgerOauth2ClientModule } from '.';
export async function bootstrap() {
    const app = await NestFactory.create(NgerOauth2ClientModule)

    app.listen(9001)
}
bootstrap();