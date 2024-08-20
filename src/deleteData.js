function deleteData() {
    const deletes = document.getElementsByClassName("delete");
    var description = "";
    for (let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            description = target.parentNode.parentNode.children[1].textContent;
            target.parentNode.parentNode.remove();

            $.ajax({
                type: "DELETE",
                url: "https://nodetest-ybpt.onrender.com/" + description,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                success: function(response) {
                    console.log("Record deleted successfully:", response);
                },
                error: function(textStatus, errorThrown) {
                    console.error("Error:", textStatus, errorThrown);
                }
            });
        });
    }
}

setInterval(deleteData, 1000);