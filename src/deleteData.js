function deleteData() {
    const deleteBtns = document.getElementsByClassName("delete");

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            const id = target.parentNode.parentNode.id;

            $.ajax({
                type: "DELETE",
                url: "https://nodeback-4zha.onrender.com/" + id,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                success: function(response) {
                    target.parentNode.parentNode.remove();
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