import styled from 'styled-components';

interface IContainerProps {
  checked: boolean;
  isFisrtItem: boolean;
}

export const BorderRadio = styled.div`
  padding: 1px;
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.linearGradient};
  }
`;

export const Radio = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LabelWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  margin-left: 1rem;
`;

export const Checkmark = styled.div`
  width: 0.3rem;
  height: 0.7rem;

  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;

  transform: rotate(40deg);
`;

export const IconWrapper = styled.button`
  border: none;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.disable};
  background-color: ${(props) => props.theme.colors.cardBackground};

  display: flex;
  place-content: center;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Container = styled.div<IContainerProps>`
  padding: 1.25rem;
  background-color: ${(props) => props.theme.colors.cardBackground};

  border-bottom: 1px solid ${(props) => props.theme.colors.disable};
  border-top-left-radius: ${(props) => props.isFisrtItem && '0.25rem'};
  border-top-right-radius: ${(props) => props.isFisrtItem && '0.25rem'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Radio} {
    background: ${(props) =>
      props.checked
        ? props.theme.linearGradient
        : props.theme.colors.cardBackground};
  }

  ${BorderRadio} {
    background: ${(props) =>
      props.checked ? props.theme.linearGradient : props.theme.colors.disable};
  }

  ${Label} {
    color: ${(props) =>
      props.checked ? props.theme.colors.disable : props.theme.colors.text};
    text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  }

  ${BorderRadio}:hover {
    background: ${(props) => !props.checked && props.theme.linearGradient};
  }

  ${Checkmark} {
    border-right: 2px solid
      ${(props) => (props.checked ? '#fff' : props.theme.colors.cardBackground)};
    border-bottom: 2px solid
      ${(props) => (props.checked ? '#fff' : props.theme.colors.cardBackground)};
  }
`;

export const CheckMarkWrapper = styled.div``;
