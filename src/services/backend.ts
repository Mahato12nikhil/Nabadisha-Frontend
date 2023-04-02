import {baseURL, urls} from '../utils/urls';
import RestService from './rest';
import { UserCreatePayload } from '../definitions/user';


export const serviceClient = new RestService({baseURL: baseURL});
const getClient = () => serviceClient.client;

export const CreateUser = (payload: UserCreatePayload) => {
    return getClient().post(urls.create_user, payload);
  };