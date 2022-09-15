import { Controller, Get } from '@nestjs/common';

import { Message, Plant } from '@bryan/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  data: any;

  @Get('collection')
  async getData() {
    return await this.appService.getData();
  }
  @Get('search')
  async searchPlants() {
    return await this.appService.searchPlants();
  }
}
