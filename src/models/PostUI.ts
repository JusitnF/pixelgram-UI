import { PageOfItems } from "./page-of-item";
import { Post } from "./post";

export class PostUI{
    post!: Post;
    comments!: PageOfItems<Comment>;
 }