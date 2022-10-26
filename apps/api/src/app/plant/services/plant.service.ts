import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from '../dto/create-plant.dto';
import { UpdatePlantDto } from '../dto/update-plant.dto';
import { Plant } from '../entities/plant.entity';
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

  plantRepository = this.dataSource.getRepository(Plant);

  async createPlant(body) {
    let { plant } = body;
    plant.id = uuidv4();
    this.dbService.create(plant);
  }

  async addPlant(id) {
    const response = await this.apiService.getResult(id, 'specific');
    const { data } = response;
    let test = {
      id: data.id,
      commonName: data.common_name,
      scientificName: data.scientific_name,
      imageUrl: data.main_species.image_url,
    };
    this.dbService.create(test);
    console.log(test);
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

  remove(id: number) {
    return `This action removes a #${id} plant`;
  }

  async searchPlants(query) {
    const response = await this.apiService.getResult(query);
    const { data } = response;
    let test = await Promise.all(
      data.map(async (plant) => {
        return {
          id: plant.id,
          commonName: plant.common_name,
          scientificName: plant.scientific_name,
          imageUrl: plant.image_url,
          inCollection: await this.inCollection(plant.id),
        } as Partial<Plant>;
      })
    );
    return test;
  }

  async inCollection(id: string) {
    let plant = await this.plantRepository.findOne({
      where: {
        id: id,
      },
    });
    return plant ? true : false;
  }
}
