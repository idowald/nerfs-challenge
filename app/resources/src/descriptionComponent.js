const descriptionElement = document.getElementById("description");
const descriptionBox = document.getElementById("descriptionBox");
export function setDescription({ name, description }) {
    return () => {
        descriptionElement.innerText = name + ": " + description;
        descriptionBox.style.display = "block";
    };
}
