/**
 * just an example of how to use objects, in real application we'll use typescript
 */
// eslint-disable-next-line import/prefer-default-export
export class Nerf {
  constructor(name, description, isRoot, parentId) {
    this.name = name;
    this.description = description;
    this.isRoot = isRoot;
    this.parentId = parentId;
  }
}
