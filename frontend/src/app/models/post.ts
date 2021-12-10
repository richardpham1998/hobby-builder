export class Post
{
    _id?: String;
    likes: {"-1":String[],"0":String[],"1":String[]};
    title: String;
    user: String;
    tags: String[];
    author: String;
    description: String;
    post_comments: String[];
    date_created: Date;
    date_modified: Date;
}