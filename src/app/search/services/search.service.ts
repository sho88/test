import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

export interface CharacterCard {
  name: string;
  gender: 'male' | 'female';
}

export interface ISWAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: CharacterCard[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // made public for testability (check .spec.ts file for example).
  baseUrl = 'https://swapi.dev/api/';

  constructor(private readonly http: HttpClient) {}

  /**
   * Static property titled: "mapResponseToCharacterCards"
   * has been removed / commented out well.
   */
  /**
   * this should be a method for this class, as opposed to
   * a variable for this class, that is constantly declared upon instantiation
   */
  searchForCharacter(name: string): Observable<CharacterCard[]> {
    return this.http
      .get<ISWAPIResponse>(`${this.baseUrl}people/?search=${name}`)
      .pipe(
        map(({ results }) => results.map(({ name, gender }) => ({ name, gender }))),
      );
  }
}
