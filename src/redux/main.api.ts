import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IChat, IMessage } from '../models'

type CreateChatData = {
  firstName: string
  lastName: string
}

type UpdateChatData = {
  id: string
  firstName?: string
  lastName?: string
}

type MessageData = { id: string; text: string }

export const mainApi = createApi({
  reducerPath: 'main/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4444/api',
  }),
  tagTypes: ['Chat'],
  endpoints: (build) => ({
    getAllChats: build.query<IChat[], void>({
      query: () => ({
        url: '/chats',
      }),
      providesTags: () => ['Chat'],
    }),
    getChat: build.query<IChat, string>({
      query: (chatId) => ({
        url: `/chats/${chatId}`,
      }),
      providesTags: () => ['Chat'],
    }),
    createChat: build.mutation<IChat, CreateChatData>({
      query: ({ firstName, lastName }) => ({
        url: '/chats',
        method: 'POST',
        body: {
          firstName,
          lastName,
        },
      }),
      invalidatesTags: ['Chat'],
    }),
    updateChat: build.mutation<IChat, UpdateChatData>({
      query: (chatData) => {
        const { id, ...fieldsToUpdate } = chatData
        return {
          url: `/chats/${id}`,
          method: 'PUT',
          body: fieldsToUpdate,
        }
      },
      invalidatesTags: ['Chat'],
    }),
    deleteChat: build.mutation<{ message: string }, string>({
      query: (chatId) => ({
        url: `/chats/${chatId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Chat'],
    }),

    sendMessage: build.mutation<IMessage, MessageData>({
      query: ({ id, text }) => ({
        url: `/chats/${id}/messages`,
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Chat'],
    }),
  }),
})
