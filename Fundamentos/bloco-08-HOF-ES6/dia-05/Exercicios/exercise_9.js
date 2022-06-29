// Estações baseadas nas do emisfério Norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const monthsBasedOnSeasons = ({spring, summer, autumn, winter}) => {
  const arrayMonths = [...spring, ...summer, ...autumn, ...winter];
  return arrayMonths;
};

console.log(monthsBasedOnSeasons(yearSeasons));

// return: 
/*
[
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December',
  'January',   'February'
]
*/