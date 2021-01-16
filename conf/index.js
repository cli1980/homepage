const output = require('mustache-cli').output
const fs = require('fs');

module.exports = function(opts){
  return {
    __root: 'layout.mustache',
    _tpl: '{{{ html }}}',
    title: "Welcome to chunlin.li",
    hero: "Chunlin Li",
    typed: "Developer, Software Architect, Writer",
    footnote: "In order to grow, to travel new roads, people needs to have a willingness to confront the unknown, to take risks and to accept the possibility that one may fail at first.",
    html: function(){
      const about = output({
        __root: 'about.mustache',
        title: function() { return fs.readFileSync('tpl/about/title.txt').toString(); },
        summary: function() { return fs.readFileSync('tpl/about/summary.txt').toString(); },
        name: 'about',
        profile_1: "The Car Show, 2016.",
        profile_2: "Half Moon Bay, 2019",
        events: [
          {
            keyword: "life in an obscure rural town",
            year: "1980 - 1997",
            city: "Datong, Shanxi, China",
            event: function() { return fs.readFileSync('tpl/about/event-1.txt').toString(); }
          },
          {
            keyword: "city burried in the histories",
            year: "1997 - 2004",
            city: "Xi'an, China",
            event: function() { return fs.readFileSync('tpl/about/event-2.txt').toString(); }
          },
          {
            keyword: "brave new world",
            year: "2004 - 2005",
            city: "Beijing, China",
            event: function() { return fs.readFileSync('tpl/about/event-3.txt').toString(); }
          },
          {
            keyword: "self-exile",
            year: "2005 - 2011",
            city: "Nanjing, China",
            event: function() { return fs.readFileSync('tpl/about/event-4.txt').toString(); }
          },
          {
            keyword: "the imperial capital",
            year: "2012 - 2015",
            city: "Beijing, China",
            event: function() { return fs.readFileSync('tpl/about/event-5.txt').toString(); }
          },
          {
            keyword: "in california",
            year: "2015 - ",
            city: "California, USA",
            event: function() { return fs.readFileSync('tpl/about/event-6.txt').toString(); }
          }
        ]
      }, opts)
      const collection = output({
        __root: 'collection.mustache',
        name: 'portfolio',
        title: function() { return fs.readFileSync('tpl/collection/title.txt').toString(); },
        pins: [
          {
            board: "art-i-cant-afford"
          },
          {
            board: "art-i-can-afford"
          }
        ],
        items: [
          {
            name: "doomsday",
            about: "世界行将陨落时",
            category: "work",
            url: "http://chunlin.li/pub/%e4%b8%96%e7%95%8c%e8%a1%8c%e5%b0%86%e9%99%a8%e8%90%bd%e6%97%b6"
          },
          {
            name: "memory",
            about: "人生不得常少年",
            category: "work",
            url: "https://read.douban.com/reader/essay/126732003/"
          },
          {
            name: "dream",
            about: "异梦集",
            category: "work",
            url: "http://chunlin.li/pub/%e5%bc%82%e6%a2%a6%e9%9b%86"
          },
          {
            name: "tenant",
            about: "房客",
            category: "work",
            url: "http://chunlin.li/pub/%e6%88%bf%e5%ae%a2"
          },
          {
            name: "kristina-tzekova",
            about: "Kristina Tzekova",
            category: "pin",
            url: "https://kristinatzekova.be/"
          },
          {
            name: "dimension",
            about: "Software design of the first Dolby consumer product",
            category: "project",
            url: ""
          }
        ]
      }, opts)
      return about + collection
    }
  }
}