export default (req, res) => {
  if (req.method === "GET") {
    const { hex } = req.query;
    req.context.io.emit("color", { hex });
    res.status(200).send("ok");
  } else {
    res.satus(501).send();
  }
};
