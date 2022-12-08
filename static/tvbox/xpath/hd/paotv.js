var rule = {
  title: '\u70ae\u0054\u0056',
  host: 'https://paotv.net',
  url: '/show/fyclass/page/fypage.html',
  searchUrl: '/search/**----------1---.html',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: { 'User-Agent': 'MOBILE_UA' },
  class_name: '国产&亚洲&欧美&伦理&动漫',
  class_url: '1&2&3&21&22',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.tab-list.active;.module-poster-item.module-item;.module-poster-item-title&&Text;img&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: '.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
  二级: { "title": "h1&&Text;.module-info-tag-link:eq(2)&&Text", "img": ".module-item-pic&&img&&data-original", "desc": ".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-4)&&Text;.module-info-content&&.module-info-item:eq(5)&&Text;.module-info-content&&.module-info-item:eq(3)&&.module-info-item-content&&Text;.module-info-content&&.module-info-item:eq(1)&&.module-info-item-content&&Text", "content": ".module-info-introduction-content&&Text", "tabs": ".module-tab-items-box:eq(0)&&.module-tab-item", "lists": ".module-list:eq(#id)&&.module-play-list-content a" }
}
