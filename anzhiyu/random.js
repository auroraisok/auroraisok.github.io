var posts=["2024/12/30/2024年度总结/","2025/01/21/C盘清理指南/","2024/12/23/Joker的有限状态机/","2024/12/27/NowPaper老师的连招思路/","2025/01/03/Unity之ACT开发记录/","2024/12/12/Unity之Quaternion和Vector3的API/","2024/12/01/Unity之UI管理器/","2025/01/09/Unity之单例模式基类/","2024/12/27/Unity之伤害检测/","2024/10/28/Unity判断向量夹角和看向物体/","2024/12/15/Unity之有限状态机升级版/","2024/12/26/Unity基础连招思路（索引版）/","2024/11/01/Unity实现急停思路/","2024/11/08/Unity学习路线/","2024/11/09/Unity框架之事件中心模块/","2024/11/09/Unity框架之公共Mono模块/","2024/12/25/Unity框架之缓存池模块/","2024/11/16/Unity游戏需求记录/","2025/01/21/Unity自定义类/","2024/10/27/Unity资源分享/","2024/11/13/Unity框架之计时器/","2024/12/13/Unity踩坑记录——角色跟随相机朝向/","2024/12/11/Unity，UI之音量控制/","2025/01/17/github上传文件/","2024/06/23/Narcissu小说/","2024/06/25/island剧情分析/","2024/06/03/《水仙》全家桶介绍/","2024/01/24/【1000-TB】Alist网盘/","2025/02/18/serv00+telegram搭建无限容量网盘/","2024/11/28/【Gal引擎】Light-VN教程/","2024/10/13/【C-知识点】公共前缀问题详解——substring、any、all/","2025/01/27/【Unity框架】音效系统搭建/","2024/10/08/【Unity1】Unity入门笔记/","2025/01/28/【Unity连招思路其三】优化连招逻辑/","2025/01/28/【Unity错误记录】对象池bug解决/","2024/10/05/【gal随写】樱之杜/","2024/11/12/【Unity动作系统】急停实现思路/","2024/10/07/【前端学习零】前端介绍/","2024/10/07/【前端学习1】Html知识总结/","2024/10/09/【前端学习2】CSS知识点总结/","2024/10/06/【新人向】给Unity初学者的建议/","2024/10/08/【杂谈】柚子社历史/","2025/01/11/【怪物AI设计】敌人不规则移动/","2023/12/24/【游戏推荐，柚子社】夏空彼方/","2025/01/20/【长按短按】Unity输入系统模块/","2024/12/30/【算法笔记】汉诺塔问题/","2024/12/27/与《水仙》/","2024/11/16/伍六七——拥抱自己/","2024/10/30/すみれ——普通人的故事/","2024/11/16/学三个月Unity后的经验/","2024/10/11/情感细腻的柔情大叔——片冈智/","2024/10/30/手写Unity相机旋转脚本/","2024/11/28/新乡医学院生物医学工程专业介绍/","2024/12/12/玩巫兔有感/","2025/02/11/筱原明里——最喜欢的二次元角色/","2025/01/14/自学Unity的瓶颈/","2024/10/17/网络冲浪经验分享/","2024/10/23/记录四元数/","2024/10/10/银色——猫猫社早期作品/","2025/01/17/零成本搭建在线文档网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };