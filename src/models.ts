export interface IChat {
  _id: string
  firstName: string
  lastName: string
  messages: IMessage[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface IMessage {
  content: string
  sender: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}
