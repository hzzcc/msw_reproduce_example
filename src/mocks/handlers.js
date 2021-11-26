import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
