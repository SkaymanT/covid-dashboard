interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function getGame<T>(): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch('static/info.json');

  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
