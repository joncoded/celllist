const config = {
  "caption" : "Taiwan's largest cities and populations", 
  "dataSource" : {
    "title" : "List of cities and towns in Taiwan by population",
    "url" : "https://en.wikipedia.org/wiki/List_of_cities_in_Taiwan"
  },
  "defaultSortField" : "Population",
  "defaultSortOrder" : "desc"
}

/* 
You can name your columns whatever you want...
...and have as many columns as you wish... 
...but not too many or it could look too overwhelming! :)
...you could also use fetch and get the data from an API 
*/

const items = [
  { 'City' : 'New Taipei', 
    'Chinese' : '新北',
    'Pinyin' : 'Xīnběi',
    'Founded' : '2010-12-25',
    'Population': 3974911
  }, 
  { 'City' : 'Taichung', 
    'Chinese' : '臺中',
    'Pinyin' : 'Táizhōng',
    'Founded' : '2010-12-25',
    'Population': 2759887
  },
  { 'City' : 'Taipei', 
    'Chinese' : '臺北',
    'Pinyin' : 'Táiběi',
    'Founded' : '1967-07-01',
    'Population': 2696316
  },
  { 'City' : 'Taoyuan', 
    'Chinese' : '桃園',
    'Pinyin' : 'Táoyuán',
    'Founded' : '2014-12-25',
    'Population': 2136702 
  },
  { 'City' : 'Tainan', 
    'Chinese' : '臺南',
    'Pinyin' : 'Táinán',
    'Founded' : '2010-12-25',
    'Population': 1885499
  },
  { 'City' : 'Kaohsiung', 
    'Chinese' : '高雄',
    'Pinyin' : 'Gāoxióng',
    'Founded' : '1979-07-01',
    'Population': 1402914 
  },
  { 'City' : 'Hsinchu', 
    'Chinese' : '新竹',
    'Pinyin' : 'Xīnzhú',
    'Founded' : '1982-07-01',
    'Population': 436220
  },
  { 'City' : 'Keelung', 
    'Chinese' : '基隆',
    'Pinyin' : 'Jīlóng',
    'Founded' : '1945-10-25',
    'Population': 372019
  },
  { 'City' : 'Chiayi', 
    'Chinese' : '嘉義',
    'Pinyin' : 'Jiāyì',
    'Founded' : '1982-07-01',
    'Population': 269890
  },
  { 'City' : 'Chianghua', 
    'Chinese' : '彰化',
    'Pinyin' : 'Zhānghuà',
    'Founded' : '1951-12-01',
    'Population': 234721
  }
];

export { config, items };