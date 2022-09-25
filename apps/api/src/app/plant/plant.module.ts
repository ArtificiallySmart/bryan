import { Module } from '@nestjs/common';
import { ApiService } from './services/api.service';
import { PlantService } from './services/plant.service';
import { PlantController } from './plant.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [PlantController],
  providers: [PlantService, ApiService],
})
export class PlantModule {}
