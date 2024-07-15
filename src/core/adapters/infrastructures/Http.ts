import {IHttp, IRequestOption} from './interfaces/iHttp';
import Axios, {AxiosInstance, AxiosResponse} from 'axios';

export class Http implements IHttp {
  axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create();
  }

  request<T>(requestOption: IRequestOption): Promise<AxiosResponse<T>> {
    return this.axios.request<T>({
      method: requestOption.method,
      url: requestOption.url,
      params: requestOption.params,
      data: requestOption.body,
      headers: requestOption.headers,
    });
  }

  isHttpError(err: any): boolean {
    return Axios.isAxiosError(err);
  }
}
