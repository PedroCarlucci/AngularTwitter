import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  username: string = sessionStorage.getItem('username') || ''
  valueToPass: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis elit non sapien laoreet eleifend. Proin maximus massa vel scelerisque gravida. Nulla facilisi. Aenean facilisis ligula sed est pharetra, non ultrices urna finibus. Vivamus maximus lorem vitae ligula fermentum, ut tincidunt mauris scelerisque. Integer facilisis urna eget lectus placerat, quis vulputate nisi facilisis. Donec bibendum felis quis tellus placerat posuere. Nam ut ante at felis ultricies tempus a eget dui. Phasellus euismod a ligula in dignissim. Sed sit amet hendrerit nulla, eu gravida ex. Sed elementum neque sit amet cursus blandit."
  tweets: Tweet[] = [];

  constructor () {
    const randomTexts = ['Hello!', 'Nice day!', 'Angular is great!', 'Coding is fun!'];
    const randomUsers = ['user1', 'user2', 'user3', 'user4'];
    const randomIndex = Math.floor(Math.random() * 4);

    let i: number = 0;

    while (i < 4) {
      const tweet = new Tweet(randomUsers[i], randomTexts[i], randomIndex);
      this.tweets.push(tweet)
      i++;
    }
  }
}

export class Tweet {
  username: string;
  content: string;
  likes: number;

  constructor(username: string, content: string, likes: number) {
    this.username = username;
    this.content = content;
    this.likes = likes;
  }
}