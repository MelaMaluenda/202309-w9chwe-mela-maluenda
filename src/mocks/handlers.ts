import { http, HttpResponse } from "msw";
import avatarsMock from "./avatarMock/avatarsMock";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${apiUrl}/aquelarre`, () => {
    return HttpResponse.json(avatarsMock);
  }),
];
