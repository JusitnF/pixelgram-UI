import { PageOfItems } from "./page-of-item";
import { Post } from "./post";
import { Comment } from "./comment";
export class PostUI{
    post!: Post;
    comments!: PageOfItems<Comment>;
 }