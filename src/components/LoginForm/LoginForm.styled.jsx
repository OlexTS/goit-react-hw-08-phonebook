import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 500;
`;

export const FormCont = styled(Form)`
padding-top: 80px;
display: inline-block;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const Title = styled.h1`
margin-bottom: 20px;
`

export const LabelCont = styled.label`
display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  

`
export const Text = styled.span`
font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: start;
`;

export const Input = styled(Field)`
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
export const SubmitButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  margin-bottom: 40px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #bda6a6;
    color: white;
    border: 2px solid #c29e9e;
  }
`;