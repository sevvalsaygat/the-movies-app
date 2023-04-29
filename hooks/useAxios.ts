import axios from 'axios';

export default function useAxios() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  return instance;
}
