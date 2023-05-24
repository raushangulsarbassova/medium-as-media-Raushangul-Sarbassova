let articles = [];

function submitArticle() {
    const authorName = document.getElementById("authorName").value;
    const articleDate = document.getElementById("articleDate").value;
    const articleTitle = document.getElementById("articleTitle").value;
    const articleHeader = document.getElementById("articleHeader").value;
    const articleSubheader = document.getElementById("articleSubheader").value;
    const articleContent = document.getElementById("articleContent").value;
  
    const article = {
      authorName: authorName,
      articleDate: articleDate,
      articleTitle: articleTitle,
      articleHeader: articleHeader,
      articleSubheader: articleSubheader,
      articleContent: articleContent,
      index: articles.length
    };
  
    articles.push(article);
  
    sessionStorage.setItem("articles", JSON.stringify(articles));
  
    document.getElementById("authorName").value = "";
    document.getElementById("articleDate").value = "";
    document.getElementById("articleTitle").value = "";
    document.getElementById("articleHeader").value = "";
    document.getElementById("articleSubheader").value = "";
    document.getElementById("articleContent").value = "";
  
    updateArticleList();
  }

function updateArticleList() {
  const articleList = document.getElementById("articles");
  articleList.innerHTML = "";

  const storedArticles = JSON.parse(sessionStorage.getItem("articles"));

  if (storedArticles) {
    articles = storedArticles;

    articles.forEach((article, index) => {
      const listItem = document.createElement("li");
      listItem.className = "article";
      listItem.setAttribute("data-index", index);
      listItem.addEventListener("click", openArticle);

      const articleContentDiv = document.createElement("div");
      articleContentDiv.className = "article-content";

      const leftDiv = document.createElement("div");
      leftDiv.className = "left";

      const infoTop = document.createElement("div");
      infoTop.className = "info-top";
      const authorIcon = document.createElement("img");
      authorIcon.className = "icon_author";
      authorIcon.src = "./Iconimg.png";
      const authorName = document.createElement("span");
      authorName.className = "author-name";
      authorName.textContent = article.authorName;
      const dot1 = document.createElement("span");
      dot1.className = "dot";
      dot1.textContent = "in";
      const topicsName = document.createElement("span");
      topicsName.className = "topics-name";
      topicsName.textContent = "Topics name";
      const dot2 = document.createElement("span");
      dot2.className = "dot2";
      dot2.textContent = "·";
      const articleDate = document.createElement("span");
      articleDate.className = "date";
      articleDate.textContent = formatDate(article.articleDate);

      infoTop.appendChild(authorIcon);
      infoTop.appendChild(authorName);
      infoTop.appendChild(dot1);
      infoTop.appendChild(topicsName);
      infoTop.appendChild(dot2);
      infoTop.appendChild(articleDate);

      const articleTitle = document.createElement("h1");
      articleTitle.className = "article-title";
      articleTitle.textContent = article.articleTitle;

      const shortDescription = document.createElement("p");
      shortDescription.className = "short-description";
      shortDescription.textContent = article.articleContent.substring(0, 100) + "...";

      leftDiv.appendChild(infoTop);
      leftDiv.appendChild(articleTitle);
      leftDiv.appendChild(shortDescription);

      const footerDiv = document.createElement("div");
      footerDiv.className = "footer";

      const infoDiv = document.createElement("div");
      infoDiv.className = "info";
      const javascriptButton = document.createElement("button");
      javascriptButton.className = "java_script";
      javascriptButton.textContent = "JavaScript";
      const desc1 = document.createElement("p");
      desc1.className = "desc";
      desc1.textContent = "12 min read";
      const desc2 = document.createElement("p");
      desc2.className = "desc";
      desc2.textContent = "·";
      const desc3 = document.createElement("p");
      desc3.className = "desc";
      desc3.textContent = "Selected for you";

      infoDiv.appendChild(javascriptButton);
      infoDiv.appendChild(desc1);
      infoDiv.appendChild(desc2);
      infoDiv.appendChild(desc3);

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "actions";
      const icon1 = document.createElement("img");
      icon1.className = "icons";
      icon1.src = "./Icon.png";
      const icon2 = document.createElement("img");
      icon2.className = "icons";
      icon2.src = "./Icon.png";
      const icon3 = document.createElement("img"); 
      icon3.className = "icons";
      icon3.src = "./Icon.png";

      actionsDiv.appendChild(icon1);
      actionsDiv.appendChild(icon2);
      actionsDiv.appendChild(icon3);

      footerDiv.appendChild(infoDiv);
      footerDiv.appendChild(actionsDiv);

      articleContentDiv.appendChild(leftDiv);
      const rightDiv = document.createElement("div");
      rightDiv.className = "right";

      const image = document.createElement("img");
      image.className = "img";
      image.src = `./Img${parseInt(index) + 1}.png`;
      rightDiv.appendChild(image);
      articleContentDiv.appendChild(rightDiv);
      articleContentDiv.appendChild(footerDiv);
      const hrLine = document.createElement("hr");
      hrLine.style.marginTop = "20px";
      articleContentDiv.appendChild(hrLine);


      listItem.appendChild(articleContentDiv);
      articleList.appendChild(listItem);
    });

  }
}

function openArticle(event) {
    const listItem = event.currentTarget;
    const index = listItem.getAttribute("data-index");
    const article = articles[index];
  
    sessionStorage.setItem("currentArticle", JSON.stringify(article));
  
    const imageIndex = parseInt(index) + 1;
  
    sessionStorage.setItem("currentImageIndex", imageIndex);
  
    window.location.href = "article.html";
  }
  
  

function goBack() {
  window.location.href = "index.html";
}

if (window.location.pathname.includes("article.html")) {
    const currentArticle = JSON.parse(sessionStorage.getItem("currentArticle"));
  
    if (currentArticle) {
      const authorName = document.getElementById("authorName");
      const articleDate = document.getElementById("articleDate");
      const fullArticleTitle = document.getElementById("fullArticleTitle");
      const fullArticleHeader = document.getElementById("fullArticleHeader");
      const articleImage = document.getElementById("articleImage");
      const fullArticleSubheader = document.getElementById("fullArticleSubheader");
      const fullArticleContent = document.getElementById("fullArticleContent");
  
      authorName.textContent = currentArticle.authorName;
      articleDate.textContent = formatDate(currentArticle.articleDate);
      fullArticleTitle.textContent = currentArticle.articleTitle;
      fullArticleContent.textContent = currentArticle.articleContent;
  
      if (currentArticle.articleHeader && currentArticle.articleSubheader) {
        fullArticleHeader.textContent = currentArticle.articleHeader;
        fullArticleSubheader.textContent = currentArticle.articleSubheader;
      } else {
        fullArticleHeader.style.display = "none";
        fullArticleSubheader.style.display = "none";
      }
  
      const currentImageIndex = sessionStorage.getItem("currentImageIndex");
      if (currentImageIndex) {
        articleImage.src = `./Img${currentImageIndex}.png`;
      }
    }
  } else {
    updateArticleList();
  }
  
  function formatDate(dateString) {
    const options = { day: "numeric", month: "long" };
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString(undefined, { month: "long" });
    return `${day} ${month}`;
  }
