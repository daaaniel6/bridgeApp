import { Pile } from './pile';

export interface Scour {
  scourId?: number;
  name?: string;
  thereIsNot?: string | null;
  yesButThereIsNot?: string | null;
  yesThereIsExposure?: string | null;
  settlementOf?: string | null;
  extra?: null | null;
  //pileList?: Pile[];
}
