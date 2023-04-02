  export interface UserSchema {
    id: number;
    name: string;
    email: string;
    password:string
    phone: string;
    image: string;
    isActive: boolean;
  }
  export interface UserCreatePayload {
    name: string;
    phone: string;
    email?: string;
    image: string;
    password:string
  }