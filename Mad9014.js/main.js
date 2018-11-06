document.addEventListener("DOMContentLoaded", init);

function init() {

    document.getElementById("btnSend").addEventListener("click", getData);

    document.getElementById("btnBack").addEventListener("click", function () {
     document.querySelector("#home").classList.toggle("hidden");
     document.querySelector("#list").classList.toggle("hidden");
    });

}


function getData() {

    document.querySelector("#home").classList.toggle("hidden");
    document.querySelector("#list").classList.toggle("hidden");

    let url = "https://davidst.edumedia.ca/mad9014/nums.php";

    let formdata = new FormData();

    formdata.append("digits", document.getElementById("digits").value);

    formdata.append("max", document.getElementById("max").value);


    let request = new Request(url, {
        mode: "cors",
        method: "POST",
        body: formdata
    });


    fetch(request)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            if (data.code == 0) {
                let ul = document.querySelector(".num_list");
                ul.innerHTML = "";
                for (let item in data.numbers) {
                    let li = document.createElement("li");
                    li.innerHTML = data.numbers[item];
                    ul.appendChild(li);
                }
            }
        })


        .catch(function (error) {
            alert(error);
        });

}
