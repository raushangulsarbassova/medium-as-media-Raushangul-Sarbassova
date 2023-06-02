const articles = [
  {
    title: '1 CSS practical tips',
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 July",
    author: "rosie",
    topicsName: "topic",
    readTime:"12 min read",
    image:"./Img.png",
  },
  {
    title: '2 CSS practical tips',
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 July",
    author: "rosie",
    topicsName: "topic",
    readTime:"12 min read",
    image:"./Img (2).png",
  },
  {
    title: '3 CSS practical tips',
    caption:"You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    topic: "Java Script",
    date: "7 July",
    author: "rosie",
    topicsName: "topic",
    readTime:"12 min read",
    image:"./Img (3).png",
  }
]

const articleDiv = document.getElementById("articles");

articles.map((item) => {
  const html = `
  <section class = "article" style = "margin-bottom: 100px; margin-left: 152px;">
  <div class = "left">
      <div class = "info_top">
          <img class = "img_author" src = "./Img (1).png"/>
          <p class = "authors_name">${item.author}</p>
          <p class = "desc">in</p> 
          <p class = "authors_name">${item.topicsName}</p>
          <p class = "dot">·</p>
          <p class = "desc">${item.date}</p>
      </div>
      <div class = "text post">
          <p class = "article_name post-title topic" data-href="medium2.html">${item.title}</p>
          <p class = "content_article post-description"> ${item.caption}</p>
      </div>
      <div class = "info_bottom">
          <div class = "info">
              <button class = "java_script">${item.topic}</button>
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
