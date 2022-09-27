import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PlantService } from './services/plant.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

@Controller('plant')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Post()
  async addPlant(@Body() body) {
    console.log(body);
    //return this.plantService.create(body.id);
  }

  @Post(':id')
  async createPlant(@Param('id') id: string) {
    return this.plantService.create(id);
  }

  @Get()
  findAll() {
    return this.plantService.findAll();
  }

  @Get('/search')
  async searchPlants(@Query('search') search: string) {
    return await this.plantService.searchPlants(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(+id, updatePlantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantService.remove(+id);
  }
}
