import { Departament } from './departament';

export interface Municipality {
  municipalityId?: number;
  name?: string;
  long1?: string;
  lat?: string;
  departamentDepartamentId?: Departament;
}
