import Model from '@models/model';
import FoodCategory from '@typing/food/FoodCategory';
import APIResponse from '@typing/http/APIResponse';

class Food extends Model {
    private _id: string;
    private _name: string;
    private _description: string;
    private _image: string;
    private _price: number;
    private _category: FoodCategory;
    private _ingredients: Array<string>;

    constructor() {
        super();
        this._id = this._name = this._description = this._image = "";
        this._price = 0;
        this._category = FoodCategory.BEBIDA;
        this._ingredients = [];
    }

    static fromJSON(json: APIResponse): Food {
        const obj = new Food();
        obj._id = String(json["id"]);
        obj._name = String(json["name"]);
        obj._description = String(json["description"]);
        obj._image = String(json["image"]);
        obj._price = Number(json["price"]);
        obj._category = Number(json["category"]);
        if (json["ingredients"]) {
            obj._ingredients = (json["ingredients"] as string[]).map(item => {
                return String(item);
            });
        }
        return obj;
    }

    override toJSON(): APIResponse {
        let dto = {} as APIResponse;
        dto["id"] = this._id;
        dto["name"] = this._name;
        dto["description"] = this._description;
        dto["image"] = this._image;
        dto["price"] = this._price;
        dto["category"] = this._category;
        dto["ingredients"] = this._ingredients.map(item => item);
        return dto;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get image() {
        return this._image;
    }

    get price() {
        return this._price;
    }

    get category() {
        return this._category;
    }

    get ingredients() {
        return this._ingredients;
    }

}

export default Food;