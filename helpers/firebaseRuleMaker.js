"use strict";

function authUid() {
  return `auth.uid`;
}
function or(...args) {
  if (args.length == 1) return args[0];
  return args.map((arg) => `(${arg})`).join(" || ");
}
function and(...args) {
  if (args.length == 1) return args[0];
  return args.map((arg) => `(${arg})`).join(" && ");
}
function once() {
  return `!data.exists()`;
}
function self() {
  return `${authUid()} == $userId`;
}
function newDataIs(value, data = "newData.val()") {
  return or(...value.map((v) => `${data} == ${v}`));
}
function curDataIs(value, data = "data.val()") {
  return or(...value.map((v) => `${data} == ${v}`));
}

const rules = {
  solved: {
    $userId: {
      ".read": "true",
      ".write": self(),
      $problemId: { ".validate": "newData.isNumber()" },
    },
  },

  profile: {
    $userId: {
      ".read": "true",
      displayName: {
        ".read": "true",
        ".write": self(),
        ".validate": "newData.isString()",
      },
      hiddenContests: {
        ".read": "true",
        ".write": self(),
        $contestId: { ".validate": "newData.isBoolean()" },
      },
      shownYears: {
        ".read": "true",
        ".write": self(),
        ".validate": "newData.isNumber() && newData.val() >= 0",
      },
      $other: { ".validate": "false" },
    },
  },
  $other: { ".validate": "false" },
};

console.log(JSON.stringify({ rules }, null, 2));
