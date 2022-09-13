import { BACKEND_URL } from "~/constant/values";
import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";

export const getRooms = ( dateStr ) => {
  let query = "?";
  if (dateStr) {
    query = `${query}date=${dateStr}&`;
  }

  const { data, error } = useSWR(`${BACKEND_URL}/rooms${query}`, fetcher);
  return { data, error };
};
