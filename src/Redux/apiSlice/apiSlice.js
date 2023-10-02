import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9898",
  }),
  tagTypes : ['user'],

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
      })
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
      })
    }) ,
    eventDataGet : builder.query({
      query: () => ({
        url : '/eventAll'
      })
    }),
    singleEventData : builder.query({
      query : (id) => ({
        url : `/singleEvent/${id}`
      })
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
  useSingleEventDataQuery
} = apiSlice;

export default apiSlice;
