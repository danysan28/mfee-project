import { CommentModel } from './comment.model';

export type PostModel = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  comments: CommentModel[];
};