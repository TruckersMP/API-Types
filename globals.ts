interface APISuccessResponse<T> {
  error: false;
  response: T;
}

interface APIErrorResponse {
  error: true;
  descriptor: string;
}

export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;
