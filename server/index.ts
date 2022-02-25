import next from "next";
import express from "express";
import path from "path";
import routes from "./routes";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  app.setAssetPrefix(process.env.STATIC_PATH || "");
  server.use(express.static(path.join(__dirname, "../public/static")));
  server.all("*", (req, res) => handler(req, res));
  server.listen(port);
  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
    }`
  );
});