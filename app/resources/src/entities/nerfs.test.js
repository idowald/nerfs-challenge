import { Nerf } from "./nerf";

test("Nerf constructs the right attributes", () => {
  //note - we would use Typescript in real application, to make sure the backend and frontend align
  const name = "A";
  const description = "hello A";
  const isRoot = false;
  const parentId = "";
  let testNerf = new Nerf(name, description, isRoot, parentId);
  expect(testNerf).toEqual({ name, description, isRoot, parentId });
});

test("A data object should have root and tree of relations", () => {
  //The structure should be {root : <rootElement>, tree: {<elementName> : [<childElement>, <childElement>,...]
  // in real life we would use generated Typescript
  const name = "A";
  const description = "hello A";
  const isRoot = true;
  const parentId = "";
  let rootNerf = new Nerf(name, description, isRoot, parentId);
  let childNerf2 = new Nerf("B", "description2", false, "A");
  let childNerf3 = new Nerf("C", "description2", false, "A");
  let childNerf4 = new Nerf("D", "description2", false, "A");
  const dataTree = {root: rootNerf, tree : {[rootNerf.name] : [childNerf2,childNerf3, childNerf4]}};
  for (let nerfName in dataTree.tree){
    if (dataTree.tree.hasOwnProperty(nerfName)){
      expect(dataTree.tree[nerfName].length).toEqual(3);
    }
  }
});
