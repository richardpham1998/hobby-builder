export class Comment
{
    _id?: String;
    content: String;
    likes: {"-1":String[],"0":String[],"1":String[]};
    user: String;
    author: String;
    profile: String;
    event: String;
    post: String;
    date_created: Date;
    date_modified: Date;
}