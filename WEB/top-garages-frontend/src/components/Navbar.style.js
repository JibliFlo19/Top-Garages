import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: aliceblue;
  padding: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
`;

export const NavLink = styled(Link)`
  color: gray;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

export const Logo = styled.h1`
  color: gray;
  margin-left: 20px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;
