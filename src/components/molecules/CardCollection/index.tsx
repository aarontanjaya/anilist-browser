import { ButtonPrimary, Img } from '@/components/atoms';
import { CollectionContext } from '@/components/providers/CollectionProvider';
import { deleteCollection } from '@/reducers/collection';
import { mqTablet } from '@/styles/mq';
import { borders, colors } from '@/styles/variables';
import { IAnime } from '@/types';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
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
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

export type CardCollectionProps = React.ComponentProps<'div'> & {
  name: string;
  data: IAnime[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 200px;
  background-color: ${colors.bgContent};
  border-radius: ${borders.radius};
  :hover {
    cursor: pointer;
  }
`;

const ContainerPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  :hover {
    background-color: ${colors.bgMask};
  }
`;

const ImgStyled = styled(Img)`
  border-radius: ${borders.radius};
  object-fit: cover;
  position: absolute;
`;

const ImgContainer = css`
  object-fit: cover;
  width: 100%;
  height: 150px;
  background-color: ${colors.bgMask};
  ${mqTablet} {
    height: 300px;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextName = styled.p`
  font-weight: bold;
`;

const TextNew = styled.p`
  font-weight: 700;
  padding-top: 1rem;
  text-align: center;
`;

const DelIcon = styled(DeleteIcon)`
  :hover {
    color: ${colors.bgContent};
  }
`;

const ButtonDanger = styled(ButtonPrimary)`
  background-color: ${colors.redPrimary};
  color: white;
`;

const CardCollection: React.FC<CardCollectionProps> & {
  Placeholder: React.FC<React.ComponentProps<'div'>>;
} = ({ name, data, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch } = useContext(CollectionContext);
  const handleDelete = () => {
    dispatch(deleteCollection(name));
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={colors.bgMaskSolid}
          fontFamily='sourceSans'
        >
          <ModalHeader>Delete Collection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{`Are you sure you want to delete collection ${name} ?`}</p>
          </ModalBody>

          <ModalFooter gap={'2rem'}>
            <ButtonDanger onClick={handleDelete}>Delete</ButtonDanger>
            <ButtonPrimary onClick={onClose}>Close</ButtonPrimary>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Container {...props}>
        <ImgStyled
          src={
            data && data[0] && data[0].coverImage
              ? (data[0].coverImage.large as string)
              : 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg'
          }
          alt={
            data && data[0] && data[0].title && data[0].title.english
              ? data[0].title.english
              : ''
          }
          fill={true}
          css={ImgContainer}
        />
        <TextContainer>
          <div>
            <TextName>{name}</TextName>
            <p>{`${data.length} Anime`}</p>
          </div>
          <DelIcon
            onClick={(e) => {
              e.preventDefault();
              onOpen();
            }}
          />
        </TextContainer>
      </Container>
    </>
  );
};

const Placeholder: React.FC<React.ComponentProps<'div'>> = ({ ...props }) => {
  return (
    <Container {...props}>
      <ContainerPlaceholder css={ImgContainer}>
        <AddIcon />
        <TextNew>Add New Collection</TextNew>
      </ContainerPlaceholder>
    </Container>
  );
};

CardCollection.Placeholder = Placeholder;

export default CardCollection;
