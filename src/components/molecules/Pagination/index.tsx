import styled from '@emotion/styled';
import { ButtonPagination } from '@/components/atoms';
export type PaginationProps = {
  page: number;
  pageSize?: number | null;
  totalCount?: number | null;
  onPageChange: (input: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Pagination: React.FC<PaginationProps> = ({ ...props }) => {
  return (
    <Container {...props}>
      {Array.from(Array(10).keys()).map((val) => (
        <ButtonPagination key={`pagi-${val}`}>{val}</ButtonPagination>
      ))}
    </Container>
  );
};

export default Pagination;
