type FetchData = {
  baseUrl: string;
  signal?: AbortSignal;
  options?: Record<string, any>;
};

const BASE_URL = `${import.meta.env.VITE_URL_SERVER}`;

export const fetchData = async ({ baseUrl, signal, options }: FetchData) => {
  try {
    const response = await fetch(baseUrl, {
      ...options,
      signal,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error(`Error fetching data derivated from abort signal: ${error.message}`);
    } else {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
};

export const fetchDataPost = async ({ baseUrl, signal, options }: FetchData) => {
  try {
    const response = await fetch(baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      signal,
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error?.name === "AbortError") {
      throw new Error(`Error fetching data derivated from abort signal: ${error.message}`);
    } else {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
};

export const fetchUserById = async (userId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
