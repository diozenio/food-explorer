import FoodCategory from "@typing/FoodCategory";
import Food from "./Food";

describe("Food model", () => {
    it("should create an instance of Food", () => {
        const food = new Food();

        expect(food.id).not.toBeUndefined(); 
        expect(food.name).not.toBeUndefined(); 
        expect(food.description).not.toBeUndefined(); 
        expect(food.image).not.toBeUndefined(); 
        expect(food.price).not.toBeUndefined(); 
        expect(food.category).not.toBeUndefined(); 
        expect(food.category).toEqual(FoodCategory.BEBIDA); 
        expect(food.ingredients).not.toBeUndefined(); 
    });

    it("should create an instance of Food from a JSON mock", () => {
        const foodMock = {
            id: "1",
            name: "Refri",
            description: "A refreshing drink",
            image: "image.png",
            price: 4,
            category: 0,
            ingredients: ["Water", "Sugar"],
        };

        const food = Food.fromJSON(foodMock);
        expect(food).not.toBeUndefined();
        expect(food.id).not.toBeUndefined();
        expect(food.id).toBe(foodMock.id);
        expect(food.name).not.toBeUndefined();
        expect(food.name).toBe(foodMock.name);
        expect(food.description).not.toBeUndefined();
        expect(food.description).toBe(foodMock.description);
        expect(food.image).not.toBeUndefined();
        expect(food.image).toBe(foodMock.image);
        expect(food.price).not.toBeUndefined();
        expect(food.price).toBe(foodMock.price);
        expect(food.category).not.toBeUndefined();
        expect(food.category).toBe(FoodCategory.BEBIDA);
        expect(food.ingredients).not.toBeUndefined();
        expect(food.ingredients[0]).toEqual("Water");
        expect(food.ingredients[1]).toEqual("Sugar");
        expect(food.ingredients).toHaveLength(2);
    });
})