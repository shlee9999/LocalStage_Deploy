import { styled } from 'styled-components';

export const PosterWithDesc = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;
export const Desc = styled.div`
  text-align: center;

  & > * {
    padding: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p {
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;
