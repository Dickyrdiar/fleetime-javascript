const governmentForms = [
  {
    name: 'Plutocracy',
    definition: 'Rule by the wealthy',
  },
  {
    name: 'Oligarchy',
    definition: 'Rule by a small number of people',
  },
  {
    name: 'Kleptocracy',
    definition: 'Rule by the thieves',
  },
  {
    name: 'Theocracy',
    definition: 'Rule by a religious elite',
  },
  {
    name: 'Democracy',
    definition: 'Rule by the people',
  },
  {
    name: 'Autocracy',
    definition: 'Rule by a single person',
  },
];

function endCy(governmentForms) {
  let formEndingWithCy = [];

  for (const forms of governmentForms) {
    if (forms.name.endsWith('cy')) {
      formEndingWithCy.push(forms.name);
    }
  }
  return formEndingWithCy;
}

console.log(endCy(governmentForms));
