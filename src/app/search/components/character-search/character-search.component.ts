import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { ICharacterCard } from '../../interfaces/character-card.interface';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent implements OnInit {
  // these properties do not need to be declared as public as they are public by default
  public searchForm: FormGroup;
  public loading = false;

  // characters made an observable
  characters$: Observable<ICharacterCard[]>;

  constructor(
    private readonly searchService: SearchService,
    private readonly formBuilder: FormBuilder,
  ) {}

  // ngOnInit has been positioned after the constructor
  public ngOnInit() {
    // shorten for the sake of keeping syntax cleaner
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    // ...this observable utilizes the changes made on this particular form control, and
    // switches the observable into a service call
    this.characters$ = this.searchForm.get('name').valueChanges
      .pipe(
        tap(() => this.loading = true), // side effect added
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(key => this.searchService.searchForCharacter(key)),
        tap(() => this.loading = false), // side effect added again
      );
  }
}
