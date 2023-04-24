function get(array: any[], key: string, name: any): any {
  for (const item of array) {
    if (item[key] === name) {
      return item;
    }
  }
  return null;
}

interface CompetitionProblem {
  name?: string;
  index?: number;
  url?: string;
}

interface CompetitionYear {
  name?: string;
  year?: number;
  url?: string;
  pdf?: string;
  problems: CompetitionProblem[];
}

interface Competition {
  name: string;
  shortname: string;
  url?: string;
  years: CompetitionYear[];
}

function getCompetitions(): Competition[] {
  const array = [];

  // IMO
  array.push({
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
            index: problem,
            url: `https://artofproblemsolving.com/wiki/index.php/${year}_IMO_Problems/Problem_${problem}`,
          };
        }),
      };
    }),
  });

  // There was no IMO in 1980
  get(get(array, "shortname", "IMO").years, "year", 1980).problems = [];
  get(get(array, "shortname", "IMO").years, "year", 1980).url =
    "https://artofproblemsolving.com/wiki/index.php/1980_IMO";

  // IMOSL
  do {
    // number of problems (A,C,G,N)
    const years = [
      {
        year: 2021,
        link: "https://artofproblemsolving.com/community/c3080392_2021_isl",
        num: [8, 8, 8, 8],
      },
      {
        year: 2020,
        link: "https://artofproblemsolving.com/community/c2409205_2020_isl",
        num: [8, 8, 9, 7],
      },
      {
        year: 2019,
        link: "https://artofproblemsolving.com/community/c1308102_2019_isl",
        num: [7, 9, 8, 8],
      },
    ];
    const imosl : Competition = {
      name: "International Mathematical Olympiad Shortlist",
      shortname: "IMOSL",
      url: "https://artofproblemsolving.com/community/c3223",
      years: [],
    };
    const topics = ["A", "C", "G", "N"];
    for (const index in years) {
      const year = years[index].year;
      for(let i=0;i<4;i++){
        const cur : CompetitionYear = {
          name: `IMOSL ${year} (${topics[i]})`,
          pdf: `https://www.imo-official.org/problems/IMO${year}SL.pdf`,
          url: years[index].link,
          problems: [],
        }
        for(let j=0;j<years[index].num[i];j++){
          cur.problems.push({
            index: j+1,
          });
        }
        imosl.years.push(cur);
      }
    }

    array.push(imosl);
  } while (false);

  return array;
}

const competitions = getCompetitions();
export default competitions;
// console.log(JSON.stringify(getCompetitions(), null, 2));
// getCompetitions();
