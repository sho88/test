import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CharacterCard } from '../../services/search.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],

  // have this changed to OnPush to remove this component from being in the Angular change detection chain
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: CharacterCard;
}
