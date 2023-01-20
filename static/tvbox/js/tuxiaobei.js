var rule = {
  title: '兔小贝',
  host: 'https://www.tuxiaobei.com',
  url: '/list/mip-data?typeId=fyclass&page=fypage&callback=',
  detailUrl: '/play/fyid',
  searchUrl: '/search/index?key=**',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: {'User-Agent':'MOBILE_UA'},
  timeout: 5000,
  class_url: '3&25&4&2',
  class_name: '故事&英语&国学&儿歌',
  推荐: '.pic-list.list-box;.items;.text&&Text;mip-img&&src;.all&&Text;a&&href',
  double: true,
  limit: 5,
  play_parse: true,
  lazy: 'js:fetch_params.headers["user-agent"] = IOS_UA;let html=fetch(input,fetch_params);let src = jsp.pdfh(html,"body&&#videoWrap&&video-src");input=src;',
  一级: 'json:data.items;name;image;duration_string;video_id',
  二级: '*',
  搜索: '.list-con&&.items;.text&&Text;mip-img&&src;.time&&Text;a&&href',
}