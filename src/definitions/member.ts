export interface MemberSchema {
    _id: number;
    name: string;
    image: string;
    you_tube?:string
  }
  export interface GetMemberResponse {
    success: boolean;
    data: MemberSchema[];
  }