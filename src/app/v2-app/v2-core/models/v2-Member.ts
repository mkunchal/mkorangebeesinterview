export class V2Member {
    
    constructor(public email: string, public emailID: number, public isPrimary: boolean, public description: string, public timeCreated: number) { }
}
/* 
export class V2Member {
    public email: string;
    public emailID: number;
    public isPrimary: boolean;
    public description: string;
    public timeCreated: number;

    constructor(email: string, emailID: number, isPrimary: boolean, description: string, timeCreated: number) {
        this.email = email;
        this.emailID = emailID;
        this.isPrimary = isPrimary;
        this.description = description;
        this.timeCreated = timeCreated;
    }
}
*/