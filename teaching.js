"use strict";

const LESSONS = {
  dingfengbo: {
    name: "定风波",
    kicker: "SHORT FORM · BEGINNER",
    subtitle: "双调六十二字。用七字长句铺陈，用二字短句突然转身，适合写一次处境与一次内心选择。",
    structureTitle: "7 字长句与 2 字短句相间",
    structureCopy: "上片五句、下片六句，共十一句。句式为 7、7、7、2、7 / 7、2、7、7、2、7。",
    methodTitle: "由外在风雨转入内心态度",
    methodCopy: "范本先写途中遇雨，再用短句发问或顿挫，最后把天气变化写成心境变化。",
    rhymeTitle: "平韵为主，间用仄韵",
    rhymeCopy: "初学先让标记为“平韵”的句子使用同一韵部；短句与相邻仄韵句可形成呼应。",
    notes: [
      "苏轼范本开头是“莫听穿林打叶声”。它没有先说大道理，而是从耳边的雨声写起。",
      "“谁怕”只有两字，作用不是补充景物，而是让语气突然抬起。你也可以写“何惧”“且住”“莫问”等原创转折。",
      "结尾应回应开头的处境，但态度已经改变。不要照抄原词意象，换成你亲历的风、夜、街道或离别。",
    ],
    stanzas: [
      {
        name: "上片 · 写处境",
        lines: [
          [7, "平韵", "从一种声音或景象开篇"],
          [7, "平韵", "写你的行动与姿态"],
          [7, "仄韵", "加入随身之物或阻力"],
          [2, "仄韵", "用短问或短答转折"],
          [7, "平韵", "说出此刻的选择"],
        ],
      },
      {
        name: "下片 · 写变化",
        lines: [
          [7, "仄韵", "环境变化触动身体"],
          [2, "仄韵", "写一个细微感受"],
          [7, "平韵", "出现新的光线或方向"],
          [7, "仄韵", "回看刚才走过之处"],
          [2, "仄韵", "作出最后的行动"],
          [7, "平韵", "以超越处境的判断收束"],
        ],
      },
    ],
  },
  qinyuanchun: {
    name: "沁园春",
    kicker: "LONG FORM · ADVANCED",
    subtitle: "双调一百十四字。上片铺陈宏阔景象，下片转入历史、人物或价值判断，适合写城市、时代与山河。",
    structureTitle: "上片 13 句，下片 12 句",
    structureCopy: "以 4 字句为骨架，穿插 5、7、8 字句；上片四个平韵，下片五个平韵，一韵到底。",
    methodTitle: "先铺景，再换片议论",
    methodCopy: "《沁园春·雪》先展开北国雪景，再由江山转向历史人物。你的作品也应在换片处完成视角升级。",
    rhymeTitle: "长调需要同一平韵贯穿",
    rhymeCopy: "韵脚较疏，宜先确定一个韵部，再准备 8 至 12 个可用韵字，避免写到后半片无字可押。",
    notes: [
      "范本用“北国风光”迅速确定空间与尺度，随后连续铺陈远景。学习的是镜头推进，不是复制雪景词语。",
      "“望”是领字：一个字统领后面的多组景物。创作时可用“看”“忆”“问”等，但要让其真正领起下文。",
      "换片先赞叹眼前对象，再转入人物或历史评说。末尾要回到当下，给出属于你自己的判断。",
      "本课只展示必要的结构性短语和章法分析，不提供受版权保护原作的全文。",
    ],
    stanzas: [
      {
        name: "上片 · 铺陈景象",
        lines: [
          [4, "", "点明地域或时令"],
          [4, "", "写第一层大景"],
          [4, "平韵", "写第二层动态景象"],
          [5, "", "用一字领起远望"],
          [4, "", "四字景物之一"],
          [4, "", "与上一句形成对偶"],
          [4, "平韵", "景象出现强烈变化"],
          [4, "", "比喻或拟人之一"],
          [4, "", "与上一句形成对偶"],
          [7, "平韵", "把景象推向最高处"],
          [3, "", "设想时间变化"],
          [5, "", "再用一字领起想象"],
          [4, "平韵", "以明丽画面收束上片"],
        ],
      },
      {
        name: "下片 · 转入议论",
        lines: [
          [6, "平韵", "赞叹所写对象并承上启下"],
          [8, "平韵", "由景物引出人物或历史"],
          [5, "", "一字领起第一组人物"],
          [4, "", "评价之一"],
          [4, "", "第二组人物"],
          [4, "平韵", "与上一评价形成对偶"],
          [4, "", "提出最突出的代表"],
          [4, "", "点明人物或群体"],
          [7, "平韵", "写其局限或特征"],
          [3, "", "用短句转回当下"],
          [5, "", "一字领起你的判断"],
          [4, "平韵", "落在今天与未来"],
        ],
      },
    ],
  },
};

const STORAGE_KEY = "shidou.teaching.drafts.v1";
const elements = {
  lessonOptions: document.querySelector("#lesson-options"),
  lessonKicker: document.querySelector("#lesson-kicker"),
  lessonTitle: document.querySelector("#lesson-title"),
  lessonSubtitle: document.querySelector("#lesson-subtitle"),
  structureTitle: document.querySelector("#structure-title"),
  structureCopy: document.querySelector("#structure-copy"),
  methodTitle: document.querySelector("#method-title"),
  methodCopy: document.querySelector("#method-copy"),
  rhymeTitle: document.querySelector("#rhyme-title"),
  rhymeCopy: document.querySelector("#rhyme-copy"),
  modelNotes: document.querySelector("#model-notes-content"),
  lineEditor: document.querySelector("#line-editor"),
  workTitle: document.querySelector("#work-title"),
  progressText: document.querySelector("#lesson-progress-text"),
  progressFill: document.querySelector("#lesson-progress-fill"),
  clearLesson: document.querySelector("#clear-lesson"),
  previewLesson: document.querySelector("#preview-lesson"),
  teachingPreview: document.querySelector("#teaching-preview"),
  previewTitle: document.querySelector("#ci-preview-title"),
  previewBody: document.querySelector("#ci-preview-body"),
  toastRegion: document.querySelector("#toast-region"),
};

function readDrafts() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

let drafts = readDrafts();
let activeLesson = "dingfengbo";

function lineCount(lesson) {
  return lesson.stanzas.reduce((total, stanza) => total + stanza.lines.length, 0);
}

function countCharacters(value) {
  return Array.from(value.replace(/[\s，。；、！？：,.!?;:“”‘’（）()《》—…-]/g, "")).length;
}

function currentDraft() {
  if (!drafts[activeLesson]) {
    drafts[activeLesson] = {
      title: "",
      lines: Array(lineCount(LESSONS[activeLesson])).fill(""),
    };
  }
  return drafts[activeLesson];
}

function saveDrafts() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    toast("浏览器存储空间不足，教学草稿暂时无法保存。");
  }
}

function toast(message) {
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  elements.toastRegion.append(item);
  window.setTimeout(() => item.remove(), 2600);
}

function renderLesson() {
  const lesson = LESSONS[activeLesson];
  const draft = currentDraft();
  elements.lessonOptions.querySelectorAll("[data-lesson]").forEach((button) => {
    const active = button.dataset.lesson === activeLesson;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-checked", String(active));
  });
  elements.lessonKicker.textContent = lesson.kicker;
  elements.lessonTitle.textContent = lesson.name;
  elements.lessonSubtitle.textContent = lesson.subtitle;
  elements.structureTitle.textContent = lesson.structureTitle;
  elements.structureCopy.textContent = lesson.structureCopy;
  elements.methodTitle.textContent = lesson.methodTitle;
  elements.methodCopy.textContent = lesson.methodCopy;
  elements.rhymeTitle.textContent = lesson.rhymeTitle;
  elements.rhymeCopy.textContent = lesson.rhymeCopy;
  elements.modelNotes.innerHTML = lesson.notes.map((note) => `<p>${note}</p>`).join("");
  elements.workTitle.value = draft.title;
  renderLineEditor();
  updateProgress();
  elements.teachingPreview.hidden = true;
}

function renderLineEditor() {
  const lesson = LESSONS[activeLesson];
  const draft = currentDraft();
  elements.lineEditor.innerHTML = "";
  let lineIndex = 0;
  lesson.stanzas.forEach((stanza) => {
    const heading = document.createElement("h3");
    heading.className = "stanza-heading";
    heading.textContent = stanza.name;
    elements.lineEditor.append(heading);

    stanza.lines.forEach(([target, rhyme, hint]) => {
      const index = lineIndex;
      const row = document.createElement("label");
      row.className = "ci-line";
      row.innerHTML = `
        <span class="line-number">${String(index + 1).padStart(2, "0")}</span>
        <input type="text" value="${escapeHtml(draft.lines[index] || "")}" placeholder="${hint}" aria-label="第 ${index + 1} 句，${target} 字" />
        <span class="line-rule"><strong>${target} 字 <span class="count">0</span>/${target}</strong><span class="${rhyme ? "rhyme" : ""}">${rhyme || "不押韵"}</span></span>
      `;
      const input = row.querySelector("input");
      input.addEventListener("input", () => {
        draft.lines[index] = input.value;
        saveDrafts();
        updateLineState(row, target, input.value);
        updateProgress();
      });
      elements.lineEditor.append(row);
      updateLineState(row, target, input.value);
      lineIndex += 1;
    });
  });
}

function updateLineState(row, target, value) {
  const count = countCharacters(value);
  const input = row.querySelector("input");
  row.querySelector(".count").textContent = String(count);
  input.classList.toggle("is-complete", count === target);
  input.classList.toggle("is-over", count > target);
}

function updateProgress() {
  const lesson = LESSONS[activeLesson];
  const draft = currentDraft();
  const targets = lesson.stanzas.flatMap((stanza) => stanza.lines.map((line) => line[0]));
  const complete = draft.lines.filter((line, index) => countCharacters(line) === targets[index]).length;
  elements.progressText.textContent = `已完成 ${complete} / ${targets.length} 句`;
  elements.progressFill.style.width = `${(complete / targets.length) * 100}%`;
}

function previewWork() {
  const lesson = LESSONS[activeLesson];
  const draft = currentDraft();
  if (!draft.lines.some((line) => line.trim())) {
    toast("先写下一句，再预览你的作品。");
    return;
  }
  elements.previewTitle.textContent = `${lesson.name}·${draft.title.trim() || "未题"}`;
  elements.previewBody.innerHTML = "";
  let lineIndex = 0;
  lesson.stanzas.forEach((stanza) => {
    const paragraph = document.createElement("p");
    paragraph.className = "preview-stanza";
    paragraph.textContent = stanza.lines
      .map(() => draft.lines[lineIndex++].trim())
      .filter(Boolean)
      .join("，");
    elements.previewBody.append(paragraph);
  });
  elements.teachingPreview.hidden = false;
  elements.teachingPreview.scrollIntoView({ behavior: "smooth" });
}

function clearWork() {
  if (!window.confirm(`确认清空当前《${LESSONS[activeLesson].name}》练习吗？`)) return;
  drafts[activeLesson] = {
    title: "",
    lines: Array(lineCount(LESSONS[activeLesson])).fill(""),
  };
  saveDrafts();
  renderLesson();
  toast("当前练习已清空。");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

elements.lessonOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button || button.dataset.lesson === activeLesson) return;
  activeLesson = button.dataset.lesson;
  renderLesson();
  document.querySelector(".lesson-board").scrollIntoView({ behavior: "smooth" });
});

elements.workTitle.addEventListener("input", () => {
  currentDraft().title = elements.workTitle.value.slice(0, 16);
  saveDrafts();
});
elements.clearLesson.addEventListener("click", clearWork);
elements.previewLesson.addEventListener("click", previewWork);

renderLesson();
