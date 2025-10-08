import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type ApiResponse<T> = T;
type ApiError = AxiosError;

const خب  = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export function useGetData<T>(
  key: string | string[],
  endpoint: string,
  config?: AxiosRequestConfig,
  options?: UseQueryOptions<ApiResponse<T>, ApiError>
) {
  return useQuery<ApiResponse<T>, ApiError>({
    queryKey: key,
    queryFn: async () => {
      const { data } = await apiClient.get(endpoint, config);
      return data;
    },
    ...options,
  });
}

export function useCreateData<T, V>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<T>, ApiError, V>
) {
  return useMutation<ApiResponse<T>, ApiError, V>({
    mutationFn: async (data) => {
      const { data: response } = await apiClient.post(endpoint, data);
      return response;
    },
    ...options,
  });
}

export function useUpdateData<T, V>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<T>, ApiError, V>
) {
  return useMutation<ApiResponse<T>, ApiError, V>({
    mutationFn: async (data) => {
      const { data: response } = await apiClient.put(endpoint, data);
      return response;
    },
    ...options,
  });
}

export function useDeleteData<T>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<T>, ApiError, string>
) {
  return useMutation<ApiResponse<T>, ApiError, string>({
    mutationFn: async (id) => {
      const { data } = await apiClient.delete(`${endpoint}/${id}`);
      return data;
    },
    ...options,
  });
}
