import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('SearchService', () => {
  let http: HttpClient;
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    service = TestBed.inject(SearchService);
    http = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get method with the correct query parameters.', done => {
    jest.spyOn(http, 'get').mockReturnValue(of({ results: [] }));
    const name = 'Luke';
    service.searchForCharacter(name).subscribe(data => {
      expect(http.get).toHaveBeenCalledWith(`${service.baseUrl}people/?search=${name}`);
      expect(Array.isArray(data)).toBe(true);
      done();
    });
  });
});
