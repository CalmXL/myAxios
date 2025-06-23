export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

export type Params = Record<string, any>;
export type Headers = Record<string, any>;

export interface AxiosRequestConfig {
  method?: Method
  url?: string
  data?: unknown
  params?: Params
  headers?: Headers | null

  validateStatus?: (status: number) => boolean
}

export type AxiosErrorCode
  = | 'ERROR_BAD_OPTION_VALUE'
    | 'ERR_BAD_OPTION'
    | 'ECONNABORTED'
    | 'ETIMEDOUT'
    | 'ERR_NETWORK'
    | 'ERR_FR_TOO_MANY_REDIRECTS'
    | 'ERR_DEPRECATED'
    | 'ERR_BAD_RESPONSE'
    | 'ERR_BAD_REQUEST'
    | 'ERR_CANCELED'
    | 'ERR_NOT_SUPPORT'
    | 'ERR_INVALID_URL';
export interface AxiosResponse<T = any> {
  data: T
  status: number
  code?: AxiosErrorCode
  request?: XMLHttpRequest
  response?: AxiosResponse 
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: XMLHttpRequest
  response?: AxiosResponse
}

export interface Axios {
  defaults: AxiosRequestConfig
  request: <T = any>(config: AxiosRequestConfig) => AxiosPromise<T>
}

export interface AxiosInstance extends Axios {}
