import { Collection } from '@/reducers/states';
import { IError } from '@/types/error';

export const validateCollectionName: (
  collection: Collection,
  name: string,
) => IError = (collection, name: string) => {
  const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!name) {
    return { msg: 'Error collection name cant be empty', err: true };
  }

  if (Object.keys(collection).includes(name)) {
    return {
      msg: 'Name already taken',
      err: true,
    };
  }

  if (specialChars.test(name)) {
    return {
      msg: 'Name cant contain special characters',
      err: true,
    };
  }
  return {
    msg: null,
    err: false,
  };
};
