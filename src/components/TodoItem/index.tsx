import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {
  Container,
  Radio,
  Label,
  BorderRadio,
  Checkmark,
  CheckMarkWrapper,
  IconWrapper,
  LabelWrapper,
} from './styles';

interface ITodoItemProps {
  label: string;
  selected: boolean;
  isFisrtItem: boolean;
  onRadioClick: () => void;
  onRemove: () => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  label,
  selected,
  isFisrtItem,
  onRadioClick,
  onRemove,
}) => (
  <Container checked={selected} isFisrtItem={isFisrtItem}>
    <BorderRadio onClick={onRadioClick}>
      <Radio>
        <CheckMarkWrapper>
          <Checkmark />
        </CheckMarkWrapper>
      </Radio>
    </BorderRadio>
    <LabelWrapper>
      <Label>{label}</Label>
    </LabelWrapper>
    <IconWrapper onClick={onRemove}>
      <AiOutlineClose />
    </IconWrapper>
  </Container>
);
