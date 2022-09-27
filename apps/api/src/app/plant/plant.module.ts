import { Module } from '@nestjs/common';
import { ApiService } from './services/api.service';
import { PlantService } from './services/plant.service';
import { PlantController } from './plant.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './services/db/db.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [PlantController],
  providers: [PlantService, ApiService, DbService],
})
export class PlantModule {}
