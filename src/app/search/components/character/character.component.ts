import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICharacterCard } from '../../interfaces/character-card.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],

  // have this changed to OnPush to remove this component from being in the Angular change detection chain
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
  @Input() character: ICharacterCard;
}
