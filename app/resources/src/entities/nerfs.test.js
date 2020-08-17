import { Nerf } from './nerf';

// eslint-disable-next-line no-undef
test('Nerf constructs the right attributes', () => {
  // note - we would use Typescript in real application, to make sure the backend and frontend align
  const name = 'A';
  const description = 'hello A';
  const isRoot = false;
  const parentId = '';
  const testNerf = new Nerf(name, description, isRoot, parentId);
  // eslint-disable-next-line no-undef
  expect(testNerf).toEqual({
    name, description, isRoot, parentId,
  });
});

// eslint-disable-next-line no-undef
test('A data object should have root and tree of relations', () => {
  // The structure should be {root : <rootElement>,
  // tree: {<elementName> : [<childElement>, <childElement>,...]
  // in real life we would use generated Typescript
  const name = 'A';
  const description = 'hello A';
  const isRoot = true;
  const parentId = '';
  const rootNerf = new Nerf(name, description, isRoot, parentId);
  const childNerf2 = new Nerf('B', 'description2', false, 'A');
  const childNerf3 = new Nerf('C', 'description2', false, 'A');
  const childNerf4 = new Nerf('D', 'description2', false, 'A');
  // eslint-disable-next-line max-len
  const dataTree = { root: rootNerf, tree: { [rootNerf.name]: [childNerf2, childNerf3, childNerf4] } };
  // eslint-disable-next-line no-restricted-syntax
  for (const nerfName in dataTree.tree) {
    // eslint-disable-next-line no-prototype-builtins
    if (dataTree.tree.hasOwnProperty(nerfName)) {
      // eslint-disable-next-line no-undef
      expect(dataTree.tree[nerfName].length).toEqual(3);
    }
  }
});
