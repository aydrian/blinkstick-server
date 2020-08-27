// https://github.com/vercel/next.js/issues/8311#issuecomment-554726971
const { parse } = require("url");
const next = require("next");
const socketIO = require("socket.io");
const { createServer } = require("http");

const context = {
  io: null
};

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const requestListener = (req, res) => {
  const parsedUrl = parse(req.url, true);
  req.context = context;
  handle(req, res, parsedUrl);
};

app.prepare().then(() => {
  const port = parseInt(process.env.PORT || "3000", 10);

  const server = createServer(requestListener);

  context.io = socketIO(server);
  context.io.on("connection", client => {
    console.log(client.id, "connected");
    client.on("disconnect", () => {
      console.log(client.id, "disconnected");
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
