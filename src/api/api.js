const baseUrl = "https://fakestoreapi.com";

export const Api = {
  getProducts: async () => {
    const res = await fetch(`${baseUrl}/products`);
    const data = await res.text();
    return JSON.parse(data);
  },
  getUsers: async () => {
    const res = await fetch(`${baseUrl}/users`);
    const data = await res.text();
    return JSON.parse(data);
  },
};
