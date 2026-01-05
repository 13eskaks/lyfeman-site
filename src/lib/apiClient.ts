export type Method = 'GET' | 'POST';

export interface ApiClientOptions {
  method?: Method;
  endpoint: string;
  data?: any;
  headers?: Record<string, string>;
  authKey?: string;
  authHeaderName?: string;
}

export async function apiRawClient({
  method = 'GET',
  endpoint,
  data,
  headers = {},
  authKey,
  authHeaderName = 'Authorization',
}: ApiClientOptions): Promise<Response> {
  const finalHeaders: Record<string, string> = {
    ...(method === 'POST' ? { 'Content-Type': 'application/json' } : {}),
    ...headers,
  };

  if (authKey) {
    finalHeaders[authHeaderName] = `Bearer ${authKey}`;
  }

  const res = await fetch(endpoint, {
    method,
    headers: finalHeaders,
    ...(method === 'POST' && data ? { body: JSON.stringify(data) } : {}),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Error ${res.status}: ${errorText}`);
  }

  return res;
}

export async function apiClient<T = any>(options: ApiClientOptions): Promise<T> {
  const res = await apiRawClient(options);
  return res.json();
}
