import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const addGarage = async (garageData) => {
  return axios.post("http://localhost:8080/garages", garageData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const fetchGarages = (filters, page = 0, size = 10) => {
  let url = `/garages/search?page=${page}&size=${size}`;

  if (filters?.location) url += `&location=${filters.location}`;
  if (filters?.service) url += `&service=${filters.service}`;
  if (filters?.rating) url += `&rating=${filters.rating}`;
  if (filters?.schedule) url += `&schedule=${filters.schedule}`;

  return api.get(url);
};
export const allGarages = () => {
  let url = `/garages`;
  return api.get(url);
};

export const fetchGarageById = (id) => api.get(`/garages/${id}`);

export const addServiceToGarage = (garageId, serviceData) => {
  return api.post(`/garages/${garageId}/services`, serviceData);
};

export const fetchReviewsByGarageId = (garageId) =>
  api.get(`/reviews/garage/${garageId}`);

export const addReview = (reviewData) => api.post("/reviews", reviewData);


