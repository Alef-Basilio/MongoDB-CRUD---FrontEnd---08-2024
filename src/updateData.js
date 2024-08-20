import data from "./apiData.js";

function updateData() {
    const updates = document.getElementsByClassName("update");
    for (let i = 0; i < updates.length; i++) {
        updates[i].addEventListener("click", (e) => {
            const target = e.currentTarget;
            const getData = data;
    
            $.ajax({
                type: "PUT",
                url: "https://nodetest-ybpt.onrender.com/" + target.parentNode.parentNode.children[1].textContent,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                data: { control: "teste", name: "teste", description: getData[0].description },
                success: function(response) {
                    console.log("Record updated successfully:", response);
                },
                error: function(textStatus, errorThrown) {
                    console.error("Error:", textStatus, errorThrown);
                }
            });

            target.parentNode.parentNode.children[1].innerHTML = getData[0].description;
        });
    }
}

setInterval(updateData, 1000);