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

  async checkResponse() {
    return await this.apiService.getResult('monstera+deliciosa');
  }
}
