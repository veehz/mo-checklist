const ghpages = require("gh-pages");

ghpages.publish(
  "out",
  {
    branch: "gh-pages",
    repo: "git@github.com:veehz/mo-checklist.git",
    message: 'Auto-generated commit',
    nojekyll: true,
  },
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);
