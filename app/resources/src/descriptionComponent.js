const descriptionElement = document.getElementById('description');
const descriptionBox = document.getElementById('descriptionBox');
// eslint-disable-next-line import/prefer-default-export
export function setDescription({ name, description }) {
  return () => {
    descriptionElement.innerText = `${name}: ${description}`;
    descriptionBox.style.display = 'block';
  };
}
