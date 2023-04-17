export interface GallerySchema {
    _id: number;
    user: string;
    title: string;
    description:string
    image: string;
    date: string;
  }
  export interface GetGalleryResponse {
    success: boolean;
    data: GallerySchema[];
  }