import { IAnime } from '@/types';

export enum CollectionActionTypes {
  GET_ALL = 'GET_ALL',
  ADD = 'ADD',
  DELETE = 'DELETE',
  DELETE_ITEM = 'DELETE_ITEM',
}

export interface CollectionAction {
  type: CollectionActionTypes;
  payload: CollectionActionPayload;
}

export interface CollectionActionPayload {
  name: string;
  item: IAnime;
}
