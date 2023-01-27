import User from "./User"
import AccountRole from "@typing/auth/AccountRole"

export {}

describe("User instance", ()=>{
    it("should create an instance of User", ()=> {
        const user = new User();
        expect(user).not.toBeUndefined();
        expect(user.id).not.toBeUndefined();
        expect(user.name).not.toBeUndefined();
        expect(user.email).not.toBeUndefined();
        expect(user.password).not.toBeUndefined();
        expect(user.role).not.toBeUndefined();
        expect(user.role).toEqual(AccountRole.CLIENT);
    });

    it("should create an instance of User from a JSON mock", ()=> {
        const userMock = {
            id: "uuid",
            email: "email@email.com",
            name: "admin",
            password: "12345",
            role: 0
        }

        const user = User.fromJSON(userMock);
        expect(user).not.toBeUndefined();
        expect(user.id).not.toBeUndefined();
        expect(user.id).toEqual(userMock.id);
        expect(user.name).not.toBeUndefined();
        expect(user.name).toEqual(userMock.name);
        expect(user.email).not.toBeUndefined();
        expect(user.email).toEqual(userMock.email);
        expect(user.password).not.toBeUndefined();
        expect(user.password).toEqual(userMock.password);
        expect(user.role).not.toBeUndefined();
        expect(user.role).toEqual(AccountRole.ADMIN);
    });
})