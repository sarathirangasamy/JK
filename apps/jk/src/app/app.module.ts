import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sarathi_saji:sarathi_saji@cluster0.sgbsz.mongodb.net/zerozilla?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
