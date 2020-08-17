import { getNerfs } from './api';
// import { Nerf } from './entities/nerf';
import { setDescription } from './descriptionComponent';
import { convertToTree } from './nerfTreeComponent';

(function init() {
  const htmlRootTree = document.getElementsByClassName('tree')[0];
  getNerfs().then((nerfs) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!nerfs.root || !nerfs.root.hasOwnProperty('name')) {
      document.getElementById('message').innerText = 'The db is empty, run `make migration`';
      return;
    }
    const spanElement = document.createElement('span');
    spanElement.innerText = nerfs.root.name;
    spanElement.addEventListener('click', setDescription(nerfs.root));
    const liElement = document.createElement('li');
    liElement.appendChild(spanElement);
    // the new Nerf is not recommended for production, i would use typescript or proptypes.
    const htmlTree = convertToTree(nerfs.root, nerfs.tree);
    liElement.append(htmlTree);
    htmlRootTree.appendChild(liElement);
  });
}());
