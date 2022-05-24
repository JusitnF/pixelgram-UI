import {Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from 'src/services/post-service/post-service.service';
import { PageOfItems } from 'src/models/page-of-item';
import { PostUI } from 'src/models/PostUI';

@Component({
    selector: 'app-feed-component',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    posts!: PostUI[];
    postData = new PageOfItems<PostUI>();

    constructor (private postServiceService: PostServiceService) {}

    pageNumber: number = 0;
    pageSize: number = 5;
    @Input() 
    distance: number = .1;
    @Input()
    throttle: number = 300;
   


    ngOnInit(): void {
        this.loadFivePostComponents();
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    loadFivePostComponents() {
        this.postServiceService.fetchListOfPosts(this.pageNumber, this.pageSize).subscribe(data => {
            this.postData = data;
            
        });
        console.log(this.postData.items);
    }

   onScrollDown() {
    this.postServiceService.fetchListOfPosts(this.pageNumber, this.pageSize += 5).subscribe(data =>
        {this.postData = data;});
    console.log(this.postData)
   }
}
