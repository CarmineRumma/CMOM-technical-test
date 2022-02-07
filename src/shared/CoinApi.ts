// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:23.
// 
// 

import { useState, useEffect } from 'react';
import axios, { AxiosResponse, Method } from 'axios';

type Setter<T> = (data: T) => void;

/**
 * useCoinApi
 * @param method
 * @param url 
 */
export function useCoinApi<T>(
  method: Method,
  url: string
): [T | undefined, Setter<T>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    coinApi(method, url, (data_: T) => setData(data_));
  }, [method, url]);
  return [data, setData];
}

/**
 * coinApi
 * @param method 
 * @param url 
 * @param callback 
 * @param data 
 */
export function coinApi<T>(
  method: Method,
  url: string,
  callback: Setter<T>,
  data = {}
): void {
  axios({
    method: method,
    url: url,
    data,
  }).then((response: AxiosResponse<T>) => callback(response.data));
}