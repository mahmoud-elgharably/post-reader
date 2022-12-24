export class Blog {
    id?: number;
    title: string;
    blogContent: string;
    public: boolean;
    userId?: number;
    completed?: boolean;

    constructor() {
        this.id = 0;
        this.title = '';
        this.blogContent = '';
        this.public = false;
    }
}