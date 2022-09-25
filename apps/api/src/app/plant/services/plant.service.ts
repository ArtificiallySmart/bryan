import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from '../dto/create-plant.dto';
import { UpdatePlantDto } from '../dto/update-plant.dto';
import { Plant } from '../entities/plant.entity';
import { DataSource } from 'typeorm';
import { ApiService } from './api.service';

@Injectable()
export class PlantService {
  constructor(private apiService: ApiService, private dataSource: DataSource) {}

  plantRepository = this.dataSource.getRepository(Plant);

  create(createPlantDto: CreatePlantDto) {
    return 'This action adds a new plant';
  }

  findAll() {
    return `This action returns all plant`;
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
          latinName: plant.scientific_name,
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
