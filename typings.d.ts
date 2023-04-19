
export interface Message {
  _id: string
  _createdAt: string
  _rev: string
  type: string
  _updatedAt: string
  approved: boolean
  message: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
}

export interface ContactForm {
  _id: string
  _createdAt: string
  _rev: string
  type: string
  _updatedAt: string
  approved: boolean
  message: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
} {
  _id: string
  _createdAt: string
  _rev: string
  type: string
  _updatedAt: string
  approved: boolean
  message: string
  email: string
  name: string
  post: {
    _ref: string
    _type: string
  }
}
declare module 'react-image-gallery'