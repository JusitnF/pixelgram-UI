import { PageOfItems } from "./page-of-item";
import { User } from "./user";

export class Post{
   id!: number ;
   user!: User;
   img!: string; // URL
   description!: string;
   createdOn!: Date;
   comments!: Comment[];
}