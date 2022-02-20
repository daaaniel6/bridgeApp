import { BearingSlab } from './bearing-slab';
import { ConcreteRow } from './concrete-row';
import { SewerSystem } from './sewer-system';
import { SteelRow } from './steel-row';

export interface Superstructure {
  superstructureId?: number;
  image?: null;
  concreteRowList?: ConcreteRow[];
  bearingSlabBearingSlabId?: BearingSlab;
  sewerSystemSewerSystemId?: SewerSystem;
  steelRowList?: SteelRow[];
}
