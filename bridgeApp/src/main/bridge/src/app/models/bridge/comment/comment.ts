import { User } from '../../user/user';

export interface Comment {
  commentId?: number;
  comment?: string;
  tag?: string;
  type?: string;
  extra?: string;
  date?: Date;
  user?: User;
}
