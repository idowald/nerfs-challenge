import { getNerfs } from "./api";
import { Nerf } from "./entities/nerf";
import { setDescription } from "./descriptionComponent";
import { convertToTree } from "./nerfTreeComponent";

(function() {
  const htmlRootTree = document.getElementsByClassName("tree")[0];
  getNerfs().then(nerfs => {
    const spanElement = document.createElement("span");
    spanElement.innerText = nerfs.root.name;
    spanElement.addEventListener("click", setDescription(nerfs.root));
    const liElement = document.createElement("li");
    liElement.appendChild(spanElement);
    // the new Nerf is not recommended for production, i would use typescript or proptypes. this is just an example
    const htmlTree = convertToTree(new Nerf(nerfs.root), nerfs.tree);
    liElement.append(htmlTree);
    htmlRootTree.appendChild(liElement);
  });
})();