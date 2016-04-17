import {Component, Input} from 'angular2/core';
import * as marked from 'marked'

@Component({
  selector: 'my-comment',
  template:
  `
  <div className="comment">
    <h2 className="commentAuthor">
      {{author}}
    </h2>
    <span [innerHTML]="rawMarkup()"></span>
  </div>
  `
})

export class CommentComponent {
  @Input() author: string
  @Input() comment: string
  
  rawMarkup():string {
    return marked(this.comment, {sanitize: true});
  }
}