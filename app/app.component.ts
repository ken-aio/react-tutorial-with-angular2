import {Component} from 'angular2/core'
import {CommentBoxComponent} from './comment-box.component'

@Component({
    selector: 'my-app',
    template: '<my-comment-box></my-comment-box>',
    directives: [CommentBoxComponent]
})
export class AppComponent { }
