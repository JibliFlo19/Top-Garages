import { useEffect, useState } from "react";
import { fetchGarages } from "../services/api";

import SearchBar from "../components/SearchBar";
import {
  Container,
  GarageGrid,
  GarageCard,
  GarageTitle,
  GarageInfo,
  GarageButton,
  ContainerTitle,
  Title,
  Image,
} from "../pages/HomePage.style";

function HomePage() {
  const [garages, setGarages] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    sortBy: "",
    service: "",
    rating: "",
    schedule: "",
  });
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const fetchGaragesData = () => {
    fetchGarages(filters, page, size)
      .then((response) => {
        console.log(response);
        setGarages(response.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) =>
        console.error("Eroare la încărcarea garajelor:", error)
      );
  };

  useEffect(() => {
    fetchGaragesData();
  }, [page, size]);

  return (
    <Container>
      <ContainerTitle>
        <Title>Top Garages</Title>
        <Image
          src="https://media.istockphoto.com/id/1892179107/ro/fotografie/mașini-deschise-capotă-parcată-în-garaj-pentru-service-de-reparații-și-întreținere.jpg?s=612x612&w=0&k=20&c=-WoWKrs4pU-9Sqp11XYsEL_N288QJhtZ8ybG84xgPdA="
          alt="Top Garages"
        />
      </ContainerTitle>
      <SearchBar
        filters={filters}
        setFilters={setFilters}
        fetchGarages={fetchGaragesData}
      />
      {garages && garages.length > 0 ? (
        <GarageGrid>
          {garages.map((garage) => (
            <GarageCard key={garage.id}>
              <GarageTitle>{garage.name}</GarageTitle>
              <GarageInfo>{garage.location}</GarageInfo>
              <GarageInfo>{garage.description}</GarageInfo>
              <p>
                Rating:{" "}
                {garage.averageRating !== undefined
                  ? garage.averageRating.toFixed(1)
                  : "N/A"}
              </p>
              <GarageButton to={`/garage/${garage.id}`}>
                Vezi detalii
              </GarageButton>
            </GarageCard>
          ))}
        </GarageGrid>
      ) : (
        <p>Nu există garaje disponibile.</p>
      )}
      {/* <div>
        <label>Garaje pe pagină: </label>
        <Select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="16">16</option>
        </Select>
      </div>

      <PaginationContainer>
        <PaginationButton onClick={() => setPage(page - 1)} $active={page > 0}>
          ⬅ Pagina anterioară
        </PaginationButton>
        <span>
          Pagina {page + 1} din {totalPages}
        </span>
        <PaginationButton
          onClick={() => setPage(page + 1)}
          $active={page + 1 < totalPages}
        >
          Următoarea pagină ➡
        </PaginationButton>
      </PaginationContainer> */}
      {/* Caruselul de imagini */}
    </Container>
  );
}

export default HomePage;
