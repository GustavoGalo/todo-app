import React, { Dispatch, SetStateAction } from 'react';
import { Filters } from './types';
import { Container, FilterItem, FiltersWrapper } from './styles';

export interface IListFooterProps {
  listBy: Filters;
  onChangeFilter: Dispatch<SetStateAction<string>>;
}

export const ListFooter: React.FC<IListFooterProps> = ({
  listBy,
  onChangeFilter,
}) => (
  <Container>
    <FiltersWrapper>
      <FilterItem
        selected={listBy === 'all'}
        onClick={() => listBy !== 'all' && onChangeFilter('all')}
      >
        All
      </FilterItem>
      <FilterItem
        selected={listBy === 'active'}
        onClick={() => listBy !== 'active' && onChangeFilter('active')}
      >
        Active
      </FilterItem>
      <FilterItem
        selected={listBy === 'completed'}
        onClick={() => listBy !== 'completed' && onChangeFilter('completed')}
      >
        Completed
      </FilterItem>
    </FiltersWrapper>
  </Container>
);
