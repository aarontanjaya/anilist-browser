import { Collection } from '@/reducers/states';
import { IError } from '@/types/error';

export const validateCollectionName: (
  collection: Collection,
  name: string,
) => IError = (collection, name: string) => {
  if (!name) {
    return { msg: 'Error collection name cant be empty', err: true };
  }

  if (Object.keys(collection).includes(name)) {
    return {
      msg: 'Name already taken',
      err: true,
    };
  }

  return {
    msg: null,
    err: false,
  };
};
