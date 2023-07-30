import { ButtonPrimary, Input } from '@/components/atoms';
import { CardCollection } from '@/components/molecules';
import { CollectionContext } from '@/components/providers/CollectionProvider';
import { addCollection } from '@/reducers/collection';
import { mqDesktop, mqMobile } from '@/styles/mq';
import { colors } from '@/styles/variables';
import { IError } from '@/types/error';
import { validateCollectionName } from '@/utils/collection';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

export type ListCollectionProps = React.ComponentProps<'div'>;

const Container = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${mqMobile} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${mqDesktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const InputStyled = styled(Input)`
  width: 100%;
  background-color: ${colors.bgMaskSolid};
`;

const TextField = styled.p`
  font-weight: 700;
  padding-bottom: 1rem;
`;

const ErrMsg = styled.p({
  color: '#ff7875',
  wordWrap: 'break-word',
  display: 'flex',
  fontSize: '0.8rem',
  paddingTop: '1rem',
  paddingLeft: 0,
});

const ListCollection: React.FC<ListCollectionProps> = ({ ...props }) => {
  const { collection, dispatch } = useContext(CollectionContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newCollectionName, setNewCollectionName] = useState('');

  const [err, setErr] = useState<IError>({
    msg: null,
    err: false,
  });
  const handleInputChange = (target: string) => {
    setNewCollectionName(target);
  };

  const handleClose = () => {
    setNewCollectionName('');
    setErr({
      msg: null,
      err: false,
    });
    onClose();
  };

  const handleSubmit = () => {
    const validateError = validateCollectionName(collection, newCollectionName);
    setErr(validateError);
    if (validateError.err) {
      return;
    }
    onClose();
    dispatch(addCollection(newCollectionName, {}));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={colors.bgMaskSolid}
          fontFamily='sourceSans'
        >
          <ModalHeader>Add New Collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextField>Collection Name</TextField>
            <InputStyled
              onChange={(e) => handleInputChange(e.target.value)}
              value={newCollectionName}
            />
            {err.err ? <ErrMsg>{err.msg}</ErrMsg> : null}
          </ModalBody>

          <ModalFooter>
            <ButtonPrimary onClick={handleSubmit}>Add</ButtonPrimary>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Container {...props}>
        <CardCollection.Placeholder onClick={onOpen} />
        {Object.keys(collection).map((name) => (
          <Link key={`cardkey-${name}`} href={`/collections/${name}`}>
            <CardCollection
              key={`collection-${name}`}
              name={name}
              data={collection[name]}
            />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default ListCollection;
