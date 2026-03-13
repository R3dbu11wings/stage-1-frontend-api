export function getItems() {
  return new Promise((resolve) => resolve([]));
}

export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      _id: Math.random().toString(36).substr(2, 9),
      url: article.url,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
      urlToImage: article.urlToImage,
      keyword: article.keyword,
    });
  });
}

export function removeArticle(id) {
  return new Promise((resolve) => resolve({ _id: id }));
}
