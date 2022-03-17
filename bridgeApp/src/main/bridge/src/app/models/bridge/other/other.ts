import { ImageOther } from '../../image/image-other';

export interface Other {
  otherId?: number;
  informativeSignage?: string;
  preventiveSignage?: string;
  regulatorySignage?: string;
  horizontalSignage?: string;
  artificialLighting?: string;
  sewerSystem?: string;
  drainageStatus?: string;
  observation?: string;
  maintenance?: string;
  repair?: string;
  extra?: null;
  imageOtherList?: ImageOther[];
}
