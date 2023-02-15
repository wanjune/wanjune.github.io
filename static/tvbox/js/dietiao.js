var rule = {
  title: '碟调',
  desc: 'http://www.618648.com',
  host: 'http://wap.618648.com',
  url: '/dietiaoshow/fyclass/by/time/page/fypage.html',
  searchUrl: '/diediaoch/page/1/wd/**.html',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: { 'User-Agent': 'MOBILE_UA' },
  class_name: '动画&综艺&剧集&+国产&+韩国&+日本&+美国&电影',
  class_url: '4&3&2&2/area/大陆&2/area/韩国&2/area/日本&2/area/美国&1',
  play_parse: true,
  lazy: '',
  limit: 8,
  推荐: '.stui-vodlist.clearfix;.stui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.stui-vodlist.clearfix li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: { "title": "h1.title&&Text;.stui-content__detail p:eq(2)&&Text", "img": ".lazyload&&data-original", "desc": ".video-info-items:eq(-2)&&Text;.video-info-items:eq(-1)&&Text;.video-info-items:eq(-2)&&Text;.stui-content__detail p:eq(7)&&Text;.stui-content__detail p:eq(6)&&Text", "content": ".stui-content__detail p:eq(9)&&Text", "tabs": ".nav.nav-tabs li", "lists": ".tab-pane.fade:eq(#id)&&ul&&li" },
  搜索: '.stui-vodlist.clearfix li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
}
