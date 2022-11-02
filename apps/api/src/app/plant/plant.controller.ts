import { CreatePlantDto, UpdatePlantDto } from '@bryan/api-interfaces';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlantService } from './services/plant.service';

@Controller()
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get('plants')
  findAll() {
    return this.plantService.findAll();
  }

  @Get('plant/:id')
  findOne(@Param('id') id: string) {
    return this.plantService.findOne(+id);
  }

  @Get('/search')
  search(@Query('search') query: string) {
    return this.plantService.searchPlants(query);
  }

  @Post('plant')
  async addPlant(@Body() body: CreatePlantDto) {
    return this.plantService.addPlant(body);
  }

  @Patch('plant/:id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(+id, updatePlantDto);
  }

  @Delete('plant/:id')
  remove(@Param('id') id: string) {
    return this.plantService.remove(id);
  }
}
