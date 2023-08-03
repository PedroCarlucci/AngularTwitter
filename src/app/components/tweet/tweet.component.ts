import { Component, Input } from '@angular/core';
import { Tweet } from '../main-page/main-page.component';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet!: Tweet;

  onLike(): void {
    this.tweet.likes += 1
    const svgLike = document.getElementById('like');
    svgLike?.setAttribute('fill', 'red');
  }
}
