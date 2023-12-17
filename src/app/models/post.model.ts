export class Post {
    constructor(public id: number, public userId: number, public title: string,  public body: string) {}
}

export interface Post2 {
    id: number,
    userId: number,
    title: string,
    body: string
}