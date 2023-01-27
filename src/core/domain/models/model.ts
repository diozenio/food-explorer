import APIResponse from '../types/http/APIResponse';

abstract class Model {
  abstract toJSON(): APIResponse;
  
  static fromJSON(_: Record<string, unknown>): Model {
    throw new Error('you need to implement the fromJSON method');
  }

  static fromForm(_: Record<string, unknown>): Model {
    throw new Error('you need to implement the fromForm method');
  }
}

export default Model;