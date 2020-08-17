var neo4j = require("node-neo4j");
var db = new neo4j("http://neo4j:test@neo4j:7474");
function setNerfs(nerfs) {
  //I just like to write in es6. in real life I would do it more readable
  // I didn't have enough time to make it correct, so I had to make some manipulation of data. in real life, we can use the graph's ids instead of names
  const cypherQuery =
    nerfs.reduce(
      (acc, { name, description, parentId }) =>
        acc +
        `(${name.replace("-", "")}:NERF { name: "${name.replace(
          "-",
          ""
        )}", description: "${description}", isRoot:${!parentId}}),`,
      "CREATE"
    ) +
    nerfs.reduce(
      (acc, { name, parentId, parent }) =>
        parentId || parent
          ? acc +
            `(${name.replace("-", "")})-[:PARENT]->(${parentId || parent}),`
          : acc,
      ""
    );
  db.cypherQuery(cypherQuery.substr(0, cypherQuery.length - 1), function(
    err,
    result
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log("nerfs were set");
    }
  });
}

//simple cleanup for db. in real life it should be with file system or with more specific query, it is just an example
const query = "match (n) with n limit 100 DETACH DELETE n";
db.cypherQuery(query, function(err) {
  if (err) {
    console.log("couldn't clean db");
    console.log(err);
  } else {
    console.log("db cleaned");
  }
  setNerfs(nerfs.data);
});

const nerfs = {
  data: [
    {
      name: "A",
      description: "This is a description of A",
      parentId: ""
    },
    {
      name: "B",
      description: "This is a description of B",
      parentId: "A"
    },
    {
      name: "C",
      description: "This is a description of C",
      parentId: "A"
    },
    {
      name: "D",
      description: "This is a description of D",
      parentId: "A"
    },
    {
      name: "B-1",
      description: "This is a description of B-1",
      parentId: "B"
    },
    {
      name: "B-2",
      description: "This is a description of B-2",
      parentId: "B"
    },
    {
      name: "B-3",
      description: "This is a description of B-3",
      parentId: "B"
    }
  ]
};
