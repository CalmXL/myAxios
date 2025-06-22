export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head'

export type Params = Record<string, any>
export type Headers = Record<string, any>

export interface AxiosRequestConfig {
  method?: Method
  url?: string
  data?: unknown
  params?: Params
  headers?: Headers | null

  validateStatus?: (status: number) => boolean
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Headers
  config: AxiosRequestConfig
  request: XMLHttpRequest
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface Axios {
  defaults: AxiosRequestConfig
  request: <T = any>(config: AxiosRequestConfig) => AxiosPromise<T>
}

export interface AxiosInstance extends Axios {}
