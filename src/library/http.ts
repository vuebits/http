import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosInterceptorManager } from 'axios';

export class Http {
  private http: AxiosInstance;
  public interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };

  public constructor (config: AxiosRequestConfig) {
    this.http = axios.create(config);
    this.interceptors = this.http.interceptors;
  }

  public setBaseURL (baseURL: string): void {
    this.http.defaults.baseURL = baseURL;
  }

  public getUri (config?: AxiosRequestConfig): string {
    return this.http.getUri(config);
  }

  public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get(url, config);
  }

  public delete<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.head(url, config);
  }

  public post<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post(url, data, config);
  }

  public put<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>> (url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.http.patch(url, data, config);
  }
}
