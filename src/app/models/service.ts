export class Service{
    _id?: number;
    username: string;
    description: string;
    time_cost: number;
    categories:string[]

    constructor(username: string, description: string, time_cost:number, categories:string[]){
        this.username = username;
        this.description = description;
        this.time_cost = time_cost;
        this.categories = categories;
    }
}
