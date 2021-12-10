export class Event
{
    _id?: String;
    likes: {"-1":String[],"0":String[],"1":String[]};
    title: String;
    user: String;
    tags: String[];
    author: String;
    description: String;
    location: String;
    comments: String[];
    attendees: {"-1":String[],"0":String[],"1":String[]};
    hosts: String[];
    date_event: Date;
    date_created: Date;
    date_modified: Date;
    image: String;
}