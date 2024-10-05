var posts=["2024/06/25/island剧情分析/","2024/10/05/【gal随写】樱之杜/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };