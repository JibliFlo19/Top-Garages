import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 20px auto;
    padding: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ServiceItem = styled.li`
  background: #e9ecef;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
  }
`;
