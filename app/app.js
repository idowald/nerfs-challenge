const express = require("express");
const app = express();

const neo4j = require("node-neo4j");
const db = new neo4j("http://neo4j:test@neo4j:7474");

app.use("/", express.static(__dirname + "/resources/dist"));

const getNerfs = function(res) {
  const tree = {};
  let root = {};
  function relax(nerfRelation) {
    if (nerfRelation[0].isRoot) {
      root = nerfRelation[0];
    }
    if (!tree[nerfRelation[1].name])
      tree[nerfRelation[0].name] = tree[nerfRelation[0].name]
        ? [...tree[nerfRelation[0].name], nerfRelation[1]]
        : [nerfRelation[1]];
  }
  db.cypherQuery(
    "MATCH (parent:NERF)-[:PARENT]-(nerfs) RETURN parent, nerfs",
    function(err, result) {
      if (err) {
        res.json({ error: "couldn't get nerfs" });
      } else {
        // I had to do some data manipulation, otherwise I would need more time to find a proper and efficient solution with Neo4J
        result.data.forEach(relax);
        res.json({ root, tree });
      }
    }
  );
};

app.get("/nerfs", function(req, res) {
  console.log("getting nerfs");
  getNerfs(res);
});

app.listen(3000, function() {
  console.log("started");
});
