/** Competitions List */

/* Useful snippets:

Array.from(document.querySelectorAll(".cmty-cat-cell-top-legit"))
  .map(x=>[parseInt(x.title.substr(-4)),x.querySelector("a").href])

IMOSL 2012 onwards:
arr = [];
for(const topic of ["A", "C", "G", "N"]){
    arr.push(Array.from(document.getElementsByClassName("cmty-view-post-item-label")).map(x => x.innerText).filter(x => x.startsWith(topic)).length);
}
JSON.stringify({year: parseInt(document.getElementsByClassName("cmty-category-cell-title")[0].innerHTML.trim().split(" ")[0]), link: window.location.href, num: arr})

*/

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
      years: Array.from({ length: 2025 - 1959 + 1 }, (_, i) => {
        const year = 2025 - i;
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
    const imosl: Competition = {
      name: "International Mathematical Olympiad Shortlist",
      shortname: "IMOSL",
      url: "https://artofproblemsolving.com/community/c3223",
      years: [],
    };
    array.push(imosl);
    // number of problems (A,C,G,N)
    const years = [
      {
        year: 2024,
        link: "https://artofproblemsolving.com/community/c3376654_2024_isl",
        num: [8, 8, 8, 7],
      },
      {
        year: 2023,
        link: "https://artofproblemsolving.com/community/c3922196_2023_isl",
        num: [7, 7, 8, 8],
      },
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

    for (let y = 2025; y >= 1989; y--) {
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
    for (let y = 2025; y >= first; y--) {
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

    const links: [number, string][] = [
      [
        2025,
        "https://artofproblemsolving.com/community/c4234032_2025_romanian_master_of_mathematics",
      ],
      [
        2024,
        "https://artofproblemsolving.com/community/c3771372_2024_romanian_master_of_mathematics",
      ],
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

    // 2008 and 2009 had 4 problems only
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
    for (let y = 2025; y >= 2016; y--) {
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

  /* USAMO */
  (function () {
    const usamo: Competition = {
      name: "United States of America Mathematical Olympiad",
      shortname: "USAMO",
      url: "https://artofproblemsolving.com/wiki/index.php/USAMO_Problems_and_Solutions",
      years: [],
    };

    for (let y = 2025; y >= 1972; y--) {
      usamo.years.push({
        year: y,
        url: `https://artofproblemsolving.com/wiki/index.php/${y}_USAMO`,
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
            url: `https://artofproblemsolving.com/wiki/index.php/${y}_USAMO_Problems/Problem_${problem}`,
          };
        }),
      });
    }

    array.push(usamo);
  })();

  /* USA TSTST */
  (function () {
    const usatst: Competition = {
      name: "USA TST Selection Test",
      shortname: "USATSTST",
      url: "https://web.evanchen.cc/problems.html",
      years: [],
    };

    // 2025 and above: https://github.com/usa-tst-public/USA-TST-Archive
    usatst.years.push({
      year: 2025,
      url: "https://github.com/usa-tst-public/USA-TST-Archive",
      problems: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((problem) => {
        return {
          index: problem,
        };
      }),
    })

    for (let y = 2024; y >= 2018; y--) {
      usatst.years.push({
        year: y,
        url: `https://web.evanchen.cc/exams/TSTST-${y}.pdf`,
        problems: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    for (let y = 2017; y >= 2011; y--) {
      usatst.years.push({
        year: y,
        url: `https://web.evanchen.cc/exams/TSTST-${y}.pdf`,
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    array.push(usatst);
  })();

  /* USA TST */
  (function () {
    const usatst: Competition = {
      name: "USA TST",
      shortname: "USATST",
      url: "https://web.evanchen.cc/problems.html",
      years: [],
    };

    for (let y = 2025; y >= 2012; y--) {
      // Because of the pandemic, there was no USA Winter TST for IMO 2022.
      if ([2022].includes(y)) continue;

      usatst.years.push({
        year: y,
        url: `https://web.evanchen.cc/exams/IMO-${y}-TST.pdf`,
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    for (let y = 2002; y >= 2000; y--) {
      usatst.years.push({
        year: y,
        url: `https://web.evanchen.cc/exams/tse${String(y % 100).padStart(
          2,
          "0"
        )}.pdf`,
        problems: [1, 2, 3, 4, 5, 6].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    array.push(usatst);
  })();

  // Balkan MO
  (function () {
    const rmm: Competition = {
      name: "Balkan Mathematical Olympiad",
      shortname: "BMO",
      url: "https://artofproblemsolving.com/community/c3225_balkan_mo",
      years: [],
    };

    const links: [number, string][] = [
      [
          2025,
          "https://artofproblemsolving.com/community/c4305889_2025_balkan_mo"
      ],
      [
          2024,
          "https://artofproblemsolving.com/community/c3815407_2024_balkan_mo"
      ],
      [
          2023,
          "https://artofproblemsolving.com/community/c3345386_2023_balkan_mo"
      ],
      [
          2022,
          "https://artofproblemsolving.com/community/c3039147_2022_balkan_mo"
      ],
      [
          2021,
          "https://artofproblemsolving.com/community/c2461086_2021_balkan_mo"
      ],
      [
          2020,
          "https://artofproblemsolving.com/community/c1449563_2020_balkan_mo"
      ],
      [
          2019,
          "https://artofproblemsolving.com/community/c869017_2019_balkan_mo"
      ],
      [
          2018,
          "https://artofproblemsolving.com/community/c653281_2018_balkan_mo"
      ],
      [
          2017,
          "https://artofproblemsolving.com/community/c447168_2017_balkan_mo"
      ],
      [
          2016,
          "https://artofproblemsolving.com/community/c267007_2016_balkan_mo"
      ],
      [
          2015,
          "https://artofproblemsolving.com/community/c74025_2015_balkan_mo"
      ],
      [
          2014,
          "https://artofproblemsolving.com/community/c4086_2014_balkan_mo"
      ],
      [
          2013,
          "https://artofproblemsolving.com/community/c4085_2013_balkan_mo"
      ],
      [
          2012,
          "https://artofproblemsolving.com/community/c4084_2012_balkan_mo"
      ],
      [
          2011,
          "https://artofproblemsolving.com/community/c4083_2011_balkan_mo"
      ],
      [
          2010,
          "https://artofproblemsolving.com/community/c4082_2010_balkan_mo"
      ],
      [
          2009,
          "https://artofproblemsolving.com/community/c4081_2009_balkan_mo"
      ],
      [
          2008,
          "https://artofproblemsolving.com/community/c4080_2008_balkan_mo"
      ],
      [
          2007,
          "https://artofproblemsolving.com/community/c4079_2007_balkan_mo"
      ],
      [
          2006,
          "https://artofproblemsolving.com/community/c4078_2006_balkan_mo"
      ],
      [
          2005,
          "https://artofproblemsolving.com/community/c4077_2005_balkan_mo"
      ],
      [
          2004,
          "https://artofproblemsolving.com/community/c4076_2004_balkan_mo"
      ],
      [
          2003,
          "https://artofproblemsolving.com/community/c4075_2003_balkan_mo"
      ],
      [
          2002,
          "https://artofproblemsolving.com/community/c4074_2002_balkan_mo"
      ],
      [
          2001,
          "https://artofproblemsolving.com/community/c4073_2001_balkan_mo"
      ],
      [
          2000,
          "https://artofproblemsolving.com/community/c4072_2000_balkan_mo"
      ],
      [
          1999,
          "https://artofproblemsolving.com/community/c4071_1999_balkan_mo"
      ],
      [
          1998,
          "https://artofproblemsolving.com/community/c4070_1998_balkan_mo"
      ],
      [
          1997,
          "https://artofproblemsolving.com/community/c4069_1997_balkan_mo"
      ],
      [
          1996,
          "https://artofproblemsolving.com/community/c4068_1996_balkan_mo"
      ],
      [
          1995,
          "https://artofproblemsolving.com/community/c4067_1995_balkan_mo"
      ],
      [
          1994,
          "https://artofproblemsolving.com/community/c4066_1994_balkan_mo"
      ],
      [
          1993,
          "https://artofproblemsolving.com/community/c4065_1993_balkan_mo"
      ],
      [
          1992,
          "https://artofproblemsolving.com/community/c4064_1992_balkan_mo"
      ],
      [
          1991,
          "https://artofproblemsolving.com/community/c4063_1991_balkan_mo"
      ],
      [
          1990,
          "https://artofproblemsolving.com/community/c4062_1990_balkan_mo"
      ],
      [
          1989,
          "https://artofproblemsolving.com/community/c4061_1989_balkan_mo"
      ],
      [
          1988,
          "https://artofproblemsolving.com/community/c4060_1988_balkan_mo"
      ],
      [
          1987,
          "https://artofproblemsolving.com/community/c4059_1987_balkan_mo"
      ],
      [
          1986,
          "https://artofproblemsolving.com/community/c4058_1986_balkan_mo"
      ],
      [
          1985,
          "https://artofproblemsolving.com/community/c4057_1985_balkan_mo"
      ],
      [
          1984,
          "https://artofproblemsolving.com/community/c4056_1984_balkan_mo"
      ]
    ];

    for (let i = 0; i < links.length; i++) {
      const [y, url] = links[i];
      rmm.years.push({
        year: y,
        url: url,
        problems: [1, 2, 3, 4].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    array.push(rmm);
  })();

  // Junior Balkan MO
  (function () {
    const rmm: Competition = {
      name: "Junior Balkan Mathematical Olympiad",
      shortname: "JBMO",
      url: "https://artofproblemsolving.com/community/c3227_junior_balkan_mo",
      years: [],
    };

    const links: [number, string][] = [
      [
          2025,
          "https://artofproblemsolving.com/community/c4366895_2025_junior_balkan_mathematical_olympiad"
      ],
      [
          2024,
          "https://artofproblemsolving.com/community/c3869872_2024_junior_balkan_mo"
      ],
      [
          2023,
          "https://artofproblemsolving.com/community/c3375088_2023_junior_balkan_mathematical_olympiad"
      ],
      [
          2022,
          "https://artofproblemsolving.com/community/c3072924_2022_junior_balkan_mathematical_olympiad"
      ],
      [
          2020,
          "https://artofproblemsolving.com/community/c2394288_2021_junior_balkn_mathematical_olympiad"
      ],
      [
          2020,
          "https://artofproblemsolving.com/community/c1292504_2020_junior_balkn_mo"
      ],
      [
          2019,
          "https://artofproblemsolving.com/community/c1015952_2019_junior_balkan_mo"
      ],
      [
          2018,
          "https://artofproblemsolving.com/community/c691115_2018_junior_balkan_mo"
      ],
      [
          2017,
          "https://artofproblemsolving.com/community/c472784_2017_junior_balkan_mo"
      ],
      [
          2016,
          "https://artofproblemsolving.com/community/c289059_2016_junior_balkan_mo"
      ],
      [
          2015,
          "https://artofproblemsolving.com/community/c100694_2015_junior_balkan_mo"
      ],
      [
          2014,
          "https://artofproblemsolving.com/community/c4216_2014_junior_balkan_mo"
      ],
      [
          2013,
          "https://artofproblemsolving.com/community/c4215_2013_junior_balkan_mo"
      ],
      [
          2012,
          "https://artofproblemsolving.com/community/c4214_2012_junior_balkan_mo"
      ],
      [
          2011,
          "https://artofproblemsolving.com/community/c4213_2011_junior_balkan_mo"
      ],
      [
          2010,
          "https://artofproblemsolving.com/community/c4212_2010_junior_balkan_mo"
      ],
      [
          2009,
          "https://artofproblemsolving.com/community/c4211_2009_junior_balkan_mo"
      ],
      [
          2008,
          "https://artofproblemsolving.com/community/c4210_2008_junior_balkan_mo"
      ],
      [
          2007,
          "https://artofproblemsolving.com/community/c4209_2007_junior_balkan_mo"
      ],
      [
          2006,
          "https://artofproblemsolving.com/community/c4208_2006_junior_balkan_mo"
      ],
      [
          2005,
          "https://artofproblemsolving.com/community/c4207_2005_junior_balkan_mo"
      ],
      [
          2004,
          "https://artofproblemsolving.com/community/c4206_2004_junior_balkan_mo"
      ],
      [
          2003,
          "https://artofproblemsolving.com/community/c4205_2003_junior_balkan_mo"
      ],
      [
          2002,
          "https://artofproblemsolving.com/community/c4204_2002_junior_balkan_mo"
      ],
      [
          2001,
          "https://artofproblemsolving.com/community/c4203_2001_junior_balkan_mo"
      ],
      [
          2000,
          "https://artofproblemsolving.com/community/c4202_2000_junior_balkan_mo"
      ],
      [
          1999,
          "https://artofproblemsolving.com/community/c4201_1999_junior_balkan_mo"
      ],
      [
          1998,
          "https://artofproblemsolving.com/community/c4200_1998_junior_balkan_mo"
      ],
      [
          1997,
          "https://artofproblemsolving.com/community/c4199_1997_junior_balkan_mo"
      ]
    ];

    for (let i = 0; i < links.length; i++) {
      const [y, url] = links[i];
      rmm.years.push({
        year: y,
        url: url,
        problems: [1, 2, 3, 4].map((problem) => {
          return {
            index: problem,
          };
        }),
      });
    }

    array.push(rmm);
  })();

  return array;
}

const competitions = getCompetitions();
export default competitions;
