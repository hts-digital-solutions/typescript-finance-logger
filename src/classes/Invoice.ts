import { HasFormatting } from "../interfaces/HasFormatting.js";

export class Invoice implements HasFormatting{

    constructor(
        readonly client:string, 
        private details:string, 
        private amount:number
    ){}

    format()
    {
        return (`${this.client} owes $${this.amount} for ${this.details}.`);
    }
}