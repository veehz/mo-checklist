function get(array, key, name) {
  for (const item of array) {
    if (item[key] === name) {
      return item;
    }
  }
  return null;
}

function getCompetitions() {
  const array = [
    {
      name: "International Mathematical Olympiad",
      shortname: "IMO",
      url: "http://www.imo-official.org/",
      years: Array.from({ length: 2022 - 1959 + 1 }, (_, i) => {
        const year = 2022 - i;
        return {
          year,
          url: `https://www.imo-official.org/year_info.aspx?year=${year}`,
          problems: [1, 2, 3, 4, 5, 6].map((problem) => {
            return {
              name: `Problem ${problem}`,
              url: `https://artofproblemsolving.com/wiki/index.php/${year}_IMO_Problems/Problem_${problem}`,
            };
          }),
        };
      }),
    },
  ];

  // There was no IMO in 1980
  get(get(array, "shortname", "IMO").years, "year", 1980).problems = [];
  get(get(array, "shortname", "IMO").years, "year", 1980).url =
    "https://artofproblemsolving.com/wiki/index.php/1980_IMO";

  return array;
}

// module.exports = getCompetitions();
console.log(JSON.stringify(getCompetitions(), null, 2));
// getCompetitions();
