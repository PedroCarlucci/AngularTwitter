import { Component, Input } from '@angular/core';
import { MainPageComponent, Tweet } from '../main-page/main-page.component';

@Component({
  selector: 'app-tweet-post',
  templateUrl: './tweet-post.component.html',
  styleUrls: ['./tweet-post.component.scss']
})
export class TweetPostComponent {
  @Input() username!: string;
  userInput: string = "";

  constructor(private tweetService: MainPageComponent) {}

  onClickAddTweet() {
    if (this.userInput != "") {
      const newTweet = new Tweet(this.username, this.userInput, 0);
      this.tweetService.addTweet(newTweet);
      this.userInput = "";
    }
  }

}
