const config = {
  "caption" : "Russia's largest cities and populations", 
  "dataSource" : {
    "title" : "List of cities and towns in Russia by population",
    "url" : "https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Russia_by_population"
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
  { 'City' : 'Moscow', 
    'Russian' : 'Москва',
    'District' : 'Central',
    'Population': 12480481 
  }, 
  { 'City' : 'Saint Petersburg', 
    'Russian' : 'Санкт-Петербург',
    'District' : 'Northwest',
    'Population': 5398064 
  },
  { 'City' : 'Novosibirsk', 
    'Russian' : 'Новосибирск',
    'District' : 'Siberia',
    'Population': 1625631 
  },
  { 'City' : 'Yekaterinburg', 
    'Russian' : 'Екатеринбург',
    'District' : 'Ural',
    'Population': 1493749 
  },
  { 'City' : 'Kazan', 
    'Russian' : 'Казань',
    'District' : 'Volga',
    'Population': 1257391 
  },
  { 'City' : 'Nizhny Novgorod', 
    'Russian' : 'Нижний Новгород',
    'District' : 'Volga',
    'Population': 1252236 
  },
  { 'City' : 'Chelyabinsk', 
    'Russian' : 'Челябинск',
    'District' : 'Ural',
    'Population': 1196680 
  },
  { 'City' : 'Samara', 
    'Russian' : 'Самара',
    'District' : 'Volga',
    'Population': 1156659 
  },
  { 'City' : 'Omsk', 
    'Russian' : 'Омск',
    'District' : 'Siberia',
    'Population': 1154507 
  },
  { 'City' : 'Rostov-on-Don', 
    'Russian' : 'Ростов-на-Дону',
    'District' : 'South',
    'Population': 1137904 
  }
];

export { config, items };