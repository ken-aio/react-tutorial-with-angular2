import {Component, Input} from 'angular2/core'
import {CommentComponent} from './comment.component'
import {Comment} from './comment'

@Component({
    selector: 'my-comment-list',
    template:
    `
    <div className="commentList">
        <my-comment *ngFor="#comment of comments" [author]="comment.author" [comment]="comment.text"></my-comment>
    </div>
    `,
    directives: [CommentComponent] 
})

export class CommentListComponent {
    @Input() comments: Comment[]
}