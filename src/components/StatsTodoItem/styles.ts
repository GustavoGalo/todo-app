import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem;
  background-color: ${(props) => props.theme.colors.cardBackground};

  display: flex;
  align-items: center;

  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  display: flex;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.disable};
  font-size: 16px;
`;

export const ClearCompletedItemsButton = styled.button`
  border: none;
  color: ${(props) => props.theme.colors.disable};
  background-color: ${(props) => props.theme.colors.cardBackground};

  font-size: 1rem;
  font-family: inherit;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
