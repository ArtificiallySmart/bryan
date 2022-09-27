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

  async getResult(
    query: string,
    searchType: 'general' | 'specific' = 'general'
  ) {
    const baseUrl = process.env.FLORA_API_URL;
    const key = `?key=${process.env.FLORA_API_KEY}`;

    let requestUrl: string;

    switch (searchType) {
      case 'specific':
        requestUrl = `${baseUrl}/v1/plants/${query}${key}`;
        break;
      case 'general':
        requestUrl = `${baseUrl}/v1/plants${key}&q=${query}`;
        break;
      default:
        break;
    }
    const result = await lastValueFrom(this.httpService.get(requestUrl));
    return searchType == 'specific' ? result : result.data;
  }
}
