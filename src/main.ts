import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { comments } from './data';
import { CommentComponent } from './component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <comments [comments]="commentsData"></comments>
  `,
  imports :[CommentComponent]
})
export class App {
  name = 'Angular';
  commentsData = comments;
}

bootstrapApplication(App);
