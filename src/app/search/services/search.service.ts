import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISWAPIResponse } from '../interfaces/swapi.interface';
import { ICharacterCard } from '../interfaces/character-card.interface';

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
  searchForCharacter(name: string): Observable<ICharacterCard[]> {
    return this.http
      .get<ISWAPIResponse>(`${this.baseUrl}people/?search=${name}`)
      .pipe(
        map(({ results }) => results.map(({ name, gender }) => ({ name, gender }))),
      );
  }
}
