export class PageOfItems<T>{
   items!: T[];
   hasNext!: boolean;
   totalElements!: number;
}