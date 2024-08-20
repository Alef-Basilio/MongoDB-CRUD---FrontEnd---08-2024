function sendData() {
    const dataShow = document.createElement("div");
    const div = document.createElement("div");
    const updateBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");

    dataShow.setAttribute("class", "dataShow");
    div.setAttribute("class", "buttons");
    updateBtn.setAttribute("class", "update");
    deleteBtn.setAttribute("class", "delete");
    span.setAttribute("class", "getText");

    updateBtn.innerHTML = "U";
    deleteBtn.innerHTML = "D";
    span.innerHTML = document.getElementById("input").value;

    div.appendChild(updateBtn);
    div.appendChild(deleteBtn);
    dataShow.appendChild(div);
    dataShow.appendChild(span);

    document.getElementById("allData").appendChild(dataShow);

    $.ajax({
        type: "POST",
        url: "https://nodetest-ybpt.onrender.com/",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        data: JSON.stringify({ control: "teste", name: "teste", description: document.getElementById("input").value }),
        success: () => {
            document.getElementById("input").value = "";
            window.alert("Data sent successfully");
        },
        error: function(textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
            window.alert("Error sending data");
        }
    });
}

document.getElementById("send").addEventListener("click", () => {
    sendData();
});

document.body.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        sendData();
    }
});