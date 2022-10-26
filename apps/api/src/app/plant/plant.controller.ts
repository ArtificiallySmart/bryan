import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PlantService } from './services/plant.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';

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
  async addPlant(@Body() body) {
    console.log(body);
    return this.plantService.createPlant(body);
  }

  @Post('plant/:id')
  async createPlant(@Param('id') id: string) {
    try {
      await this.plantService.addPlant(id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Something went wrong, please try again later',
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch('plant/:id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(+id, updatePlantDto);
  }

  @Delete('plant/:id')
  remove(@Param('id') id: string) {
    return this.plantService.remove(+id);
  }
}
