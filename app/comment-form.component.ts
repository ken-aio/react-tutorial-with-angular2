import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'my-comment-form',
    template:
    `
    <form className="commentForm" (ngSubmit)="handleSubmit()">
        <input [(ngModel)]="author" placeholder="your name" />
        <input [(ngModel)]="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
    </form>
    `
})

export class CommentFormComponent {
    @Output() onCommentSubmit: EventEmitter<any> = new EventEmitter();
    
    public author: string
    public text: string
    
    handleSubmit(e) {
        if (!this.author || !this.text) {
            return ;
        }
        
        this.onCommentSubmit.emit({author: this.author, text: this.text})
        this.author = ''
        this.text = ''
    }
}