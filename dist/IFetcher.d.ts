import { IApi } from './IApi';
export interface IFetcher extends IApi {
    getApiUrl(): string;
    getBaseUrl(): string;
    setApiUrl(apiUrl: string): IFetcher;
    setBaseUrl(baseUrl: string): IFetcher;
    setAuthorizationHeader(token: string): IFetcher;
}
