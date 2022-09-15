import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '@bryan/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('api/collection');
  }
}
