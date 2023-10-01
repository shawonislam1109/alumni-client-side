import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9898",
  }),
  tagTypes : ['user'],
  endpoints: (builder) => ({
    userPostLogIn: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    userPostReg: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['user']
    }),
    userGetData : builder.query({
      query: () => ({
        url: '/getRegisation',
      }),
      providesTags: ['user']
    }),
    singleStudent : builder.query({
      query: (id) => ({
        url : `/getUserById/${id}`,
      })
    }),
    userDelete : builder.mutation({
      query: (id) => ({
        url: `/deleteById/${id}`,
        method : 'delete'
      }),
      invalidatesTags : ['user']
    }),
    updateUser : builder.mutation({
      query : (data)  => ({
        url : `/updateUser/${data._id}`,
        method : 'put',
        body : data
      }),
      invalidatesTags : ['user']
    })
  }),
  
});

export const {
  useUserPostLogInMutation,
  useUserPostRegMutation,
  useUserGetDataQuery,
  useSingleStudentQuery,
  useUserDeleteMutation,
  useUpdateUserMutation
} = apiSlice;

export default apiSlice;
