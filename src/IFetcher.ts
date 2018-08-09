import { IApi } from './IApi';

export interface IFetcher extends IApi {

  setAuthorizationHeader(token:string): IFetcher;
}