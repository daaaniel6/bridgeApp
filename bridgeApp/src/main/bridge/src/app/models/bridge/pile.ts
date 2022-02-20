import { RowWidthPile } from './row-width-pile';
import { Scour } from './scour';
import { Support } from './support';

export interface Pile {
  pileId?: number;
  namePile?: string;
  image?: null;
  rowWidthPileList?: RowWidthPile[];
  scourScourId?: Scour;
  supportSupportId?: Support;
}
