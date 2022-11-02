import { PlantEntity } from '@bryan/api-interfaces';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DbService {
  constructor(private dataSource: DataSource) {}

  plantRepository = this.dataSource.getRepository(PlantEntity);

  async create(plant) {
    const newPlant = this.plantRepository.create(plant);
    return this.plantRepository.save(newPlant);
  }

  async findAll() {
    const plants = this.plantRepository.find();
    return plants;
  }

  async delete(id: string) {
    this.plantRepository.delete(id);
  }
}
