import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  text-align: center;
`;

export const DetailsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: auto;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ServiceItem = styled.li`
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const ReviewList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 10px;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Rating = styled.span`
  font-weight: bold;
  color: #f39c12;
`;

export const CenteredSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoSection = styled(Section)`
  flex: 1;
  min-width: 150px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;
