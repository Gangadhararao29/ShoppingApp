export class Product {
    age:number;
    id: string;
    imageUrl:string;
    name: string;
    snippet:string;

    constructor(age,id,imageUrl,name,snippet){
        this.age=age
        this.id=id
        this.name=name
        this.imageUrl=imageUrl
        this.snippet =snippet
    }
}
