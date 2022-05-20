import {Component, OnInit } from '@angular/core';
import { PostComponent } from 'src/components/post/post.component';

@Component({
    selector: 'app-feed-component',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    posts!: PostComponent[];

    ngOnInit(): void {
        this.loadFivePostCompents();
    }

    loadFivePostCompents() {
        // This is where logic for loading PostComponents into posts goes
    }

    onNextClick() {
        this.loadFivePostCompents();
    }
}