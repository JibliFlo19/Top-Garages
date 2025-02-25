import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchGarageById,
  fetchReviewsByGarageId,
  addReview,
} from "../services/api";
import {
  Container,
  Title,
  DetailsContainer,
  Section,
  SectionTitle,
  ReviewForm,
  SubmitButton,
  Input,
  // Image,
  ServicesList,
  SuccessMessage,
  ReviewItem,
  Rating,
  ReviewList,
  CenteredSection,
  ServiceItem,
  InfoRow,
} from "./GarageDetailsPage.style";

function GarageDetailsPage() {
  const { id } = useParams();
  const [garage, setGarage] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    username: "",
    comment: "",
    rating: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchGarageById(id)
      .then((response) => {
        console.log(response.data); 
        setGarage(response.data);
      })
      .catch((error) =>
        console.error("Eroare la încărcarea garajului:", error)
      );

    fetchReviewsByGarageId(id)
      .then((response) => setReviews(response.data))
      .catch((error) =>
        console.error("Eroare la încărcarea recenziilor:", error)
      );
  }, [id]);

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validare
    if (newReview.rating < 1 || newReview.rating > 5) {
      alert("Rating-ul trebuie să fie între 1 și 5.");
      return;
    }

    if (!newReview.comment.trim()) {
      alert("Comentariul nu poate fi gol.");
      return;
    }

    addReview({ ...newReview, garage: { id } })
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview({ username: "", comment: "", rating: "" });
        setSuccessMessage("Recenzia a fost adăugată cu succes!");
        setTimeout(() => {
          setSuccessMessage(""); 
        }, 3000);
      })
      .catch((error) => console.error("Eroare la adăugarea recenziei:", error));
  };

  if (!garage) {
    return (
      <Container>
        <Title>Se încarcă...</Title>
      </Container>
    );
  }

  const averageRating = calculateAverageRating(reviews);

  return (
    <DetailsContainer>
      {/* Imaginea garajului */}
      {/* {garage.imageUrl && <Image src={garage.imageUrl} alt={garage.name} />} */}
      <Title>{garage.name}</Title>
      <CenteredSection>
        <Section>
          <SectionTitle>Description</SectionTitle>
          <p>{garage.description}</p>
        </Section>
      </CenteredSection>
      <InfoRow>
        <Section>
          <SectionTitle>Locație:</SectionTitle>
          <p>{garage.location}</p>
        </Section>
        <Section>
          <SectionTitle>Program:</SectionTitle>
          <p>{garage.schedule}</p>
        </Section>
        <Section>
          <SectionTitle>Contact:</SectionTitle>
          <p>Tel: {garage.contact}</p>
        </Section>
      </InfoRow>
      <Section>
        <SectionTitle>Servicii</SectionTitle>
        <ServicesList>
          {garage.services && garage.services.length > 0 ? (
            garage.services.map((service, index) => (
              <ServiceItem key={index}>
                {service.name} - {service.price} Lei
              </ServiceItem>
            ))
          ) : (
            <ServiceItem>Nu există servicii disponibile.</ServiceItem>
          )}
        </ServicesList>
      </Section>

      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <h2>Adaugă o recenzie:</h2>
      <ReviewForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Nume utilizator"
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="rating"
          placeholder="Nota (1-5)"
          min="1"
          max="5"
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="comment"
          placeholder="Comentariu"
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Trimite recenzia</SubmitButton>
      </ReviewForm>
      <Section>
        <SectionTitle>Recenzii</SectionTitle>
        {reviews.length > 0 ? (
          <ReviewList>
            <p>
              <strong>Media Ratingului: </strong>
              {averageRating} / 5
            </p>
            {reviews.map((review) => (
              <ReviewItem key={review.id}>
                <p>
                  <strong>{review.username}</strong>: {review.comment}
                </p>
                <Rating>Rating: {review.rating} / 5</Rating>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <p>Nu există recenzii pentru acest garaj.</p>
        )}
      </Section>
    </DetailsContainer>
  );
}

export default GarageDetailsPage;
