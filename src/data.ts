export class something{
    constructor(public name:string, public food:string){
        if(name.trim() == ""){
            throw new Error("Name is empty")
        }
        else if(food.trim() == ""){
            throw new Error("food is empty")
        }
    }
}