// @iEwha 
// user name
const nicknames = [
  "(讲|聊|微|电|電|剪|观|说|照|野|泡|探|猎)影",
  "影(视|剪|院|探|评)",
  "剧(场|社)",
  "(迷|神|扒|侃|看|追|撩|热血|说|好)剧",
  "(撩|说|看|探)(大?)片",
  "解说",
  "剪(辑|剧|刀)",
  "(混|夜|渣|爱)剪",
  "电视[^台]*$",
  "(购物|豪|讲|二手|汽|追|看|租|估|改装|拍)车",
  "车(.*评|饰|友|俱乐部)",
  "团(建|购)",
  "(追|明)星",
  "(卖衣|赛|西)服",
  "服(务商|装|饰)",
  "(男|女|童)装",
  "(吃|清|百)货",
  "吃.*成都",
  "网红",
  "手游",
  "收徒",
  "游戏",
  "综艺",
  "工艺品",
  "打工",
  "配音",
  "培训",
  "娱乐",
  "乐园",
  "PM",
  "编程|教学",
  "公司|品牌",
  "文化传媒",
  "(卖|说|探|法拍|找)房",
  "房(产|车)",
  "机械制造",
  "健身",
  "相亲会",
  "减重|瘦了|美食",
  "求婚策划",
  "策划师",
  "穿搭",
  "(运|训练)营",
  "装修",
  "珠宝",
  "(粉丝|集)团",
  "商(贸|业)",
  "整形",
  "贸易",
  "外卖|批发",
  "直销|销售|厂家|家政|劳务",
  "测(试|一测)",
  ".+铺",
  "严选",
  "好物",
  "推荐",
  "玩具",
  "手机",
  "装(修|饰)",
  "婚嫁",
  "和平精英",
  "越野|露营",
  "汽车",
  "超跑",
  "评测",
  "(酒|探)店",
  "跳伞",
  ".+厂$",
  "美(容|业)",
  "自驾",
  "特效",
  ".+(娱|聘)",
  ".+连锁",
  "(发|脸)型",
  "蛇",
]

// user custom verify
const customVerifyNames = [
  "娱(乐|评)",
  "((?!三农).)*自媒体",
  "贸易",
  "明星",
  "观影",
  "机械制造",
  "公司",
  "维修",
  "网络科技",
  "百货",
  "影评",
  "蛋糕|甜甜圈",
  "探店|团购",
  ".+厂$",
  "军事(领域|专家)", 
]

// video description
const descNames = [
  "娱乐圈",
  "男装",
  "西瓜视频",
  "(电视|好)剧",
  "工作室",
  "女装",
  "剧场",
  "职场",
  "私密",
  "健康",
  "剪辑",
  "(清|带)货",
  "观影",
  "影视",
  "收徒",
  "游戏",
  "#.*合拍",
  "测一测",
  "智商测试",
  "撞脸",
  "(开|工厂|探)店",
  "免费测试",
  "穿搭",
  "对话",
  "截图",
  "聊天",
  "小程序",
  "搜索",
  "输入",
  "领取",
  "礼包",
  "福利",
  "婚礼",
  "越野|露营",
  "汽车保养",
  "创业",
  "室内改造",
  "盖房子",
  "行程轨迹|足迹地图",
  "#.+测试",
  "团购",
  "跳伞|教练",
  "#.*超跑",
  "#.+(聘|鞋)",
  "美(容|业)",
  "#.+挑战",
  "#(P|p|修)图",
  "#.*酒店",
  "#.*特效",
  "(租|改装|懂)车",
  "住房|租房|租赁",
  "#.*(ai|智能)",
  "#.*(找工作|好物)",
  "#.*年货节",
  "豪宅|法拍房|好房",
  "#.+样子",
  "契合度",
  "#.*教程",
  "#瘦",
  "#.*健身",
  "#.*教学",
  "结婚",
  "#.*明星",
  "颜值|打分",
  "全民|烧脑｜表情包",
  "房产",
  "时光穿梭",
  "壁纸",
  "(发|脸)型",
  "蛇",
  "萨普",
  "奥迪|宝马|玛莎拉蒂|法拉利|布加迪", 
]

// user signatures
const signatureNames = [
  "剪辑",
  "明星视频",
  "出租",
  "中介",
  "西装",
  "二手",
  "网红",
  "地产",
  "室内设计",
  "跳伞|教练",
  "团购",
  "(进口|豪|汽|追|看|改装)车",
  "投资",
  "资本",
]

// in the top of nickname 
const anchorNames = [
  "烧烤",
  "火锅",
  "测(一?)测",
  "购物",
  "团购",
  "电影",
  "食品|折扣",
  "教学",
  "游戏视频",
  "定制",
  "手机盒",
  "头像",
  "道具",
  "艺术签名",
]

// below the description

// 相关视频
const relatedVideoNames = [
  "电(视剧|影)",
  "全集",
]

// 合集
const mixNames = [
  "(电视|好)剧",
  "点击看全集"
]

// 相关阅读
const relatedReadingNames = [
  "电视剧",
  "战地2042",
]


// vs_entry
const vsEntryNames = [
  "dota",
  "游戏",
  "直播",
]



const nicknamePattern = new RegExp(nicknames.join("|"), 'mi')
const customVerify = new RegExp(customVerifyNames.join("|"), 'mi')
const descPattern = new RegExp(descNames.join("|"), 'mi')
const signaturePattern = new RegExp(signatureNames.join("|"), 'mi')
const anchorPattern = new RegExp(anchorNames.join("|"), 'mi')
const relatedVideoTitlePattern = new RegExp(relatedVideoNames.join("|"), 'mi')
const mixInfoName = new RegExp(mixNames.join("|"), 'mi')
const mixInfoDesc = descPattern
const relatedReadingTitlePattern = new RegExp(relatedReadingNames.join("|"), 'mi')
const vsEntryPattern = new RegExp(vsEntryNames.join("|"), 'mi')


const enabled_live = false; // 开启直播推荐，默认关闭

try {
  let body = $response.body.replace(/\"room_id\":(\d{2,})/g,'"room_id":"$1"');
  let obj = JSON.parse(body);
  if (obj.data) obj.data = filter_data(obj.data);
  if (obj.aweme_list) obj.aweme_list = filter_aweme_list(obj.aweme_list);
  if (obj.aweme_detail) obj.aweme_detail = filter_aweme_detail(obj.aweme_detail);
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  console.log(`douyin.js: ${e.message}, ${e.stack}`)
  $done({});
}

function is_block_content(aweme) {
  let author = aweme.author
  if (!author) {
    return false
  }

  if (author.nickname && nicknamePattern.test(author.nickname)) {
    console.log(`Nickname: ${author.nickname}`)
    return true
  }
  
  if (author.signature && signaturePattern.test(author.signature)) {
    console.log(`Signature: ${author.signature}`)
    return true
  }

  if (author.custom_verify && customVerify.test(author.custom_verify)) {
    console.log(`Custom verify: ${author.custom_verify}`)
    return true
  }
  
  if (aweme.desc && descPattern.test(aweme.desc)) {
    console.log(`Desc: ${aweme.desc}`)
    return true
  }
  
  if (aweme.anchor_info) {
    if (aweme.anchor_info.title) {
      console.log(`aweme.anchor_info.title: ${aweme.anchor_info.title}`)
    }
    if (aweme.anchor_info.title_tag) {
      console.log(`aweme.anchor_info.title_tag: ${aweme.anchor_info.title_tag}`)
    }
    
    /*if (aweme.anchor_info.extra) {
      console.log(`aweme.anchor_info.extra: ${aweme.anchor_info.extra}`)
    }*/
    
    if ((aweme.anchor_info.title && anchorPattern.test(aweme.anchor_info.title)) || (aweme.anchor_info.title_tag && anchorPattern.test(aweme.anchor_info.title_tag)) || (aweme.anchor_info.extra && anchorPattern.test(aweme.anchor_info.extra))) {
      console.log("anchor removed")
      return true
    }
  }
  
  if (aweme.mix_info && (mixInfoName.test(aweme.mix_info.mix_name) || mixInfoDesc.test(aweme.mix_info.desc))) {
    console.log(`mix_name=${aweme.mix_info.mix_name}, mix_desc=${aweme.mix_info.desc}`)
    return true
  }

  if (aweme.toutiao_reading_bar && relatedReadingTitlePattern.test(aweme.toutiao_reading_bar.title)) {
    console.log(`toutiao_reading_bar.title=${aweme.toutiao_reading_bar.title}`)
    return true
  }

  if (aweme.xigua_related_bar && relatedVideoTitlePattern.test(aweme.xigua_related_bar.title)) {
    console.log(`xigua_related_bar.title=${aweme.xigua_related_bar.title}`)
    return true
  }
  
  if (aweme.vs_entry && vsEntryPattern.test(aweme.vs_entry.title)) {
    console.log(`vs_entry.title=${aweme.vs_entry.title}`)
    return true
  }

  return false
}

function filter_data(data) {
  if (data && data.length > 0) {
    let i = data.length;
    while (i--) {
      let element = data[i].aweme;
      if (element.images) filter_images(element.images);
      if (element.video) filter_videos(element);
    }
  }
  return data;
}

function filter_aweme_list(aweme_list) {
  if (aweme_list && aweme_list.length > 0) {
    let i = aweme_list.length;
    while (i--) {
      let element = aweme_list[i];
      if (element.is_ads == true || is_block_content(element)) {
        aweme_list.splice(i, 1);
      } else if (element.images) {
        filter_images(element.images);
      } else if (element.video) {
        filter_videos(element);
      } else {
        if (!enabled_live) aweme_list.splice(i, 1);
      }
    }
  }
  return aweme_list;
}

function filter_aweme_detail(aweme_detail) {
  if (aweme_detail.images) filter_images(aweme_detail.images);
  if (aweme_detail.video) filter_videos(aweme_detail);
  return aweme_detail;
}

function filter_images(images) {
  let j = images.length;
  while (j--) {
    images[j].download_url_list = images[j].url_list;
  }
  return images;
}

function filter_videos(videos) {
  videos.status.reviewed = 1;
  videos.video_control.allow_download = true;
  videos.video_control.prevent_download_type = 0;
  delete videos.video.misc_download_addrs;
  const play_url = videos.video.play_addr;
  videos.video.download_addr = play_url;
  videos.video.download_suffix_logo_addr = play_url;
  return videos;
}
