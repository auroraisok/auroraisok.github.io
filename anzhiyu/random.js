var posts=["2024/06/03/《水仙》全家桶介绍/","2024/01/24/【1000-TB】Alist网盘/","2024/06/25/island剧情分析/","2024/10/05/【gal随写】樱之杜/","2024/10/08/【Unity1】Unity入门笔记/","2024/10/07/【前端学习1】Html知识总结/","2024/10/09/【前端学习2】CSS知识点总结/","2024/06/23/Narcissu小说/","2024/10/07/【前端学习零】前端介绍/","2024/10/06/【新人向】给Unity初学者的建议/","2024/10/08/【杂谈】柚子社历史/","2023/12/24/【游戏推荐，柚子社】夏空彼方/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };