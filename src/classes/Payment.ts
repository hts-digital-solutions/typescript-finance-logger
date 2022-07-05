import { HasFormatting } from "../interfaces/HasFormatting.js";

export class Payment implements HasFormatting{

    constructor(
        readonly recepient:string, 
        private details:string, 
        private amount:number
    ){}

    format()
    {
        return (`${this.recepient} is owed $${this.amount} for ${this.details}.`);
    }
}