export interface CompetitionProblem {
  name?: string;
  index?: number;
  url?: string;
}

export interface CompetitionYear {
  name?: string;
  description?: string; // not included in unique id to be stored on firebase
  year?: number;
  url?: string;
  links?: {
    [key: string]: string;
  };
  problems: CompetitionProblem[];
}

export interface Competition {
  name: string;
  shortname: string;
  url?: string;
  years: CompetitionYear[];
}

function get(array: any[], key: string, name: any): any {
  for (const item of array) {
    if (item[key] === name) {
      return item;
    }
  }
  return null;
}

function ordinalNumber(i: number): string {
  const j = i % 10;
  const k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

/** Main Function. Returns an array of Competition. */
function getCompetitions(): Competition[] {
  const array = [];

  /** IMO */
  (function () {
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
  })();

  /** IMOSL */
  (function () {
    // number of problems (A,C,G,N)
    // 2012 or onwards use:
    /* arr = [];
      for(const topic of ["A", "C", "G", "N"]){
          arr.push(Array.from(document.getElementsByClassName("cmty-view-post-item-label")).map(x => x.innerText).filter(x => x.startsWith(topic)).length);
      }
      JSON.stringify({year: parseInt(document.getElementsByClassName("cmty-category-cell-title")[0].innerHTML.trim().split(" ")[0]), link: window.location.href, num: arr}) */
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
      {
        year: 2018,
        link: "https://artofproblemsolving.com/community/c915701_2018_imo_shortlist",
        num: [7, 7, 7, 7],
      },
      {
        year: 2017,
        link: "https://artofproblemsolving.com/community/c686986_2017_imo_shortiist",
        num: [8, 8, 8, 8],
      },
      {
        year: 2016,
        link: "https://artofproblemsolving.com/community/c482986_2016_imo_shortlist",
        num: [8, 8, 8, 8],
      },
      {
        year: 2015,
        link: "https://artofproblemsolving.com/community/c111148_2015_imo_shortlist",
        num: [6, 7, 8, 8],
      },
      {
        year: 2014,
        link: "https://artofproblemsolving.com/community/c107000_2014_imo_shortlist",
        num: [6, 9, 7, 8],
      },
      {
        year: 2013,
        link: "https://artofproblemsolving.com/community/c3964_2013_imo_shortlist",
        num: [6, 8, 6, 7],
      },
      {
        year: 2012,
        link: "https://artofproblemsolving.com/community/c3963_2012_imo_shortlist",
        num: [7, 7, 8, 8],
      },
      {
        year: 2011,
        link: "https://artofproblemsolving.com/community/c3962_2011_imo_shortlist",
        num: [7, 7, 8, 8],
      },
      {
        year: 2010,
        link: "https://artofproblemsolving.com/community/c3961_2010_imo_shortlist",
        num: [8, 7, 7, 6],
      },
      {
        year: 2009,
        link: "https://artofproblemsolving.com/community/c3960_2009_imo_shortlist",
        num: [7, 8, 8, 7],
      },
    ];
    const imosl: Competition = {
      name: "International Mathematical Olympiad Shortlist",
      shortname: "IMOSL",
      url: "https://artofproblemsolving.com/community/c3223",
      years: [],
    };
    const topics = ["A", "C", "G", "N"];
    for (const index in years) {
      const year = years[index].year;
      for (let i = 0; i < 4; i++) {
        const cur: CompetitionYear = {
          name: `IMOSL ${year}`,
          description: `(${topics[i]})`,
          year: year,
          links: {
            PDF: `https://www.imo-official.org/problems/IMO${year}SL.pdf`,
          },
          url: years[index].link,
          problems: [],
        };
        for (let j = 0; j < years[index].num[i]; j++) {
          cur.problems.push({
            name: `${topics[i]}${j + 1}`,
            index: j + 1,
          });
        }
        imosl.years.push(cur);
      }
    }

    array.push(imosl);
  })();

  /** APMO */
  (function () {
    const apmo: Competition = {
      name: "Asian Pacific Mathematical Olympiad",
      shortname: "APMO",
      url: "https://www.apmo-official.org/",
      years: [],
    };

    for (let y = 2022; y >= 1989; y--) {
      apmo.years.push({
        year: y,
        url: `https://www.apmo-official.org/year_report/${y}`,
        links: {
          PDF: `https://www.apmo-official.org/static/problems/apmo${y}_prb.pdf`,
          Sol: `https://www.apmo-official.org/static/solutions/apmo${y}_sol.pdf`,
        },
        problems: [1, 2, 3, 4, 5].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    [2000, 1994, 1993, 1992, 1991, 1989].map((year) => {
      delete get(apmo.years, "year", year).links.Sol;
    });

    array.push(apmo);
  })();
  (function () {
    const tot: Competition = {
      name: "Tournament of Towns",
      shortname: "TOT",
      url: "https://www.turgor.ru/en",
      years: [],
    };

    const first = 1980;
    for (let i = 2023; i >= 2016; i--) {
      tot.years.push({
        name: `TOT Spring ${i}`,
        year: i,
        links: {
          "O-PDF": `https://www.turgor.ru/en/problems/${i - first + 1}/spring-${i - first + 1}-O-eng-auth.pdf`,
          "A-PDF": `https://www.turgor.ru/en/problems/${i - first + 1}/spring-${i - first + 1}-A-eng-auth.pdf`,
        },
        problems: ["O1", "O2", "O3", "O4", "O5", "A1", "A2", "A3", "A4", "A5", "A6", "A7"].map((problem) => {
          return {
            name: problem,
          };
        }),
      });
      tot.years.push({
        name: `TOT Fall ${i-1}`,
        year: i,
        links: {
          "O-PDF": `https://www.turgor.ru/en/problems/${i - first + 1}/fall-${i - first + 1}-O-eng-auth.pdf`,
          "A-PDF": `https://www.turgor.ru/en/problems/${i - first + 1}/fall-${i - first + 1}-A-eng-auth.pdf`,
        },
        problems: ["O1", "O2", "O3", "O4", "O5", "A1", "A2", "A3", "A4", "A5", "A6", "A7"].map((problem) => {
          return {
            name: problem,
          };
        }),
      });
    }

    array.push(tot);
  })();
  return array;
}

const competitions = getCompetitions();
export default competitions;
