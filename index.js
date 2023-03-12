fetch(
  "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=c75f521daefa08a3f2e085dc309439b8"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.articles.forEach((article) => {
      const div = document.createElement("div");

      const h2 = document.createElement("h2");

      h2.textContent = [article.title];
      div.appendChild(h2);

      const p = document.createElement("p");
      p.textContent = article.description;
      div.appendChild(p);

      const a = document.createElement("a");
      a.href = article.url;
      a.textContent = "Read More";
      div.appendChild(a);

      const span = document.createElement("span");
      span.textContent = `Published: ${article.publishedAt}`;
      div.appendChild(span);

      document.body.appendChild(div);
    });
  });

// dont forget to add the author and  name of the pubsler ex. yahoo

// const lightModeBtn = document.querySelector("#changeModes");
// const body = document.body;

// lightModeBtn.addEventListener("click", () => {
//   body.classList.toggle("light-mode");
// });
