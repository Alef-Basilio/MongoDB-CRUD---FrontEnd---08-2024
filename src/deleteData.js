function deleteData() {
    const deletes = document.getElementsByClassName("delete");
    for (let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            target.parentNode.parentNode.remove();
        });
    }
}

setInterval(deleteData, 1000);