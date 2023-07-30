import { IAnime } from '@/types';
import { CollectionAction, CollectionActionTypes } from './actions';
import { Collection } from './states';

export const collectionInitialState: Collection = {};
export function collectionReducer(
  state: Collection,
  action: CollectionAction,
): Collection {
  const { type, payload } = action;
  switch (type) {
    case CollectionActionTypes.ADD: {
      let newList: IAnime[];
      if (state[payload.name]) {
        newList = [...state[payload.name], payload.item];
      } else {
        newList = payload.item && payload.item.id ? [payload.item] : [];
      }

      const newCollection = {
        ...state,
        [payload.name]: newList,
      };

      window.localStorage.setItem('collection', JSON.stringify(newCollection));
      return newCollection;
    }
    case CollectionActionTypes.GET_ALL: {
      return JSON.parse(window.localStorage.getItem('collection') || '{}');
    }
    case CollectionActionTypes.DELETE: {
      const newCollection = { ...state };
      delete newCollection[payload.name];

      return newCollection;
    }
    case CollectionActionTypes.DELETE_ITEM: {
      const newCollection = { ...state };
      const newList = newCollection[payload.name];
      if (!newList || newList.length == 0) {
        return state;
      }

      newCollection[payload.name] = newList.filter(
        (item) => item.id !== payload.item.id,
      );

      return newCollection;
    }
  }
}

export const getAllCollections = (): CollectionAction => ({
  type: CollectionActionTypes.GET_ALL,
  payload: { name: '', item: {} },
});

export const addCollection = (
  name: string,
  item: IAnime,
): CollectionAction => ({
  type: CollectionActionTypes.ADD,
  payload: { name: name, item: item },
});

export const deleteCollection = (name: string) => ({
  type: CollectionActionTypes.DELETE,
  payload: {
    name: name,
    item: {},
  },
});

export const deleteCollectionItem = (name: string, id: number) => ({
  type: CollectionActionTypes.DELETE_ITEM,
  payload: {
    name: name,
    item: {
      id: id,
    },
  },
});
