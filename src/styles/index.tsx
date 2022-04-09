import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const TodoWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  max-width: 588px;
  margin: 0 auto;

  padding: 0 1.5rem;

  padding-bottom: 3rem;

  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: ${(props) => props.theme.breakingPoints.mobile}px) {
    margin-top: 3rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.125rem;

  margin-top: 5rem;
`;

export const HeadText = styled.h1`
  letter-spacing: 1rem;
  color: #fff;
`;

export const FooterLabel = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.disable};

  padding: 2rem 0;
`;
