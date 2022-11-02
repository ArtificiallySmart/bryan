import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  data: any;

  // @Get('collection')
  // async getData() {
  //   return await this.appService.getData();
  // }
}
