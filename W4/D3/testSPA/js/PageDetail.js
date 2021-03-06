const PageDetail = (argument) => {
    const preparePage = () => {
      cleanedArgument = argument.replace(/\s+/g, "-");
  
  
      const fetchGame = (url, argument) => {
        let finalURL = url + argument;
  
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let { name, released, description } = response;
  
            let articleDOM = document.querySelector(".page-detail .article");
  
            articleDOM.querySelector("h1.title").innerHTML = name;
            articleDOM.querySelector("p.release-date span").innerHTML = released;
            articleDOM.querySelector("p.description").innerHTML = description;
          });
      };
  
      fetchGame("https://api.rawg.io/api/games?key=528babbc066842ebaf0b202ac5448d6e", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };