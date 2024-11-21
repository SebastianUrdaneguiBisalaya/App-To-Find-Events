import { fetchDataPost } from "./FetchData";

export interface FavoriteEvents {
  event_favorite_id: string;
  event_id: string;
  user_id: string;
  is_favorite: boolean;
}

export const toggleEventToFavorite = async (
  eventId: string,
  userId: string,
  signal?: AbortSignal,
): Promise<FavoriteEvents> => {
  const response = await fetchDataPost({
    baseUrl: `${import.meta.env.VITE_API_TOGGLE_EVENT_FAVORITES}`,
    signal,
    options: {
      method: "POST",
      body: JSON.stringify({ eventId, userId }),
      credentials: "include",
    },
  });
  return response;
};
