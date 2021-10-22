export class Event
{
    _id?: String;
    title: String;
    user: String;
    tags: String[];
    author: String;
    description: String;
    location: String;
    comments: String[];
    attendees: String[];
    hosts: String[];
    date_event: Date;
    date_created: Date;
    date_modified: Date;
    image: String;
}