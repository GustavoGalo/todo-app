import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.cardBackground};

  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: calc(100% - 2rem);
  border: none;

  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.cardBackground};

  margin-left: 1rem;

  font-size: inherit;
  font-family: inherit;
`;

export const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.disable};
`;
