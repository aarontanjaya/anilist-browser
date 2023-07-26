import styled from '@emotion/styled';

export type BannerProps = React.ComponentProps<'div'> & {
  url: string;
};

const BannerStyled = styled.div<BannerProps>`
  width: 100%;
  background-size: cover;
  background-position: 50% 35%;
  background-repeat: 'no-repeat';
  height: 300px;
`;

const Banner: React.FC<BannerProps> = ({ url, ...props }) => {
  return (
    <BannerStyled
      style={{
        backgroundImage: url,
      }}
      url={url ? url : ''}
      {...props}
    />
  );
};

export default Banner;
