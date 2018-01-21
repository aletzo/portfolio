const currentYear = new Date().getFullYear();

document.querySelector('#currentYear').innerHTML = new Date().getFullYear();

let html = '<div class="line half"></div>';

for (var i = currentYear; i >= 2008; i--) {
    const id = 'year' + i;

    html += '<div class="year" id="' + id + '">'
          + '<div class="date">' + i + '</div>'
          + '<div class="techs left"></div>'
          + '<div class="techs right"></div>'
          + '</div>';

    if (i != 2008) {
        html += '<div class="line"></div>';
    }
}

html += '<div class="line half"></div>';

document.querySelector('#timeline').innerHTML = html;

const experience = [

    { name: 'Android',        from: '2011|9',  to: '2012|3',  position: 'right' },
    { name: 'Apache 2',       from: '2008|1',  to: '2017|1',  position: 'left'  },
    { name: 'Angular 1',      from: '2013|5',  to: '2016|8',  position: 'right' },
    { name: 'Angular 2',      from: '2016|5',  to: '2017|1',  position: 'right' },
    { name: 'AWS',            from: '2011|9',  to: '2012|3',  position: 'right' },
    { name: 'Bootstrap',      from: '2011|5',  to: '2017|1',  position: 'left'  },
    { name: 'CSS',            from: '2008|1',  to: '2017|1',  position: 'right' },
    { name: 'CodeIgniter',    from: '2010|3',  to: '2010|7',  position: 'left'  },
    { name: 'Drupal',         from: '2010|3',  to: '2010|7',  position: 'left'  },
    { name: 'Ext JS',         from: '2009|8',  to: '2015|8',  position: 'right' },
    { name: 'Firebase',       from: '2015|2',  to: '2015|5',  position: 'left'  },
    { name: 'Git',            from: '2010|8',  to: '2017|1',  position: 'right' },
    { name: 'Heroku',         from: '2015|1',  to: '2015|3',  position: 'right' },
    { name: 'HTML',           from: '2008|1',  to: '2017|1',  position: 'right' },
    { name: 'JavaScript',     from: '2008|1',  to: '2017|1',  position: 'right' },
    { name: 'Ionic 1',        from: '2015|8',  to: '2015|5',  position: 'right' },
    { name: 'Ionic 2',        from: '2016|7',  to: '2016|9',  position: 'right' },
    { name: 'JIRA',           from: '2013|2',  to: '2016|9',  position: 'right' },
    { name: 'jQuery',         from: '2008|10', to: '2016|5',  position: 'right' },
    { name: 'Laravel',        from: '2017|12', to: '2018|1',  position: 'left'  },
    { name: 'Linux',          from: '2008|1',  to: '2010|2',  position: 'left'  },
    { name: 'Mac OS X',       from: '2009|5',  to: '2017|1',  position: 'left'  },
    { name: 'Meteor',         from: '2014|1',  to: '2017|1',  position: 'left'  },
    { name: 'Mongo DB',       from: '2014|1',  to: '2017|1',  position: 'left'  },
    { name: 'MySQL',          from: '2008|1',  to: '2017|1',  position: 'left'  },
    { name: 'NGINX',          from: '2011|8',  to: '2013|2',  position: 'left'  },
    { name: 'Node.js',        from: '2014|1',  to: '2017|1',  position: 'left'  },
    { name: 'PHP',            from: '2008|1',  to: '2017|1',  position: 'left'  },
    { name: 'Postgres',       from: '2017|1',  to: '2017|3',  position: 'left'  },
    { name: 'React',          from: '2017|1',  to: '2017|1',  position: 'right' },
    { name: 'Redis',          from: '2013|7',  to: '2013|9',  position: 'left'  },
    { name: 'Silex',          from: '2016|5',  to: '2016|9',  position: 'left'  },
    { name: 'SQLite',         from: '2010|1',  to: '2012|2',  position: 'left'  },
    { name: 'SVN',            from: '2008|10', to: '2016|9',  position: 'left'  },
    { name: 'Symfony 1',      from: '2010|6',  to: '2013|6',  position: 'left'  },
    { name: 'Symfony 2',      from: '2013|3',  to: '2014|8',  position: 'left'  },
    { name: 'Trello',         from: '2012|9',  to: '2017|1',  position: 'right' },
    { name: 'VBA',            from: '2014|5',  to: '2015|1',  position: 'right' },
    { name: 'Vim',            from: '2011|7',  to: '2017|1',  position: 'right' },
    { name: 'Vue.js',         from: '2017|12', to: '2018|12', position: 'right' },
    { name: 'Wordpress',      from: '2010|3',  to: '2010|7',  position: 'left'  },
    { name: 'Yii 1',          from: '2011|1',  to: '2012|4',  position: 'left'  },
    { name: 'Yii 2',          from: '2015|3',  to: '2016|5',  position: 'left'  },
    { name: 'Zend Framework', from: '2008|9',  to: '2011|4',  position: 'left'  },

];

let years = {};

experience.forEach(function(t) {

    const [year, month] = t.from.split('|');

    const id = '#year' + year;

    if (year in years) {
        if (month in years[year]) {
            if (t.position in years[year][month]) {
                years[year][month][t.position]++;
            } else {
                years[year][month][t.position] = 0;
            }
        } else {
            years[year][month] = {};
            years[year][month][t.position] = 0;
        }
    } else {
        years[year] = {};
        years[year][month] = {};
        years[year][month][t.position] = 0;
    }

    const colorIndex = Math.floor(Math.random() * 16) + 1;

    const index = years[year][month][t.position];

    const selector = id + ' .techs.' + t.position;

    const techs = document.querySelector(selector);

    let width = (index * 10 + 50);

    if (width > 100) {
        width = 100;
    }

    if (t.name == 'Zend Framework') {
        width = 70;
    }
    
    const bottom = 'position-bottom-' + ( + month + 1 );
    const zIndex = 'zindex-' + (30 - index);

    const classes = 'tech ' + t.position
                  + ' ' 
                  + bottom 
                  + ' ' 
                  + 'color-' + colorIndex 
                  + ' ' 
                  + 'width-' + width
                  + ' '
                  + zIndex;

    const tech = '<div class="' + classes + '">' + t.name + '</div>';

    techs.innerHTML += tech;


});

