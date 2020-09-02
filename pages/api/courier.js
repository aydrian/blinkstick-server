export default (req, res) => {
  if (req.method === "POST") {
    req.context.io.emit("alert", req.body);
    res.status(200).send("ok");
  } else {
    res.satus(405).send();
  }
};
