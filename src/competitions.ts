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
      years: Array.from({ length: 2023 - 1959 + 1 }, (_, i) => {
        const year = 2023 - i;
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
        year: 2022,
        link: "https://artofproblemsolving.com/community/c3381907_2022_imo_shortlist",
        num: [8, 9, 8, 8],
      },
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

    for (let y = 2023; y >= 1989; y--) {
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

  /** EGMO */
  (function () {
    const egmo: Competition = {
      name: "European Girls' Mathematical Olympiad",
      shortname: "EGMO",
      url: "https://www.egmo.org/",
      years: [],
    };

    const first = 2012;
    for (let y = 2023; y >= first; y--) {
      egmo.years.push({
        year: y,
        url: `https://www.egmo.org/egmos/egmo${y - first + 1}`,
        links: {
          "D1-PDF": `https://www.egmo.org/egmos/egmo${
            y - first + 1
          }/paper-day1-English.pdf`,
          "D2-PDF": `https://www.egmo.org/egmos/egmo${
            y - first + 1
          }/paper-day2-English.pdf`,
        },
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    get(egmo.years, "year", 2012).problems.push({
      index: 7,
    });
    get(egmo.years, "year", 2012).problems.push({
      index: 8,
    });

    array.push(egmo);
  })();

  /** RMM */
  (function () {
    const rmm: Competition = {
      name: "Romanian Master of Mathematics",
      shortname: "RMM",
      url: "https://artofproblemsolving.com/community/c3238_romanian_masters_of_mathematics_collection",
      years: [],
    };

    const first = 2008;
    const links: [number, string][] = [
      [
        2023,
        "https://artofproblemsolving.com/community/c3303738_2023_romanian_master_of_mathematics",
      ],
      [
        2021,
        "https://artofproblemsolving.com/community/c2510533_2021_romanian_masters_in_mathematics",
      ],
      [
        2020,
        "https://artofproblemsolving.com/community/c1085509_2020_romanian_masters_in_mathematics",
      ],
      [
        2019,
        "https://artofproblemsolving.com/community/c836819_2019_romanian_masters_in_mathematics",
      ],
      [
        2018,
        "https://artofproblemsolving.com/community/c618724_2018_romanian_masters_in_mathematics",
      ],
      [
        2017,
        "https://artofproblemsolving.com/community/c416676_2017_romanian_masters_in_mathematics",
      ],
      [
        2016,
        "https://artofproblemsolving.com/community/c254976_2016_romanian_masters_in_mathematic",
      ],
      [
        2015,
        "https://artofproblemsolving.com/community/c39512_2015_romania_masters_in_mathematics",
      ],
      [
        2013,
        "https://artofproblemsolving.com/community/c3612_2013_romanian_masters_in_mathematics",
      ],
      [
        2012,
        "https://artofproblemsolving.com/community/c3611_2012_romanian_masters_in_mathematics",
      ],
      [
        2011,
        "https://artofproblemsolving.com/community/c3610_2011_romanian_masters_in_mathematics",
      ],
      [
        2010,
        "https://artofproblemsolving.com/community/c3609_2010_romanian_masters_in_mathematics",
      ],
      [
        2009,
        "https://artofproblemsolving.com/community/c3608_2009_romanian_masters_in_mathematics",
      ],
      [
        2008,
        "https://artofproblemsolving.com/community/c3607_2008_romanian_masters_in_mathematics",
      ],
    ];

    for (let i = 0; i < links.length; i++) {
      const [y, url] = links[i];
      rmm.years.push({
        year: y,
        url: url,
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    get(rmm.years, "year", 2008).problems.pop();
    get(rmm.years, "year", 2008).problems.pop();
    get(rmm.years, "year", 2009).problems.pop();
    get(rmm.years, "year", 2009).problems.pop();

    array.push(rmm);
  })();

  /** TOT */
  (function () {
    const tot: Competition = {
      name: "Tournament of Towns",
      shortname: "TOT",
      url: "https://www.turgor.ru/en",
      years: [],
    };

    const first = 1980;
    for (let y = 2023; y >= 2016; y--) {
      tot.years.push({
        name: `TOT Spring ${y}`,
        year: y,
        links: {
          "O-PDF": `https://www.turgor.ru/en/problems/${y - first + 1}/spring-${
            y - first + 1
          }-O-eng-auth.pdf`,
          "A-PDF": `https://www.turgor.ru/en/problems/${y - first + 1}/spring-${
            y - first + 1
          }-A-eng-auth.pdf`,
        },
        problems: [
          "O1",
          "O2",
          "O3",
          "O4",
          "O5",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
        ].map((problem) => {
          return {
            name: problem,
          };
        }),
      });
      tot.years.push({
        name: `TOT Fall ${y - 1}`,
        year: y,
        links: {
          "O-PDF": `https://www.turgor.ru/en/problems/${y - first + 1}/fall-${
            y - first + 1
          }-O-eng-auth.pdf`,
          "A-PDF": `https://www.turgor.ru/en/problems/${y - first + 1}/fall-${
            y - first + 1
          }-A-eng-auth.pdf`,
        },
        problems: [
          "O1",
          "O2",
          "O3",
          "O4",
          "O5",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
        ].map((problem) => {
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
