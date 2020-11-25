import { ICharacterCard } from './character-card.interface';

export interface ISWAPIResponse {
  count: number;
  next: string;
  previous: string;
  results: ICharacterCard[];
}
