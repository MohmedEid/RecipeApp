
export class allrecipes{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor (name:string, desc:string, imgPath:string){
        this.name = name;
        this.description = desc;
        this.imagePath= imgPath;
    }
}
