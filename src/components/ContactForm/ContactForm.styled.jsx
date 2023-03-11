import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormCont = styled(Form)`
  padding-top: 20px;
  display: inline-block;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
`;

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

  :hover,
  :focus {
    background-color: #bda6a6;
    color: white;
    border: 2px solid #c29e9e;
  }
  transition: background-color 0.25s, color 0.25s;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;
