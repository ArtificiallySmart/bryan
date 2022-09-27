import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Plant } from '../../entities/plant.entity';

@Injectable()
export class DbService {
  constructor(private dataSource: DataSource) {}

  plantRepository = this.dataSource.getRepository(Plant);

  async create(plant) {
    const newPlant = this.plantRepository.create(plant);
    await this.plantRepository.save(plant);
  }

  async findAll() {
    const plants = this.plantRepository.find();
    return plants;
  }
}
