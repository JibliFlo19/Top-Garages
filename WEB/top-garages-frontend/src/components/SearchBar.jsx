import { SearchContainer, Input, Select, Button } from "./Navbar.style";

function SearchBar({ filters, setFilters, fetchGarages }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        name="location"
        placeholder="Caută după locație"
        onChange={handleChange}
      />
      <Input
        type="number"
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
      />
      
      <Button onClick={fetchGarages}>Caută</Button>
    </SearchContainer>
  );
}

export default SearchBar;
