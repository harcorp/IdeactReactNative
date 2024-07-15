import {AxiosResponse, Method} from 'axios';

export interface IRequestOption {
  readonly method: Method;
  readonly url: string;
  readonly headers?: any;
  readonly body?: any;
  readonly params?: any;
}

export interface IHttp {
  isHttpError(err: any): boolean;
  request<T>(requestOption: IRequestOption): Promise<AxiosResponse<T>>;
}
