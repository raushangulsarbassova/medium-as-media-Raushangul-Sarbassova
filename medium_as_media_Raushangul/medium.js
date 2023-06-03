const apiKey = 'sI5EQ0VjSfKgqWMQACyp4FO7Uuipkpng';
const getTopStories = async () => {
  const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`);
  if(!response.ok && response.status==='404'){
    console.log('запрос составлен неправильно!')
  }
  const articles = await response.json();
  console.log(articles);
  const articleDiv = document.getElementById("articles");

articles.results.map((item) => {
  const html = `
  <section class = "article" style = "margin-bottom: 100px; margin-left: 152px;">
  <div class = "left">
      <div class = "info_top">
          <img class = "img_author" src = "./Img (1).png"/>
          <p class = "authors_name">${item.byline}</p>
          <p class = "desc">in</p> 
          <p class = "authors_name">${item.section}</p>
          <p class = "dot">·</p>
          <p class = "desc">${item.published_date}</p>
      </div>
      <div class = "text post">
          <p class = "article_name post-title topic" data-href="medium2.html">${item.title}</p>
          <p class = "content_article post-description"> ${item.abstract}</p>
      </div>
      <div class = "info_bottom">
          <div class = "info">
              <button class = "java_script">${item.subsection}</button>
              <p class = "desc">${item.readTime}</p>
              <p class = "desc">·</p>
              <p class = "desc">Selected for you</p>
      </div>
      <div class = "actions">
          <img class = "icons" src = "./Icon.png"/>
          <img class = "icons" src = "./Icon.png"/>
          <img class = "icons" src = "./Icon.png"/>
      </div>
      </div>
  </div>
  <div class = "right">
      <img class = "img" src = "${item.image}"/> 
  </div>
  </section>`;
  articleDiv.innerHTML += html;
});
}
getTopStories();
