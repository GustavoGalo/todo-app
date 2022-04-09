import React from 'react';

import { Container, ClearCompletedItemsButton } from './styles';

interface IStatsTodoItem {
  itemsLeft: number;
  onClearCompleted: () => void;
}

export const StatsTodoItem: React.FC<IStatsTodoItem> = ({
  itemsLeft,
  onClearCompleted,
}) => (
  <Container>
    <p>{itemsLeft} items left</p>
    <ClearCompletedItemsButton onClick={onClearCompleted}>
      Clear Completed
    </ClearCompletedItemsButton>
  </Container>
);
