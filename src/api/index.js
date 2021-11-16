import API from "./server/http";

export function getProducts() {
  return API.get("/food/random_food?size=30");
}
