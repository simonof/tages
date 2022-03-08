fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  let mainContainer = document.getElementById("users");
  for (let i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = data[i].username;

    li.setAttribute("id", data[i].id);
    li.addEventListener("click", getPosts, false);

    const address = JSON.stringify(data[i].address);

    console.log(data[i].name, data[i].email, address);

    mainContainer.appendChild(li);
  }
}

function getPosts(event) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId${event.target.id}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
}
