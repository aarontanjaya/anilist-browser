import { CollectionAction } from '@/reducers/actions';
import {
  collectionInitialState,
  collectionReducer,
  getAllCollections,
} from '@/reducers/collection';
import { Collection } from '@/reducers/states';
import React, { createContext, useEffect, useReducer } from 'react';

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type CollectionContextProps = {
  collection: Collection;
  dispatch: React.Dispatch<CollectionAction>;
};

export const CollectionContext = createContext<CollectionContextProps>({
  collection: collectionInitialState,
  dispatch: () => null,
});

export const CollectionProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [collection, dispatch] = useReducer(
    collectionReducer,
    collectionInitialState,
  );

  useEffect(() => {
    dispatch(getAllCollections());
  }, []);
  return (
    <CollectionContext.Provider
      value={{
        collection,
        dispatch,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
