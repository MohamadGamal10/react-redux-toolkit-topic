import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products?limit=10&select=title,price,thumbnail",
        };
      },
    }),
    getProductListById: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductListQuery, useGetProductListByIdQuery } = productsApiSlice;


// Query => GET Request

// Mutation

// CRUD
// Create (Mutation), Read (Query), Update(Mutation), Delete(Mutation)