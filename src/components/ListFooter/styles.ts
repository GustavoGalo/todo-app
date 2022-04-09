import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem;
  background-color: ${(props) => props.theme.colors.cardBackground};

  border-radius: 0.25rem;

  margin-top: 1.5rem;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface IFilterItemProps {
  selected: boolean;
}

export const FilterItem = styled.button<IFilterItemProps>`
  border: none;
  font-size: inherit;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.cardBackground};

  padding: 0 1rem;
  color: ${(props) =>
    props.selected ? props.theme.colors.primary : props.theme.colors.disable};
`;
