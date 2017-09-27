import { Option } from './option';

export interface IPoll {
    _id?: string;

    createdAt?: Date;
    questionText: string;
    user: string;
    options: Option[];

}

export class Poll {
    _id?: string;

    createdAt?: Date;
    questionText: string;
    user: string;
    options: Option[];

    constructor(questionText: string, user: string, options: Option[]) {
        this._id = null;
        this.questionText = questionText;
        this.user = user;
        this.options = options;
    }

    public isOwner(user: string): boolean {
        return this.user === user;
    }
}
