import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9898",
  }),
  tagTypes : ['user' , 'event'],

  // Login user Post
  
  endpoints: (builder) => ({
    userPostLogIn: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['user']
    }),

    // Regis user Post
    userPostReg: builder.mutation({
      query: (data) => ({
        url: "/registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['user']
    }),

    // get user regis data
    userGetData : builder.query({
      query: () => ({
        url: '/getRegisation',
      }),
      providesTags: ['user']
    }),
    // get user by id data
    singleStudent : builder.query({
      query: (id) => ({
        url : `/getUserById/${id}`,
      }),
      invalidatesTags : ['user']
    }),

    // delete user data
    userDelete : builder.mutation({
      query: (id) => ({
        url: `/deleteById/${id}`,
        method : 'delete'
      }),
      invalidatesTags : ['user']
    }),
    // Update user data
    updateUser : builder.mutation({
      query : (data)  => ({
        url : `/updateUser/${data._id}`,
        method : 'put',
        body : data
      }),
      invalidatesTags : ['user']
    }),



    // Event data operation

    // Event post Data 
    eventPostData : builder.mutation({
      query : (data) => ({
        url : '/event',
        method: 'post',
        body : data
      }),
      invalidatesTags :  ['event']
    }) ,
    // event all data get
    eventDataGet : builder.query({
      query: () => ({
        url : '/eventAll'
      }),
      providesTags : ['event']
    }),
    //  singeEvent data Get
    singleEventData : builder.query({
      query : (id) => ({
        url : `/singleEvent/${id}`
      }),
      invalidatesTags: ['event']
    }),

    // singleEvent delete by admin 
    eventDelete : builder.mutation({
      query :(id) => ({
        url :`/deleteEvent/${id}`,
        method : 'delete'
      }),
      invalidatesTags : ['event']
    }),

    //  create admin by admin 
    createAdmin : builder.mutation({
      query : (id) => ({
        url : `/updateUser/${id}`,
        method : 'put',
        body : {role : 'admin'}
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
  useUpdateUserMutation,
  useEventPostDataMutation,
  useEventDataGetQuery,
  useSingleEventDataQuery,
  useEventDeleteMutation,
  useCreateAdminMutation,
} = apiSlice;

export default apiSlice;
