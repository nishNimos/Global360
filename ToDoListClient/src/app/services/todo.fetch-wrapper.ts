
export async function safeFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(input, init);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('Fetch Error:', error);
    //notify user and log error
    alert('An error occured with fetch api');
    return null;
  }
}
