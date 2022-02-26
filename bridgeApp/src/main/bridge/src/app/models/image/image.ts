import { Byte } from '@angular/compiler/src/util';

export interface Image {
  imageId?: number;
  name?: string;
  comment?: null;
  image?: Byte[];
}
