import Order from "./Order";

describe("Order Model", () => {
    it("should create an instance of Order", () => {
        const order = new Order();

        expect(order.id).not.toBeUndefined();
        expect(order.userId).not.toBeUndefined();
        expect(order.foodsId).not.toBeUndefined();
        expect(order.price).not.toBeUndefined();
        expect(order.status).not.toBeUndefined();
        expect(order.createdAt).not.toBeUndefined();
    });

    it("should create an instance of Order from a JSON mock", () => {
        const orderMock = {
            id: "1",
            userId: "1",
            foodsId: ["1", "2"],
            price: 20,
            status: false,
            createdAt: new Date().toISOString(),
        };

        const order = Order.fromJSON(orderMock);
        expect(order).not.toBeUndefined();
        expect(order.id).not.toBeUndefined();
        expect(order.id).toBe(orderMock.id);
        expect(order.userId).not.toBeUndefined();
        expect(order.userId).toBe(orderMock.userId);
        expect(order.foodsId).not.toBeUndefined();
        expect(order.foodsId).toHaveLength(2);
        expect(order.foodsId[0]).toEqual("1");
        expect(order.foodsId[1]).toEqual("2");
        expect(order.price).not.toBeUndefined();
        expect(order.price).toBe(orderMock.price);
        expect(order.status).not.toBeUndefined();
        expect(order.status).toBe(orderMock.status);
        expect(order.createdAt).not.toBeUndefined();
        expect(order.createdAt).toBe(orderMock.createdAt);
    });
});