import {setDescription} from "./descriptionComponent";

/**
 * Take a node A, an array of it's nodes [{name:B, description..}]}
 * example for the tree structure can be found in https://www.cssscript.com/clean-tree-diagram/
 * return the structure of html nodes
 * @param node
 * @param relations
 */
export function convertToTree(node, relations) {
    const childrenElements = document.createElement("ul");
    if (relations[node.name]) {
        relations[node.name].forEach(child => {
            const childElement = document.createElement("li");
            const childSpanElement = document.createElement("span");
            childSpanElement.addEventListener("click", setDescription(child));
            childSpanElement.innerText = child.name;
            childElement.append(childSpanElement);
            const subTree = convertToTree(child, relations);
            if (subTree) {
                childElement.appendChild(subTree);
            }
            childrenElements.appendChild(childElement);
        });
        return childrenElements;
    }
    return null;
}
