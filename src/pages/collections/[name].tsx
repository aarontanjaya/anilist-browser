import { ListAnime } from '@/components/organisms';
import { CollectionContext } from '@/components/providers/CollectionProvider';
import { deleteCollectionItem } from '@/reducers/collection';
import Error from 'next/error';
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
import { useRouter } from 'next/router';
import { ReactElement, useContext, useState } from 'react';
import { colors } from '@/styles/variables';
import styled from '@emotion/styled';
import { ButtonPrimary } from '@/components/atoms';
import { UserLayout } from '@/components/layout';
import Head from 'next/head';

const ButtonDanger = styled(ButtonPrimary)`
  background-color: ${colors.redPrimary};
  color: white;
`;

const Title = styled.h3({
  padding: '1rem',
});

const Container = styled.div`
  max-width: 1300px;
  padding: 2rem 0;
  width: 100%;
`;

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export default function CollectionDetail() {
  const router = useRouter();
  const { collection, dispatch } = useContext(CollectionContext);
  const [selectedId, setSelectedId] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickDelete = (id: number | null | undefined) => {
    if (id && typeof router.query.name == 'string') {
      setSelectedId(id);
      onOpen();
    }
  };
  const handleDelete = () => {
    dispatch(deleteCollectionItem(router.query.name as string, selectedId));
    setSelectedId(-1);
    onClose();
  };
  const handleClose = () => {
    setSelectedId(-1);
    onClose();
  };

  return (
    <>
      <Head>
        <title>{`AniBrowser - ${router.query.name}`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={colors.bgMaskSolid}
          fontFamily='sourceSans'
        >
          <ModalHeader>Delete Collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{'Are you sure you want to delete this item ?'}</p>
          </ModalBody>

          <ModalFooter gap={'2rem'}>
            <ButtonDanger onClick={handleDelete}>Delete</ButtonDanger>
            <ButtonPrimary onClick={handleClose}>Close</ButtonPrimary>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {typeof router.query.name == 'string' &&
      collection[router.query.name as string] ? (
        <MainContainer>
          <Container>
            <Title>{`Collection ${router.query.name} ${
              collection[router.query.name].length
            } items`}</Title>
            <ListAnime
              data={collection[router.query.name]}
              isLoading={false}
              enableDelete={true}
              onDelete={(id) => handleClickDelete(id)}
            />
          </Container>
        </MainContainer>
      ) : (
        <Error statusCode={404} />
      )}
    </>
  );
}

CollectionDetail.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
