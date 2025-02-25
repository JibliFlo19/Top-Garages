import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; 
`;

export const Title = styled.h1`
  position: absolute;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const GarageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const GarageCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GarageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: gray;
`;

export const GarageInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

export const GarageButton = styled(Link)`
  margin-top: auto; 
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Carousel = styled.div`
  margin-top: 20px;
 
`;
