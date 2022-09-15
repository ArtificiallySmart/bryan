import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

import { Plant } from '@bryan/api-interfaces';
import { catchError, lastValueFrom, map, Observable, of, tap } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async getResult(query: string): Promise<AxiosResponse> {
    const result = this.httpService.get(
      `${process.env.FLORA_API_URL}/v1/plants?key=${process.env.FLORA_API_KEY}&q=${query}`
    );
    return await (
      await lastValueFrom(result)
    ).data;
  }
}
