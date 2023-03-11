import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-right: 30px;
  color: #960909;
`;
export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;

  :hover {
    transform: scale(1.1);
  }
  transition: transform 0.25s;
`;
