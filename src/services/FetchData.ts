type FetchData = {
  baseUrl: string;
  signal?: AbortSignal;
};

export const fetchData = async ({ baseUrl, signal }: FetchData) => {
  console.log(baseUrl, "Base url");
  try {
    const response = await fetch(baseUrl, {
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
