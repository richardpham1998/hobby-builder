export class Comment
{
    _id?: String;
    content: String;
    likes: Map<String,Number>;
    user: String;
    author: String;
    event: String;
    post: String;
    date_created: Date;
    date_modified: Date;
}