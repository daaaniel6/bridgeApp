import { Pile } from './pile';

export interface Support {
  supportId?: number;
  name?: string;
  material?: string | null;
  crushedNeoprene?: string | null;
  outOfPlace?: string | null;
  rusty?: string | null;
  boltMissing?: string | null;
  brokenBolt?: string | null;
  others?: string | null;
  extra?: null;
  //pileList?: Pile[];
}
