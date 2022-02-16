import { Role } from './role';

export interface User {
  id?: number;
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
  tokenPassword?: null;
  roles?: Role[];
  bridgeList?: any[];
}
