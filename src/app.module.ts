import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionLoggerFilter } from './utils/exceptionLogger.filter';
import { MediaModule } from './media/media.module';

console.log(process.env.MONGODB_URL);

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot({ envFilePath: 'config.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/study_nestjs', {
      useNewUrlParser: true
    }),
    UserModule,
    MediaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: ExceptionLoggerFilter,
    // },
  ],
})
export class AppModule { }
