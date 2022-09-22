import { Injectable } from '@nestjs/common';
import { Plant } from '@bryan/api-interfaces';
import { ApiService } from './services/api/api.service';

@Injectable()
export class AppService {
  constructor(private apiService: ApiService) {}
  getData(): Plant[] {
    return [
      {
        commonName: 'tarovine',
        latinName: 'Monstera Deliciosa',
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        commonName: 'Golden Pothos',
        latinName: 'Epipremnum Aureum',
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        commonName: 'Zebra Plant',
        latinName: 'Alocasia Zebrina',
        imageUrl: 'https://via.placeholder.com/300',
      },
    ];
  }

  async searchPlants(query) {
    const response = await this.apiService.getResult(query);
    const { data } = response;
    return data.map((plant) => {
      return {
        commonName: plant.common_name,
        latinName: plant.scientific_name,
        imageUrl: plant.image_url,
      } as Plant;
    });
  }
}
