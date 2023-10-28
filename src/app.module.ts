import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import DbCon from './dbcon';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DbCon(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
