import { Ingridient } from 'app/shared';

export class Recipe {
    private _name: string;
    private _description: string;
    private _imagePath: string;
    private _ingridients: Ingridient[];

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    get imagePath(): string {
        return this._imagePath;
    }
    set imagePath(value: string) {
        this._imagePath = value;
    }

    get ingridients(): Ingridient[] {
      return this._ingridients;
    }
    set ingridients(ingridients: Ingridient[]) {
      this._ingridients = ingridients;
    }

    constructor(name: string, description: string, imagePath: string, ingridients: Ingridient[] ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingridients = ingridients;
    }
}
