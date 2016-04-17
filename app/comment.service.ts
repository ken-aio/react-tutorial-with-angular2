import {Injectable} from 'angular2/core'
import {Comment} from './comment'
import {Http, Headers} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class CommentService {
    private endpoint: string;
    
    constructor(private http : Http) {
        this.endpoint = "http://localhost:3002"
    }
    
    getCommentsObservable(): Observable<Comment[]> {
        return this.http.get(this.endpoint + '/api/comments').map(res => res.json() as Comment[])
    }
    
    saveCommentObservable(comment: Comment): Observable<Comment[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.endpoint + '/api/comments', JSON.stringify(comment), { headers: headers })
            .map(res => res.json() as Comment[])
    }
}