import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PlantService } from './services/plant.service';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { Plant } from '@bryan/api-interfaces';

@Controller('plant')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  findAll(): Promise<Plant[]> {
    return this.plantService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.plantService.findOne(+id);
  // }

  @Get('/search')
  async searchPlants(@Query('search') search: string): Promise<Plant[]> {
    return await this.plantService.searchPlants(search);
  }

  @Post()
  async addPlant(@Body() body) {
    console.log(body);
    return this.plantService.createPlant(body);
  }

  @Post(':id')
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(+id, updatePlantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantService.remove(+id);
  }
}
