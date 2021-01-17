export class User {
    id: number;
    name: string;
    image: string;
    email: string;

    constructor(id = 0, name = '', image = '', email = '') {
        this.id = id;
        this.name = name
        this.image = image;
        this.email = email;
    }
}
