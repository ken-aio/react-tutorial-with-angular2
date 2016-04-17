import {Component} from 'angular2/core'
import {CommentListComponent} from './comment-list.component'
import {CommentFormComponent} from './comment-form.component' 
import {Comment} from './comment'
import {CommentService} from './comment.service'

@Component({
    selector: 'my-comment-box',
    template:
    `
    <div className="commentBox">
        <h1>Comments</h1>
        <my-comment-list [comments]="comments"></my-comment-list>
        <my-comment-form (onCommentSubmit)="handleCommentSubmit($event)"></my-comment-form>
    </div>
    `,
    directives: [CommentListComponent, CommentFormComponent],
    providers: [CommentService]  
})

export class CommentBoxComponent {
    comments: Comment[];
    
    constructor(private _commentService: CommentService) {}

    ngOnInit() {
        this._commentService.getCommentsObservable().subscribe(comments => this.comments = comments)
    }
    
    handleCommentSubmit(comment) {
        comment.id = Date.now()
        this.comments = this.comments.concat([comment])
        this._commentService.saveCommentObservable(comment).subscribe(comments => this.comments = comments)
    }    
}