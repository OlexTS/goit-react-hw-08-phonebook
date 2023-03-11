import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: start;
`;

export const InputContainer = styled.div`
  margin-top: 5px;
`;

export const Input = styled.input`
  display: inline-block;
  margin: auto;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px;
  border: none;
  border-radius: 20px;

  :hover,
  :focus {
    outline-color: #c29e9e;
  }
`;
