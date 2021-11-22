export class User
{
    _id?: String;
    username: String;
    biography: String;
    city: String;
    province: String;
    country: String;
    comments:String[];
    events_created:String[];
    events_hosting:String[];
    events_attending:String[];
    posts:String[];
    hobbies:String[];
    isAdmin: Boolean;
    friends: {"0":[],"1":[], "2": [], "3": []};
}