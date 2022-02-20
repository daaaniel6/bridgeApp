import { RowWidth } from './row-width';
import { Scour } from './scour';
import { Support } from './support';

export interface Stapes {
  stapesId?: number;
  nameStapes?: string;
  image?: null;
  rowWidthList?: RowWidth[];
  scourScourId?: Scour;
  supportSupportId?: Support;
  bridgeBridgeId?: number;
}
