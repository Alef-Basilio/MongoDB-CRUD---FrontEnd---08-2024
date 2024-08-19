import data from "./apiData.js";

function updateData() {
    const updates = document.getElementsByClassName("update");
    for (let i = 0; i < updates.length; i++) {
        updates[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            target.parentNode.parentNode.children[1].innerHTML = data[0].description;
        });
    }
}

setInterval(updateData, 1000);