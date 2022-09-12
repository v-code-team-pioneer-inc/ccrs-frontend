import { BACKEND_URL } from "~/constant/values";
import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";

export const getRooms = () => {
  const { data, error } = useSWR(`${BACKEND_URL}/rooms`, fetcher);
  return { data, error };
}
