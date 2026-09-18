/* Discovering Your Procrastination Style – interactive quizzes
   Based on Sapadin, Linda. Beat Procrastination and Make the Grade. 1999
*/

const QUIZZES = [
  {
    id: "perfectionist",
    title: "Perfectionist Procrastinator",
    questions: [
      "Do I get preoccupied with details, rules, or schedules that others don’t seem to care much about?",
      "Do I have difficulty starting or completing a project because my own standards haven’t been met?",
      "Am I reluctant to delegate tasks or work with others unless they do things my way?",
      "Do others comment on my being rigid, stubborn, or finicky?",
      "Am I critical of what I’ve accomplished or how long it took me to do it?",
      "Am I satisfied with what I do only if it is as good as it can possibly be?",
      "Do I look on my failures as embarrassments that I would hate to mention or have revealed?",
      "Do I have difficulty maintaining a sense of humor while I’m struggling to do something new?",
      "Do I feel upset or humiliated if I don’t do something as well as one of my peers?",
      "Do I think about situations in extremes – black or white – ignoring the gray area in between?",
    ],
  },
  {
    id: "dreamer",
    title: "Dreamer Procrastinator",
    questions: [
      "Do I think a lot about what I’d like to accomplish but rarely get projects off the ground?",
      "Do I wait for opportunities to drop into my lap rather than take an active approach?",
      "Do I let lots of time drift by with passive activities like watching TV, daydreaming, or hanging out?",
      "Do I spend more time thinking about the finished project than about the details needed to get it done?",
      "Do I long to be able to go from A to Z without having to deal with the stuff in between?",
      "Do I wish someone else would handle the bothersome details of life, freeing me to do what I really want?",
      "Do I find myself thinking or speaking words like, “I’ll try to…” or “Someday I will…”?",
      "Do other people sometimes accuse me of being a dreamer, of having my head in the clouds?",
      "Do I do what I feel like at the moment, forgetting or ignoring previous plans or priorities?",
      "Do I expect great things from myself, but wonder why they never seem to happen?",
    ],
  },
  {
    id: "worrier",
    title: "Worrier Procrastinator",
    questions: [
      "Do I have difficulty making decisions, vacillating about what I should do?",
      "Do I need – or seek – approval, advice, or assurance from others before I do things?",
      "Do I have trouble starting projects or working on my own because I doubt my judgment or ability?",
      "Do I think things are too much for me, or worry about overdoing it?",
      "Do I hesitate to leave my “comfort zone”, avoiding situations that might cause stress or anxiety?",
      "Do I become easily agitated when something disrupts my normal routine?",
      "Do I avoid situations that are unpredictable or may be uncomfortable?",
      "Do I sometimes paralyze myself before starting work on a project, wondering about the “what if’s”?",
      "Do I exaggerate the trouble that might arise from a situation, or minimize my ability to cope with it?",
      "Do I think I could do more – or better – if somebody would take me by the hand and be there for me?",
    ],
  },
  {
    id: "crisismaker",
    title: "Crisis-Maker Procrastinator",
    questions: [
      "Do I ignore important tasks, then, at the last minute, work frantically to get them done?",
      "Do I feel that life is chaotic, and that I can never be sure what the next day will bring?",
      "Do my moods change rapidly and dramatically?",
      "Do I get easily frustrated and show it by displaying anger or quitting?",
      "Do I act in ways that other people find provocative, seductive, or attention getting?",
      "Am I easily influenced by circumstances, responding to the need of the moment?",
      "Do I enjoy – or pride myself on – taking risks or living on the edge?",
      "Do I tend to get very involved with someone or something, then abruptly detach myself and move on?",
      "Do I think of my life as so dramatic that it could be made into a soap opera?",
      "Do I prefer action, having little patience for things that are too slow, predictable, or safe?",
    ],
  },
  {
    id: "defier",
    title: "Defier Procrastinator",
    questions: [
      "Do I become sulky, irritable, sarcastic, or argumentative when asked to do something I don’t want to do?",
      "Do I work deliberately slowly or ineffectively in order to sabotage a task I don’t like doing?",
      "Do I feel resentful or manipulated when I wind up having to do something unexpectedly?",
      "Do I feel that others make unreasonable demands on me?",
      "Do I avoid obligations by claiming I’ve forgotten them or they’re not important?",
      "When people ask me why I did or didn’t do something, do I feel they are hassling or nagging me?",
      "Do I believe that I’m doing a better job than others think – or say – I’m doing?",
      "Do I take offense at suggestions from others regarding how I could do things differently?",
      "Do others accuse me of – or get annoyed with me for – failing to do my share of work efficiently?",
      "Do I frequently criticize or ridicule people who are in authority?",
    ],
  },
  {
    id: "overdoer",
    title: "Overdoer Procrastinator",
    questions: [
      "Do I run around doing things, without really feeling that I’m accomplishing very much?",
      "Do I have difficulty saying “no” to people who ask for help, yet feel resentful later on?",
      "When I’m doing a task, do I wonder, “How did I get myself into this”?",
      "Do I have a strong need for approval from other people?",
      "Do I find myself complaining, “I have no time”, “I have too much to do”, or “I’m too busy”?",
      "When I get unexpected free time, do I keep finding things to do instead of catching up with old things?",
      "Do I have a strong need to be self-reliant and hate to ask someone else for help?",
      "Do I get over involved in other people’s problems, postponing attention to my own?",
      "Do other people regard me as someone who will drop everything if and when they need me?",
      "Do I enjoy being busy, but secretly think that maybe I don’t know how to be any other way?",
    ],
  },
];

const OPTIONS = [
  { value: "frequently", label: "frequently" },
  { value: "sometimes", label: "sometimes" },
  { value: "rarely", label: "rarely" },
];

// answers[quizId][questionIndex] = "frequently" | "sometimes" | "rarely"
const answers = {};

function initAnswers() {
  QUIZZES.forEach((q) => {
    answers[q.id] = Array(q.questions.length).fill(null);
  });
}

function scoreQuiz(quizId) {
  const arr = answers[quizId] || [];
  let f = 0, s = 0, r = 0;
  arr.forEach((a) => {
    if (a === "frequently") f++;
    else if (a === "sometimes") s++;
    else if (a === "rarely") r++;
  });
  const fx2 = f * 2;
  const total = fx2 + s;
  return { f, s, r, fx2, total, answered: f + s + r };
}

function totalAnswered() {
  return QUIZZES.reduce((sum, q) => sum + scoreQuiz(q.id).answered, 0);
}

function renderQuizzes() {
  const container = document.getElementById("quizzes");
  container.innerHTML = "";

  QUIZZES.forEach((quiz) => {
    const section = document.createElement("section");
    section.className = "quiz-section";
    section.id = `quiz-${quiz.id}`;

    const header = document.createElement("div");
    header.className = "quiz-header";
    header.innerHTML = `
      <h2>${quiz.title} Quiz</h2>
      <span class="score-pill" id="pill-${quiz.id}">Score: 0</span>
    `;
    header.addEventListener("click", () => {
      const body = section.querySelector(".quiz-body");
      body.style.display = body.style.display === "none" ? "block" : "none";
    });

    const body = document.createElement("div");
    body.className = "quiz-body";

    quiz.questions.forEach((text, qi) => {
      const block = document.createElement("div");
      block.className = "question-block";
      block.innerHTML = `
        <div class="question-text"><span class="num">${qi + 1}.</span> ${text}</div>
        <div class="options" data-quiz="${quiz.id}" data-q="${qi}"></div>
      `;
      const optionsEl = block.querySelector(".options");

      OPTIONS.forEach((opt) => {
        const label = document.createElement("label");
        label.className = "option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `${quiz.id}_q${qi}`;
        input.value = opt.value;
        input.addEventListener("change", () => {
          answers[quiz.id][qi] = opt.value;
          // visual selected state
          optionsEl.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
          label.classList.add("selected");
          updateAll();
        });
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt.label));
        optionsEl.appendChild(label);
      });

      body.appendChild(block);
    });

    // score box
    const scoreBox = document.createElement("div");
    scoreBox.className = "score-box";
    scoreBox.id = `score-${quiz.id}`;
    scoreBox.innerHTML = `
      <h3>Automatic Scoring</h3>
      <div class="score-grid">
        <span class="label">Count of “frequently”</span><span class="value" data-f>0</span>
        <span class="label">Count of “sometimes”</span><span class="value" data-s>0</span>
        <span class="label">Count of “rarely”</span><span class="value" data-r>0</span>
        <span class="label">SUBTOTAL Fx2 (frequently × 2)</span><span class="value" data-fx2>0</span>
        <span class="label">SUBTOTAL S (sometimes)</span><span class="value" data-subS>0</span>
        <div class="total-row"><span>TOTAL SCORE</span><span class="value" data-total>0</span></div>
      </div>
    `;
    body.appendChild(scoreBox);

    section.appendChild(header);
    section.appendChild(body);
    container.appendChild(section);
  });
}

function updateQuizScoreUI(quizId) {
  const sc = scoreQuiz(quizId);
  const box = document.getElementById(`score-${quizId}`);
  if (!box) return;
  box.querySelector("[data-f]").textContent = sc.f;
  box.querySelector("[data-s]").textContent = sc.s;
  box.querySelector("[data-r]").textContent = sc.r;
  box.querySelector("[data-fx2]").textContent = sc.fx2;
  box.querySelector("[data-subS]").textContent = sc.s;
  box.querySelector("[data-total]").textContent = sc.total;

  const pill = document.getElementById(`pill-${quizId}`);
  if (pill) pill.textContent = `Score: ${sc.total}`;
}

function updateProgress() {
  const answered = totalAnswered();
  const total = 60;
  document.getElementById("progress-text").textContent = `${answered} / ${total}`;
  document.getElementById("progress-fill").style.width = `${(answered / total) * 100}%`;
}

function updateSummary() {
  const tbody = document.getElementById("summary-body");
  tbody.innerHTML = "";

  // compute scores + ranks
  const rows = QUIZZES.map((q) => {
    const sc = scoreQuiz(q.id);
    return { id: q.id, title: q.title, total: sc.total };
  });

  // rank: 1 = highest. ties get same rank
  const sorted = [...rows].sort((a, b) => b.total - a.total);
  const rankMap = {};
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].total < sorted[i - 1].total) {
      rank = i + 1;
    }
    // only assign rank if at least one answer exists for that style, else —
    rankMap[sorted[i].id] = sorted[i].total === 0 && scoreQuiz(sorted[i].id).answered === 0
      ? "—"
      : rank;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const isMajor = row.total >= 10;
    const isMinor = row.total >= 5 && row.total <= 9;

    let majorBadge = isMajor
      ? `<span class="badge major">Yes</span>`
      : `<span class="badge none">—</span>`;
    let minorBadge = isMinor
      ? `<span class="badge minor">Yes</span>`
      : `<span class="badge none">—</span>`;

    const scoreClass = isMajor ? "score-cell major" : isMinor ? "score-cell minor" : "score-cell";

    tr.innerHTML = `
      <td><strong>${row.title.replace(" Procrastinator", "")}</strong></td>
      <td class="${scoreClass}">${row.total}</td>
      <td>${majorBadge}</td>
      <td>${minorBadge}</td>
      <td class="rank-num">${rankMap[row.id]}</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateAll() {
  QUIZZES.forEach((q) => updateQuizScoreUI(q.id));
  updateProgress();
  updateSummary();
  // persist lightly
  try {
    localStorage.setItem("procrastination-answers", JSON.stringify(answers));
  } catch (_) {}
}

function loadSaved() {
  try {
    const raw = localStorage.getItem("procrastination-answers");
    if (!raw) return;
    const saved = JSON.parse(raw);
    QUIZZES.forEach((q) => {
      if (saved[q.id] && Array.isArray(saved[q.id])) {
        answers[q.id] = saved[q.id];
      }
    });
  } catch (_) {}
}

function restoreUIFromAnswers() {
  QUIZZES.forEach((quiz) => {
    quiz.questions.forEach((_, qi) => {
      const val = answers[quiz.id][qi];
      if (!val) return;
      const input = document.querySelector(
        `input[name="${quiz.id}_q${qi}"][value="${val}"]`
      );
      if (input) {
        input.checked = true;
        input.closest(".option").classList.add("selected");
      }
    });
  });
}

function resetAll() {
  if (!confirm("Clear all your answers and start over?")) return;
  initAnswers();
  try { localStorage.removeItem("procrastination-answers"); } catch (_) {}
  // clear radio selection UI
  document.querySelectorAll('input[type="radio"]').forEach((r) => {
    r.checked = false;
  });
  document.querySelectorAll(".option.selected").forEach((o) => o.classList.remove("selected"));
  updateAll();
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  initAnswers();
  loadSaved();
  renderQuizzes();
  restoreUIFromAnswers();
  updateAll();

  document.getElementById("btn-reset").addEventListener("click", resetAll);
  document.getElementById("btn-print").addEventListener("click", () => window.print());
});
