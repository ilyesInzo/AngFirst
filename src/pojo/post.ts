
export class Post {
    title: String;
    content: String;
    loveIts: number;
    created_at: Date;
    constructor(title:String, content:String, loveIts:number) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = new Date();

    }
}