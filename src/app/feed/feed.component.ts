import {Component, OnInit } from '@angular/core';
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

    ngOnInit(): void {
        this.loadFivePostCompents();
    }

    loadFivePostCompents() {
        this.postServiceService.fetchListOfPosts(this.pageNumber, this.pageSize).subscribe(data => {
            this.postData = data;
            console.log(this.postData.items);
        });
    }

    onNextClick() {
        this.loadFivePostCompents();
    }
}