import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone :true,
  selector: 'comments',
  template: `
     <div *ngFor="let comment of comments">
      <ul>
       <li>
         {{comment.text}}
         <comments [comments]="comment.comments" *ngIf="comment.comments"></comments>
       </li>
      </ul>
    </div>
  `,
  imports:[CommonModule]
})
export class CommentComponent {
  @Input() comments :any;
}