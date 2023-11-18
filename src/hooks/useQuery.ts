/**
 * this hook for using fetch requests get
 * *** usage
 * useQuery({
 *   queryKey: get-todos,
 *   queryFn: apiRequest,
 *   options,
   })
*/

import {
  useQuery as useReactQuery,
  QueryKey,
  QueryFunction,
  QueryOptions,
} from "@tanstack/react-query";
import { useEffect } from "react";

import { toast, ToastOptions } from "react-toastify";
import { useAppSelector } from ".";

type UseQueryOptions = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  options: QueryOptions;
};

export default function useQuery({
  queryKey,
  queryFn,
  options,
}: UseQueryOptions) {
  const { theme } = useAppSelector((state) => state.global);

  const themeIsLight = theme === "light" ? "light" : "dark";

  const toastOptions: ToastOptions = {
    position: toast.POSITION.BOTTOM_LEFT,
    theme: themeIsLight,
  };

  const query = useReactQuery({
    queryKey,
    queryFn,
    ...options,
  });

  useEffect(() => {
    if (query.error) {
      console.log("useQuery custom hook query error", query.error);

      if (query.error.message) {
        toast.error(query.error.message, toastOptions);
      }
    }
  }, [query.error]);

  return query;
}
