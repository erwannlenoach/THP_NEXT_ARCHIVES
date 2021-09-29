fetch('https://www.francetvinfo.fr/france.rss')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });œ
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

// show instagram picture

//const showInstagramPost = (selector, URL, descriptionText) => {
//  selector.innerHTML += `
//      <div>
//          <p>${descriptionText}</p>
//          <img src='${URL}' alt='' />
//      </div>
//  `;
//
//} 
//
//selector = document.getElementsByClassName("container")
//Url = "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/1391116_1629791843949885_1224549524_a.jpg?tp=1&_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=Se9kHGXdp0gAX_oOJGw&edm=ABfd0MgAAAAA&ccb=7-4&oh=25c8b932e30cc2551cb8242e7c1955b7&oe=60A39C23&_nc_sid=7bff83"
//descriptionText= "Hello"
//showInstagramPost(selector, Url, descriptionText)
