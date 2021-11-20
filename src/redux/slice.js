import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://619826b0164fa60017c22f8a.mockapi.io/' }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name: contact.name,
          phone: contact.phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } =
  contactsApi;
