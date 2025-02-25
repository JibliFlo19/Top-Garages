import React, { useState } from "react";
import { addGarage } from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  FormContainer,
  Input,
  Button,
  ServiceList,
  ServiceItem,
} from "./AddGaragePage.style";

function AddGaragePage() {
  const [garage, setGarage] = useState({
    name: "",
    imageUrl: "",
    location: "",
    schedule: "",
    description: "",
    contact: "",
    services: [],
  });
  const [service, setService] = useState({ name: "", price: "" });

  const navigate = useNavigate();

  const addService = () => {
    if (service.name && service.price && parseFloat(service.price) > 0) {
      setGarage({ ...garage, services: [...garage.services, { ...service }] });
      setService({ name: "", price: "" });
    } else {
      alert("Prețul trebuie să fie un număr mai mare decât 0.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validServices = garage.services.every(
      (service) => service.name && service.price
    );

    if (!validServices) {
      alert("Toate serviciile trebuie să aibă un nume și un preț.");
      return;
    }

    const garageData = { ...garage };
    console.log("Datele garajului:", JSON.stringify(garageData, null, 2));

    try {
      const response = await addGarage(garageData);
      if (response.status === 201) {
        alert("Garage added successfully!");
        navigate("/");
      } else {
        alert("Eroare la adăugarea garajului.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Eroare la adăugarea garajului.");
    }
  };

  return (
    <FormContainer>
      <h1>Adauga Garaj</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Garage Name"
          value={garage.name}
          onChange={(e) => setGarage({ ...garage, name: e.target.value })}
        />
        {/* <Input
          type="text"
          placeholder="Image URL"
          value={garage.imageUrl}
          onChange={(e) => setGarage({ ...garage, imageUrl: e.target.value })}
        /> */}
        <Input
          type="text"
          placeholder="Location"
          value={garage.location}
          onChange={(e) => setGarage({ ...garage, location: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Schedule (HH:MM-HH:MM)"
          value={garage.schedule}
          onChange={(e) => setGarage({ ...garage, schedule: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Description"
          value={garage.description}
          onChange={(e) =>
            setGarage({ ...garage, description: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="Contact"
          value={garage.contact}
          onChange={(e) => setGarage({ ...garage, contact: e.target.value })}
        />
        <h3>Services</h3>
        <Input
          type="text"
          placeholder="Service Name"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Price"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
        />
        <Button type="button" onClick={addService}>
          Add Service
        </Button>
        <ServiceList>
          {garage.services.map((s, index) => (
            <ServiceItem key={index}>
              {s.name} - {s.price} Lei
            </ServiceItem>
          ))}
        </ServiceList>
        <Button type="submit">Submit Garage</Button>
      </form>
    </FormContainer>
  );
}

export default AddGaragePage;
