import APIResponse from '@typing/http/APIResponse';
import Model from '@models/model';
import AccountRole from '@typing/auth/AccountRole';

class User extends Model {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _role: AccountRole;

  constructor(){
    super();
    this._email = this._id = this._name = this._password = ''
    this._role = AccountRole.CLIENT
  };

  static fromJSON(json: APIResponse): User {
    const obj = new User();
    obj._id = String(json['id']);
    obj._name = String(json['name']);
    obj._email = String(json['email']);
    obj._password = String(json['password']);
    obj._role = Number(json['role']);
    return obj;
  }

  override toJSON(): APIResponse {
    let dto = {} as APIResponse;
    dto['id'] = this.id;
    dto['name'] = this._name;
    dto['email'] = this._email;
    dto['password'] = this._password;
    dto['role'] = this._role;
    return dto;
  }

  get id() {
    return this._id;
  }
  
  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get role() {
    return this._role;
  }
}

export default User;