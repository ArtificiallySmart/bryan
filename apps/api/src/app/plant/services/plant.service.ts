import { Injectable } from '@nestjs/common';
import {
  CreatePlantDto,
  Plant,
  UpdatePlantDto,
  PlantEntity,
} from '@bryan/api-interfaces';
import { DataSource } from 'typeorm';
import { ApiService } from './api.service';
import { DbService } from './db/db.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlantService {
  constructor(
    private apiService: ApiService,
    private dataSource: DataSource,
    private dbService: DbService
  ) {}

  plantRepository = this.dataSource.getRepository(PlantEntity);

  async createPlant(body) {
    const { plant } = body;
    plant.id = uuidv4();
    this.dbService.create(plant);
  }

  addPlant(plant: CreatePlantDto) {
    return this.dbService.create(plant);
  }

  findAll() {
    return this.dbService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} plant`;
  }

  update(id: number, updatePlantDto: UpdatePlantDto) {
    return `This action updates a #${id} plant`;
  }

  remove(id: string) {
    return this.dbService.delete(id);
  }

  async searchPlants(query) {
    const response = await this.apiService.getResult(query);
    const { data } = response;
    const test = await Promise.all(
      data.map(async (plant) => {
        return {
          id: plant.id,
          commonName: plant.common_name,
          scientificName: plant.scientific_name,
          imageUrl: plant.image_url,
        } as Partial<Plant>;
      })
    );
    return test;
  }
}
