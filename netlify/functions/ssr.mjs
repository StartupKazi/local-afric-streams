import serverEntry from "../../dist/server/index.js";

export default async function handler(req, context) {
  // TanStack Start's server build exposes a Fetch API handler.
  // Netlify Functions v2 also uses standard Request/Response.
  return serverEntry.fetch(req, process.env, context);
}

