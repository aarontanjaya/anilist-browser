import React, { useContext, useState } from 'react';
import { IAnime } from '@/types';
import { ButtonPrimary, ButtonTransparent, Input } from '@/components/atoms';
import { AddIcon, CheckCircleIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { borders, colors } from '@/styles/variables';
import { validateCollectionName } from '@/utils/collection';
import { CollectionContext } from '@/components/providers/CollectionProvider';
import { IError } from '@/types/error';
import { css } from '@emotion/react';
import { addCollection } from '@/reducers/collection';

export type ButtonAddCollectionProps = React.ComponentProps<'div'> & {
  data: IAnime;
};
const Container = styled.div({
  width: '100%',
  padding: '1rem 0',
});

const ListContainer = styled.div({
  width: '100%',
  backgroundColor: 'white',
  color: 'black',
  position: 'absolute',

  top: 'calc(100% + 8px)',
  borderRadius: borders.radius,
});

const List = styled.div({
  width: '100%',
  maxHeight: '300px',
  overflow: 'scroll',
});

const ListItem = styled.div(
  {
    width: '100%',
    padding: '1rem',
    borderBottom: '1px',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [':hover']: {
      cursor: 'pointer',
      backgroundColor: colors.bgHoverWhite,
    },
  },
  (props) => props.css,
);

const ContainerInput = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  borderTop: '1px',
  borderStyle: 'solid',
});

const ErrMsg = styled.p({
  color: 'red',
  wordWrap: 'break-word',
  display: 'flex',
  fontSize: '0.8rem',
  padding: '1rem',
  paddingTop: '0',
});

const ButtonAddCollection: React.FC<ButtonAddCollectionProps> = ({
  data,
  ...props
}) => {
  const { collection, dispatch } = useContext(CollectionContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState('');
  const [err, setErr] = useState<IError>({
    msg: null,
    err: false,
  });

  const handleInputChange = (target: string) => {
    setNewCollectionName(target);
  };

  const onClickDropdown = () => {
    setShowDropdown(!showDropdown);
    setNewCollectionName('');
    setErr({
      msg: null,
      err: false,
    });
  };
  const handleSubmit = () => {
    const validateError = validateCollectionName(collection, newCollectionName);
    setErr(validateError);
    if (validateError.err) {
      return;
    }
    setNewCollectionName('');
    dispatch(addCollection(newCollectionName, data));
  };
  return (
    <Container {...props}>
      <ButtonPrimary onClick={() => onClickDropdown()}>
        Add to Collection
      </ButtonPrimary>
      {showDropdown && (
        <ListContainer>
          <List>
            {Object.keys(collection).length
              ? Object.keys(collection).map((value, idx) => (
                  <ListItem key={`col-${value}-${idx}`}>
                    <p>{value}</p>
                    <ButtonTransparent>
                      {collection[value].find((val) => val.id == data.id) ? (
                        <CheckCircleIcon
                          fontWeight={'bold'}
                          color={colors.teal}
                        />
                      ) : (
                        <AddIcon fontWeight={'bold'} color={colors.teal} />
                      )}
                    </ButtonTransparent>
                  </ListItem>
                ))
              : null}
          </List>
          <ContainerInput>
            <ListItem
              css={css`
                border-style: none;
              `}
            >
              <Input
                onChange={(e) => handleInputChange(e.target.value)}
                value={newCollectionName}
              />
              <ButtonTransparent onClick={() => handleSubmit()}>
                <AddIcon fontWeight={'bold'} color={colors.teal} />
              </ButtonTransparent>
            </ListItem>
            {err.err ? <ErrMsg>{err.msg}</ErrMsg> : null}
          </ContainerInput>
        </ListContainer>
      )}
    </Container>
  );
};

export default ButtonAddCollection;
