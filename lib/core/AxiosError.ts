import type { AxiosErrorCode, AxiosRequestConfig, AxiosResponse, AxiosError as IAxiosError } from '../types';

export default class AxiosError extends Error implements IAxiosError {
  isAxiosError: boolean;

  // eslint-disable-next-line max-params
  constructor(
    message: string,
    public code?: AxiosErrorCode | null,
    public config?: AxiosRequestConfig,
    public request?: XMLHttpRequest,
    public response?: AxiosResponse,
  ) {
    super(message);

    this.isAxiosError = true;
    Object.setPrototypeOf(this, AxiosError.prototype);
  }
}
