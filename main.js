let container = document.querySelector(".container");

function contents() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        let content = document.createElement("div");
        content.classList.add("content");

        let title = document.createElement("h2");
        title.classList.add("title");
        let titleText = document.createTextNode(post.title);
        title.appendChild(titleText);

        let body = document.createElement("p");
        body.classList.add("body");
        let bodyText = document.createTextNode(post.body);
        body.appendChild(bodyText);

        content.appendChild(title);
        content.appendChild(body);

        container.appendChild(content);
      });
    });
}

contents();
