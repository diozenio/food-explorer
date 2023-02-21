import Model from '@models/model';
import APIResponse from '@typing/http/APIResponse';

class Order extends Model {
    private _id: string;
    private _userId: string;
    private _foodsId: Array<string>;
    private _price: number;
    private _status: boolean;
    private _createdAt: number;

    constructor() {
        super();
        this._id = this._userId = "";
        this._price = 0;
        this._foodsId = [];
        this._status = false;
        this._createdAt = Date.now();
    }

    static fromJSON(json: APIResponse): Order {
        const order = new Order();
        order._id = String(json["id"]);
        order._userId = String(json["userId"]);
        order._foodsId = (json["foodsId"] as string[]).map(foodId => foodId);
        order._price = Number(json["price"]);
        order._status = Boolean(json["status"]);
        order._createdAt = Number(json["createdAt"]);
        return order;
    }

    override toJSON(): APIResponse {
        const dto = {} as APIResponse;
        dto["id"] = this._id;
        dto["userId"] = this._userId;
        dto["foodsId"] = this._foodsId.map(foodId => foodId);
        dto["price"] = this._price;
        dto["status"] = this._status;
        dto["createdAt"] = this._createdAt;
        return dto;
    }

    get id() {
        return this._id;
    }

    get userId() {
        return this._userId;
    }

    get foodsId() {
        return this._foodsId;
    }

    get price() {
        return this._price;
    }
    get status() {
        return this._status;
    }

    get createdAt() {
        return this._createdAt;
    }
}

export default Order;