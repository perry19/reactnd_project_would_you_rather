let users = {
  fopa: {
    id: "fopa",
    name: "Fopa Armel",
    avatarURL:
      "https://static.vecteezy.com/system/resources/previews/000/420/553/original/avatar-icon-vector-illustration.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionOne"
    },
    questions: ["8xf0y6ziyjacvozdd253nd", "8xf0y6ziyjacaozdd253nd"]
  },
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "https://static.vecteezy.com/system/resources/previews/000/423/680/original/female-avatar-icon-vector-illustration.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL:
      "https://static.vecteezy.com/system/resources/previews/000/425/333/original/avatar-icon-vector-illustration.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo"
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "https://freesvg.org/img/Male-Avatar-3.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  }
};

let questions = {
  "8xf0y6ziyjacvozdd253nd": {
    id: "8xf0y6ziyjacvozdd253nd",
    author: "fopa",
    timestamp: 1572599686000,
    optionOne: {
      votes: ["fopa", "tylermcginnis"],
      text: "be a React developer"
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be an Angular developer"
    }
  },
  "8xf0y6ziyjacaozdd253nd": {
    id: "8xf0y6ziyjacaozdd253nd",
    author: "fopa",
    timestamp: 1572598876000,
    optionOne: {
      votes: ["fopa"],
      text: "be a Python developer"
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be an Java developer"
    }
  },
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1572598886000,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory"
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1572338016000,
    optionOne: {
      votes: [],
      text: "become a superhero"
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillian"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1572338916000,
    optionOne: {
      votes: [],
      text: "be telekinetic"
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1572395863000,
    optionOne: {
      votes: [],
      text: "be a front-end developer"
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1572338716000,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself"
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1572336016000,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript"
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift"
    }
  }
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      };

      res();
    }, 500);
  });
}
