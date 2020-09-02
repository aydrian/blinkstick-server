export default (req, res) => {
  if (req.method === "GET") {
    const { hex, op } = req.query;
    req.context.io.emit("color", { hex, op });
    res.status(200).send("ok");
  } else {
    res.satus(405).send();
  }
};
