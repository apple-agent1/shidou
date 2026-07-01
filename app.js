"use strict";

const VOICES = {
  original: {
    name: "自由创作",
    source: "自由创作词库 · 主题协同生成",
    notice: "系统会先选择同一意象场景，再按两行诗的句法提供词语。",
    motifs: [
      ["黎明时", "我们", "沿着海岸", "拾起", "昨夜的月光", "而", "潮汐", "轻轻改写", "远方的名字"],
      ["黄昏以后", "旅人", "在山谷里", "等待", "第一颗星", "直到", "风", "带着回声", "穿过寂静"],
      ["雨停之前", "你", "隔着窗", "看见", "一盏微亮的灯", "仿佛", "影子", "正在练习", "如何拥抱"],
      ["多年以后", "孩子", "从旧信里", "认出", "春天的羽毛", "于是", "时间", "慢慢长成", "温柔的河流"],
      ["夜色深处", "无人", "向着天空", "呼唤", "失眠的月亮", "只有", "群星", "无声回答", "梦的方向"],
      ["此刻", "我", "在你的沉默中", "寻找", "一条透明的路", "而", "远方", "开始拥有", "我们的名字"],
    ],
  },
  pessoa: {
    name: "佩索阿式灵感",
    source: "部分意象转译自公版英文诗集《35 Sonnets》",
    notice: "佩索阿部分英文原作已进入公版；这里采用重新编排的短语转译，不复制现成中文译本。",
    motifs: [
      ["在词语之外", "另一个我", "隔着镜子", "寻找", "无法传达的灵魂", "而", "我们的梦", "彼此梦见", "更远的自己"],
      ["在未来的眼睛里", "抄写员", "翻开墨页", "辨认", "已经消失的我", "而", "时间", "比肉身更久", "保存一个名字"],
      ["当钟声沉默", "陌生人", "走过街角", "旁观", "自己的生活", "仿佛", "灵魂", "无限遥远", "住在身体之外"],
      ["失眠的午后", "梦中人", "倚着窗", "怀疑", "眼前的城市", "也许", "现实", "只是穿着", "梦的外衣"],
      ["醒来以前", "过客", "沿着河岸", "追随", "未曾说出的思想", "然而", "心", "仍旧无法", "抵达另一颗心"],
      ["无尽的现在", "我", "在空房间", "练习", "成为别人", "同时", "影子", "替我继续", "陌生的生活"],
    ],
  },
  borges: {
    name: "博尔赫斯式灵感",
    source: "原创致意词库 · 不含博尔赫斯原文摘录",
    notice: "博尔赫斯作品仍受版权保护，本模式只使用原创的迷宫、时间与镜像意象。",
    motifs: [
      ["永恒的一刻", "读者", "在无边图书馆", "翻开", "尚未写成的书", "于是", "每条岔路", "同时通往", "同一个清晨"],
      ["最后一夜", "盲者", "面对铜镜", "辨认", "另一个人的脸", "而", "镜中时间", "缓慢复制", "遗忘的姓名"],
      ["千年以前", "守门人", "穿过迷宫", "追随", "一枚古老硬币", "直到", "所有道路", "重新抵达", "最初的门"],
      ["南方的黄昏", "祖先", "握着匕首", "等待", "命定的决斗", "仿佛", "历史", "再次梦见", "相同的结局"],
      ["时间之外", "梦者", "在圆形庭院", "创造", "一个沉睡的人", "而", "火焰", "忽然证明", "谁也是梦"],
      ["某个清晨", "我", "凝视棋盘", "发现", "移动我们的手", "也许", "另一只手", "藏在更高处", "继续这盘棋"],
    ],
  },
  haizi: {
    name: "海子式灵感",
    source: "原创致意词库 · 不含海子原文摘录",
    notice: "海子作品仍受版权保护，本模式只使用原创的大地、麦田与太阳意象。",
    motifs: [
      ["太阳升起时", "孩子", "赤脚穿过", "唤醒", "沉睡的麦田", "于是", "每一粒种子", "开始拥有", "金色的名字"],
      ["黑夜尽头", "兄弟", "在山岗上", "点燃", "一束孤独的火", "直到", "远方", "长出明亮的", "村庄和河流"],
      ["春天以前", "农人", "用双手", "翻开", "寂静的大地", "而", "月亮", "整夜守着", "尚未出生的粮食"],
      ["丰收之后", "少女", "迎着风", "赶回", "白色的马群", "仿佛", "幸福", "正从地平线", "向人间奔跑"],
      ["黎明的河边", "我", "抱着石头", "听见", "大地的心跳", "只有", "太阳", "用滚烫光芒", "回答我的沉默"],
      ["明天到来时", "远方的人", "越过荒原", "寻找", "一座温暖的房子", "那里", "麦子", "会替我们", "保存整个夏天"],
    ],
  },
  neruda: {
    name: "聂鲁达式灵感",
    source: "原创致意词库 · 不含聂鲁达原文或译文摘录",
    notice: "聂鲁达作品及常见中文译本仍受保护，本模式只使用原创的海洋、果实与爱意意象。",
    motifs: [
      ["潮汐升起时", "爱人", "沿着海边", "拾起", "一枚潮湿贝壳", "而", "整个夜晚", "在你的掌心", "变成低声海浪"],
      ["今夜", "我", "隔着星空", "呼唤", "你遥远的名字", "直到", "黑色的船", "载着月光", "穿过所有距离"],
      ["漫长午后", "水手", "在港口边", "饮下", "一杯南方的酒", "仿佛", "孤独", "也会结出", "甜蜜的果实"],
      ["夏日深处", "你", "用温热肌肤", "触碰", "沉默的玫瑰", "于是", "空气", "开始燃烧", "我们之间的海"],
      ["黎明以前", "夜行者", "走过葡萄园", "聆听", "土地缓慢呼吸", "而", "每颗露珠", "都在等待", "太阳的亲吻"],
      ["秋天来临时", "沉默的人", "守着岛屿", "记住", "海盐和旧日光芒", "即使", "风", "反复带走", "未说出口的爱"],
    ],
  },
};

const DICE_META = [
  ["time", "开篇"],
  ["subject", "主体"],
  ["space", "场景"],
  ["action", "动作"],
  ["image", "意象"],
  ["relation", "转折"],
  ["state", "第二意象"],
  ["sense", "变化"],
  ["change", "收束"],
];

function getDice(voiceId = "original") {
  const voice = VOICES[voiceId] || VOICES.original;
  return DICE_META.map(([id, category], index) => ({
    id,
    category,
    faces: voice.motifs.map((motif) => motif[index]),
  }));
}

const STORAGE_KEYS = {
  draft: "shidou.draft.v2",
  saved: "shidou.saved.v1",
};

const MAX_SAVED = 50;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const elements = {
  diceStage: document.querySelector("#dice-stage"),
  stageEmpty: document.querySelector("#stage-empty"),
  rollButton: document.querySelector("#roll-button"),
  rollHint: document.querySelector("#roll-hint"),
  lockTip: document.querySelector("#lock-tip"),
  poemCanvas: document.querySelector("#poem-canvas"),
  canvasPlaceholder: document.querySelector("#canvas-placeholder"),
  discardZone: document.querySelector("#discard-zone"),
  punctuationTools: document.querySelector("#punctuation-tools"),
  addBreak: document.querySelector("#add-break"),
  resetOrder: document.querySelector("#reset-order"),
  clearPoem: document.querySelector("#clear-poem"),
  previewButton: document.querySelector("#preview-button"),
  wordCount: document.querySelector("#word-count"),
  previewDialog: document.querySelector("#preview-dialog"),
  imageDialog: document.querySelector("#image-dialog"),
  galleryDialog: document.querySelector("#gallery-dialog"),
  guideDialog: document.querySelector("#guide-dialog"),
  poemCard: document.querySelector("#poem-card"),
  cardPoem: document.querySelector("#card-poem"),
  cardAuthor: document.querySelector("#card-author"),
  cardDate: document.querySelector("#card-date"),
  authorInput: document.querySelector("#author-input"),
  showQr: document.querySelector("#show-qr"),
  saveButton: document.querySelector("#save-button"),
  saveStatus: document.querySelector("#save-status"),
  exportButton: document.querySelector("#export-button"),
  exportedImage: document.querySelector("#exported-image"),
  downloadImage: document.querySelector("#download-image"),
  shareImage: document.querySelector("#share-image"),
  newRoundButton: document.querySelector("#new-round-button"),
  openGallery: document.querySelector("#open-gallery"),
  openGuide: document.querySelector("#open-guide"),
  galleryGrid: document.querySelector("#gallery-grid"),
  savedCount: document.querySelector("#saved-count"),
  toastRegion: document.querySelector("#toast-region"),
  voiceOptions: document.querySelector("#voice-options"),
  cardVoice: document.querySelector("#card-voice"),
  voiceSource: document.querySelector("#voice-source"),
  voiceCopyright: document.querySelector("#voice-copyright"),
  voiceSourceLink: document.querySelector("#voice-source-link"),
  creationStatus: document.querySelector("#creation-status"),
  progressFill: document.querySelector("#progress-fill"),
  creationSteps: document.querySelectorAll(".creation-steps li"),
};

function makeDefaultDraft() {
  const dice = getDice();
  return {
    version: 4,
    voice: "original",
    motifIndex: null,
    hasRolled: false,
    diceResults: dice.map((die) => ({
      dieId: die.id,
      faceIndex: 0,
      locked: false,
    })),
    items: [],
    discarded: [],
    initialOrder: dice.map((die) => die.id),
    diceOrder: dice.map((die) => die.id),
    selectedItemId: null,
    theme: "mist",
    author: "",
    showQr: true,
    savedPoemId: null,
    updatedAt: Date.now(),
  };
}

function sanitizeDraft(input) {
  const fallback = makeDefaultDraft();
  if (!input || ![2, 3, 4].includes(input.version) || !Array.isArray(input.diceResults)) {
    return fallback;
  }

  const voice = VOICES[input.voice] ? input.voice : "original";
  const dice = getDice(voice);
  const validDiceIds = new Set(dice.map((die) => die.id));
  const resultMap = new Map(input.diceResults.map((result) => [result.dieId, result]));
  const diceResults = dice.map((die) => {
    const result = resultMap.get(die.id);
    const faceIndex = Number.isInteger(result?.faceIndex)
      ? Math.min(Math.max(result.faceIndex, 0), die.faces.length - 1)
      : 0;
    return { dieId: die.id, faceIndex, locked: Boolean(result?.locked) };
  });

  const seenWords = new Set();
  const items = Array.isArray(input.items)
    ? input.items.flatMap((item) => {
        if (item?.type === "word" && validDiceIds.has(item.dieId) && !seenWords.has(item.dieId)) {
          seenWords.add(item.dieId);
          return [{ id: String(item.id || uid("word")), type: "word", dieId: item.dieId }];
        }
        if (item?.type === "punct" && ["，", "。", "；", "？", "！", "……"].includes(item.value)) {
          return [{ id: String(item.id || uid("punct")), type: "punct", value: item.value }];
        }
        if (item?.type === "break") {
          return [{ id: String(item.id || uid("break")), type: "break" }];
        }
        return [];
      })
    : [];

  const discarded = Array.isArray(input.discarded)
    ? input.discarded.filter((id) => validDiceIds.has(id) && !seenWords.has(id))
    : [];
  const inputDiceOrder = Array.isArray(input.diceOrder)
    ? input.diceOrder.filter((id) => validDiceIds.has(id))
    : [];
  const diceOrder =
    inputDiceOrder.length === dice.length && new Set(inputDiceOrder).size === dice.length
      ? inputDiceOrder
      : shuffleArray(dice.map((die) => die.id));

  if (input.hasRolled) {
    dice.forEach((die) => {
      if (!seenWords.has(die.id) && !discarded.includes(die.id)) {
        discarded.push(die.id);
      }
    });
  }

  return {
    ...fallback,
    version: 4,
    voice,
    motifIndex: Number.isInteger(input.motifIndex) ? input.motifIndex : null,
    hasRolled: Boolean(input.hasRolled),
    diceResults,
    items,
    discarded,
    initialOrder: dice.map((die) => die.id),
    diceOrder,
    theme: ["mist", "night", "paper"].includes(input.theme) ? input.theme : "mist",
    author: typeof input.author === "string" ? input.author.slice(0, 12) : "",
    showQr: input.showQr !== false,
    savedPoemId: typeof input.savedPoemId === "string" ? input.savedPoemId : null,
    updatedAt: Number(input.updatedAt) || Date.now(),
  };
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    toast("浏览器存储空间不足，暂时无法保存。");
    return false;
  }
}

let draft = sanitizeDraft(readJson(STORAGE_KEYS.draft, null));
writeJson(STORAGE_KEYS.draft, draft);
let savedPoems = readJson(STORAGE_KEYS.saved, []);
if (!Array.isArray(savedPoems)) savedPoems = [];
let isRolling = false;
let dragState = null;
let exportedImageFile = null;
let exportedImageUrl = null;

function uid(prefix) {
  if (window.crypto?.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getDie(dieId) {
  return getDice(draft.voice).find((die) => die.id === dieId);
}

function getResult(dieId) {
  return draft.diceResults.find((result) => result.dieId === dieId);
}

function getWord(dieId) {
  const die = getDie(dieId);
  const result = getResult(dieId);
  return die?.faces[result?.faceIndex ?? 0] || "";
}

function randomFaceIndex(die) {
  if (window.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % die.faces.length;
  }
  return Math.floor(Math.random() * die.faces.length);
}

function nextMotifIndex(currentIndex = null) {
  const motifCount = VOICES[draft.voice]?.motifs.length || 6;
  if (motifCount <= 1) return 0;
  let next = randomIndex(motifCount);
  while (next === currentIndex) next = randomIndex(motifCount);
  return next;
}

function randomIndex(length) {
  if (window.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % length;
  }
  return Math.floor(Math.random() * length);
}

function shuffledDieIds() {
  const ids = getDice(draft.voice).map((die) => die.id);
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]];
  }
  return ids;
}

function saveDraft() {
  draft.updatedAt = Date.now();
  writeJson(STORAGE_KEYS.draft, draft);
}

function toast(message) {
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  elements.toastRegion.append(item);
  window.setTimeout(() => item.remove(), 3000);
}

function icon(name) {
  const paths = {
    lock: '<rect x="6" y="10" width="12" height="9" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/>',
    unlock: '<rect x="6" y="10" width="12" height="9" rx="2"/><path d="M9 10V7.5a3.5 3.5 0 0 1 6.4-2"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${paths[name] || ""}</svg>`;
}

function renderDice(rollingIds = new Set()) {
  elements.diceStage.innerHTML = "";
  if (!draft.hasRolled) {
    elements.diceStage.append(elements.stageEmpty);
    elements.stageEmpty.hidden = false;
    return;
  }

  elements.stageEmpty.hidden = true;
  draft.diceOrder.forEach((dieId) => {
    const die = getDie(dieId);
    const result = getResult(die.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `die${result.locked ? " is-locked" : ""}${rollingIds.has(die.id) ? " is-rolling" : ""}`;
    button.dataset.dieId = die.id;
    button.setAttribute(
      "aria-label",
      `词语骰子：${getWord(die.id)}，${result.locked ? "已锁定" : "未锁定"}`
    );
    button.innerHTML = `
      <span class="die-lock">${icon(result.locked ? "lock" : "unlock")}</span>
      <span class="die-word">${escapeHtml(getWord(die.id))}</span>
    `;
    button.addEventListener("click", () => toggleLock(die.id));
    elements.diceStage.append(button);
  });
}

function toggleLock(dieId) {
  if (!draft.hasRolled || isRolling) return;
  const result = getResult(dieId);
  result.locked = !result.locked;
  saveDraft();
  renderDice();
  elements.lockTip.textContent = result.locked
    ? `已锁定“${getWord(dieId)}”，下次投掷会保留它。`
    : `已解锁“${getWord(dieId)}”。`;
}

async function rollDice() {
  if (isRolling) return;
  const rollable = draft.diceResults.filter((result) => !result.locked);
  if (draft.hasRolled && rollable.length === 0) {
    toast("九颗骰子都已锁定，请先解锁至少一颗。");
    return;
  }

  isRolling = true;
  elements.rollButton.disabled = true;
  elements.rollButton.querySelector("span").textContent = "词语正在落下";

  if (!draft.hasRolled) {
    draft.hasRolled = true;
    draft.items = [];
    draft.discarded = shuffledDieIds();
  }

  const rollingIds = new Set(rollable.map((result) => result.dieId));
  const motifIndex = nextMotifIndex(draft.motifIndex);
  const duration = reduceMotion.matches ? 80 : 820;
  const timers = [];

  if (!reduceMotion.matches) {
    rollable.forEach((result, index) => {
      const die = getDie(result.dieId);
      timers.push(
        window.setInterval(() => {
          result.faceIndex = randomFaceIndex(die);
          const word = elements.diceStage.querySelector(`[data-die-id="${die.id}"] .die-word`);
          if (word) word.textContent = getWord(die.id);
        }, 85 + index * 3)
      );
    });
  }

  renderDice(rollingIds);
  await new Promise((resolve) => window.setTimeout(resolve, duration));
  timers.forEach(window.clearInterval);
  rollable.forEach((result) => {
    result.faceIndex = motifIndex;
  });
  draft.motifIndex = motifIndex;
  draft.diceOrder = shuffledDisplayOrder(draft.diceOrder);

  isRolling = false;
  elements.rollButton.disabled = false;
  elements.rollButton.querySelector("span").textContent = "重掷未锁定的词";
  elements.rollHint.textContent = "词语来自同一意象场景；锁定喜欢的部分，再重掷其余。";
  elements.lockTip.textContent = "点击任意骰子，可以锁定或解锁它。";
  saveDraft();
  renderAll();
}

function renderPoem() {
  elements.poemCanvas.innerHTML = "";
  const hasItems = draft.items.length > 0;

  if (!hasItems) {
    elements.canvasPlaceholder.hidden = false;
    elements.poemCanvas.append(elements.canvasPlaceholder);
  } else {
    elements.canvasPlaceholder.hidden = true;
    draft.items.forEach((item) => {
      elements.poemCanvas.append(createTokenElement(item));
    });
  }

  elements.discardZone.innerHTML = "";
  if (!draft.discarded.length) {
    const empty = document.createElement("span");
    empty.className = "discard-empty";
    empty.textContent = "还没有被放下的词";
    elements.discardZone.append(empty);
  } else {
    draft.discarded.forEach((dieId) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "discard-word";
      button.innerHTML = `<span>${escapeHtml(getWord(dieId))}</span>`;
      button.title = "加入诗句末尾";
      button.setAttribute("aria-label", `${getWord(dieId)}，加入诗句`);
      button.addEventListener("click", () => restoreDiscarded(dieId));
      elements.discardZone.append(button);
    });
  }

  const usedCount = draft.items.filter((item) => item.type === "word").length;
  elements.wordCount.textContent = `已使用 ${usedCount} / 9 个词语`;
  elements.previewButton.disabled = usedCount < 5;
  elements.resetOrder.disabled = !draft.hasRolled;
  elements.clearPoem.disabled = usedCount === 0;
  renderCreationProgress(usedCount);
}

function renderCreationProgress(usedCount) {
  let activeStage = "begin";
  let status = "从词语池选择一个让你心动的开头";
  if (!draft.hasRolled) {
    status = "等待词语落下";
  } else if (usedCount >= 7) {
    activeStage = "finish";
    status = "诗已经有了方向，可以预览或继续打磨";
  } else if (usedCount >= 4) {
    activeStage = "turn";
    status = "加入转折、标点或换行，让诗产生呼吸";
  } else if (usedCount > 0) {
    status = "继续选择意象与动作，建立第一句话";
  }

  elements.creationStatus.textContent = status;
  elements.progressFill.style.width = `${Math.min(100, (usedCount / 7) * 100)}%`;
  const stages = ["begin", "turn", "finish"];
  const activeIndex = stages.indexOf(activeStage);
  elements.creationSteps.forEach((step, index) => {
    step.classList.toggle("is-active", index === activeIndex && draft.hasRolled);
    step.classList.toggle("is-complete", draft.hasRolled && index < activeIndex);
  });
}

function createTokenElement(item) {
  const token = document.createElement("div");
  token.dataset.itemId = item.id;
  token.className = `poem-token ${item.type}-token${draft.selectedItemId === item.id ? " is-selected" : ""}`;

  if (item.type === "word") {
    token.tabIndex = 0;
    token.setAttribute("role", "button");
    token.setAttribute("aria-label", `${getWord(item.dieId)}，可拖动排序`);
    const text = document.createElement("span");
    text.textContent = getWord(item.dieId);
    token.append(text, createRemoveButton(item, "暂不使用"));
  } else if (item.type === "punct") {
    token.tabIndex = 0;
    token.setAttribute("aria-label", `标点 ${item.value}，可拖动排序`);
    const text = document.createElement("span");
    text.textContent = item.value;
    token.append(text, createRemoveButton(item, "删除标点"));
  } else {
    token.tabIndex = 0;
    token.setAttribute("aria-label", "换行，可拖动排序");
    const text = document.createElement("span");
    text.textContent = "换行";
    token.append(text, createRemoveButton(item, "删除换行"));
  }

  token.addEventListener("click", (event) => {
    if (event.target.closest(".token-remove") || dragState?.moved) return;
    draft.selectedItemId = draft.selectedItemId === item.id ? null : item.id;
    saveDraft();
    renderPoem();
  });
  token.addEventListener("pointerdown", beginDrag);
  return token;
}

function createRemoveButton(item, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "token-remove";
  button.setAttribute("aria-label", label);
  button.innerHTML = icon("close");
  button.addEventListener("pointerdown", (event) => event.stopPropagation());
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    removeItem(item.id);
  });
  return button;
}

function beginDrag(event) {
  if (event.button !== 0 || event.target.closest(".token-remove")) return;
  const source = event.currentTarget;
  const itemId = source.dataset.itemId;
  dragState = {
    pointerId: event.pointerId,
    itemId,
    source,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    ghost: null,
  };
  window.addEventListener("pointermove", moveDrag);
  window.addEventListener("pointerup", endDrag);
  window.addEventListener("pointercancel", endDrag);
  window.addEventListener("mouseup", endDragFallback);
  window.addEventListener("blur", endDragFallback);
}

function moveDrag(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const distance = Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY);
  if (!dragState.moved && distance < 8) return;

  if (!dragState.moved) {
    dragState.moved = true;
    dragState.ghost = dragState.source.cloneNode(true);
    dragState.ghost.classList.add("drag-ghost");
    dragState.ghost.style.width = `${dragState.source.offsetWidth}px`;
    dragState.ghost.querySelector(".token-remove")?.remove();
    document.body.append(dragState.ghost);
    dragState.source.classList.add("drag-source");
  }

  event.preventDefault();
  dragState.ghost.style.left = `${event.clientX + 12}px`;
  dragState.ghost.style.top = `${event.clientY + 12}px`;

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".poem-token");
  if (!target || target.dataset.itemId === dragState.itemId) return;

  const sourceIndex = draft.items.findIndex((item) => item.id === dragState.itemId);
  let targetIndex = draft.items.findIndex((item) => item.id === target.dataset.itemId);
  const rect = target.getBoundingClientRect();
  const after = target.classList.contains("break-token")
    ? event.clientY > rect.top + rect.height / 2
    : event.clientX > rect.left + rect.width / 2;

  const [moved] = draft.items.splice(sourceIndex, 1);
  if (sourceIndex < targetIndex) targetIndex -= 1;
  draft.items.splice(targetIndex + (after ? 1 : 0), 0, moved);
  if (after) {
    target.after(dragState.source);
  } else {
    target.before(dragState.source);
  }
}

function endDrag(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  finishDrag();
}

function endDragFallback() {
  if (!dragState) return;
  finishDrag();
}

function finishDrag() {
  const moved = dragState.moved;
  window.removeEventListener("pointermove", moveDrag);
  window.removeEventListener("pointerup", endDrag);
  window.removeEventListener("pointercancel", endDrag);
  window.removeEventListener("mouseup", endDragFallback);
  window.removeEventListener("blur", endDragFallback);
  dragState.ghost?.remove();
  dragState.source?.classList.remove("drag-source");
  if (moved) {
    saveDraft();
    renderPoem();
  }
  window.setTimeout(() => {
    dragState = null;
  }, 0);
}

function removeItem(itemId) {
  const index = draft.items.findIndex((item) => item.id === itemId);
  if (index < 0) return;
  const [item] = draft.items.splice(index, 1);
  if (item.type === "word" && !draft.discarded.includes(item.dieId)) {
    draft.discarded.push(item.dieId);
  }
  if (draft.selectedItemId === itemId) draft.selectedItemId = null;
  saveDraft();
  renderPoem();
}

function restoreDiscarded(dieId) {
  draft.discarded = draft.discarded.filter((id) => id !== dieId);
  draft.items.push({ id: uid("word"), type: "word", dieId });
  saveDraft();
  renderPoem();
}

function insertAfterSelection(item) {
  const selectedIndex = draft.items.findIndex((candidate) => candidate.id === draft.selectedItemId);
  const index = selectedIndex >= 0 ? selectedIndex + 1 : draft.items.length;
  draft.items.splice(index, 0, item);
  draft.selectedItemId = item.id;
  saveDraft();
  renderPoem();
}

function resetOrder() {
  if (!draft.hasRolled) return;
  draft.discarded = shuffleArray(draft.discarded);
  saveDraft();
  renderPoem();
  toast("词语池已经重新打乱。");
}

function shuffleArray(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function shuffledDisplayOrder(previousOrder = []) {
  const ids = getDice(draft.voice).map((die) => die.id);
  let result = shuffleArray(ids);
  if (ids.length > 1 && result.every((id, index) => id === previousOrder[index])) {
    result = [...result.slice(1), result[0]];
  }
  return result;
}

function clearPoem() {
  if (!draft.hasRolled) return;
  draft.discarded = shuffledDieIds();
  draft.items = [];
  draft.selectedItemId = null;
  saveDraft();
  renderPoem();
}

async function startNewRound() {
  const voice = draft.voice;
  closeDialog(elements.previewDialog);
  draft = makeDefaultDraft();
  draft.voice = voice;
  saveDraft();
  renderAll();
  document.querySelector(".workspace").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
  await rollDice();
}

function poemLines(items = draft.items) {
  const lines = [[]];
  items.forEach((item) => {
    if (item.type === "break") {
      if (lines.at(-1).length || lines.length === 1) lines.push([]);
      return;
    }
    if (item.type === "word") lines.at(-1).push(getWord(item.dieId));
    if (item.type === "punct") lines.at(-1).push(item.value);
  });
  return lines
    .map((line) => line.join(""))
    .filter((line) => line.trim().length > 0);
}

function formatDate(timestamp = Date.now()) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(timestamp))
    .replaceAll("/", ".");
}

function openPreview() {
  const usedCount = draft.items.filter((item) => item.type === "word").length;
  if (usedCount < 5) {
    toast("至少使用五个词语，让这首诗拥有更完整的方向。");
    return;
  }
  updatePreview();
  elements.previewDialog.showModal();
  document.body.style.overflow = "hidden";
}

function updatePreview() {
  elements.cardPoem.innerHTML = "";
  poemLines().forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    elements.cardPoem.append(p);
  });
  elements.authorInput.value = draft.author;
  elements.showQr.checked = draft.showQr;
  elements.cardAuthor.textContent = draft.author.trim() || "佚名";
  elements.cardDate.textContent = formatDate();
  elements.cardVoice.textContent = VOICES[draft.voice]?.name || VOICES.original.name;
  elements.poemCard.className = `poem-card theme-${draft.theme}`;
  const themeInput = document.querySelector(`input[name="theme"][value="${draft.theme}"]`);
  if (themeInput) themeInput.checked = true;
  updateSaveState();
}

function closeDialog(dialog) {
  dialog.close();
  if (
    ![elements.previewDialog, elements.imageDialog, elements.galleryDialog, elements.guideDialog].some(
      (item) => item.open
    )
  ) {
    document.body.style.overflow = "";
  }
}

function poemSignature(poem = draft) {
  return JSON.stringify({
    voice: poem.voice || poem.draft?.voice || "original",
    theme: poem.theme,
    author: (poem.author || "").trim(),
    showQr: poem.showQr ?? poem.draft?.showQr ?? true,
    lines: poem.lines || poemLines(poem.items),
  });
}

function updateSaveState() {
  const saved = savedPoems.find((poem) => poem.id === draft.savedPoemId);
  elements.saveButton.querySelector("span").textContent = saved ? "更新我的作品" : "保存到我的作品";
  if (!saved) {
    elements.saveStatus.textContent = "尚未保存，仅保留在当前浏览器的草稿中。";
  } else if (poemSignature(saved) === poemSignature(draft)) {
    elements.saveStatus.textContent = "已保存到当前浏览器的“我的作品”。";
  } else {
    elements.saveStatus.textContent = "内容有修改，再次保存会更新这首作品。";
  }
}

function savePoem() {
  const existingIndex = savedPoems.findIndex((poem) => poem.id === draft.savedPoemId);
  if (existingIndex < 0 && savedPoems.length >= MAX_SAVED) {
    toast("作品集已达到 50 首上限，请删除旧作品后再保存。");
    return;
  }
  const id = existingIndex >= 0 ? savedPoems[existingIndex].id : uid("poem");
  const createdAt = existingIndex >= 0 ? savedPoems[existingIndex].createdAt : Date.now();
  const poem = {
    id,
    createdAt,
    theme: draft.theme,
    author: draft.author.trim(),
    lines: poemLines(),
    voice: draft.voice,
    draft: structuredCloneSafe({ ...draft, savedPoemId: id }),
  };
  const nextSavedPoems = savedPoems.slice();
  if (existingIndex >= 0) {
    nextSavedPoems.splice(existingIndex, 1);
  }
  nextSavedPoems.unshift(poem);
  if (writeJson(STORAGE_KEYS.saved, nextSavedPoems)) {
    savedPoems = nextSavedPoems;
    draft.savedPoemId = id;
    saveDraft();
    updateSavedCount();
    renderGallery();
    updateSaveState();
    toast(existingIndex >= 0 ? "已更新“我的作品”中的这首诗。" : "已保存到“我的作品”。");
  }
}

function structuredCloneSafe(value) {
  if (window.structuredClone) return window.structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function renderGallery() {
  elements.galleryGrid.innerHTML = "";
  if (!savedPoems.length) {
    const empty = document.createElement("div");
    empty.className = "gallery-empty";
    empty.innerHTML = "<strong>这里还没有诗</strong><span>完成第一首作品后，它会留在这里。</span>";
    elements.galleryGrid.append(empty);
    return;
  }

  savedPoems.forEach((poem) => {
    const card = document.createElement("article");
    card.className = `saved-card theme-${poem.theme || "mist"}`;
    const lines = Array.isArray(poem.lines) ? poem.lines : [];
    const poemContent = lines
      .slice(0, 6)
      .map((line) => `<p>${escapeHtml(line)}</p>`)
      .join("");
    card.innerHTML = `
      <div class="card-grain" aria-hidden="true"></div>
      <div class="saved-poem">${poemContent}</div>
      <div class="saved-footer">
        <div>
          <small>${escapeHtml(poem.author || "佚名")}</small>
          <small>${formatDate(poem.createdAt)}</small>
        </div>
        <div class="saved-actions">
          <button type="button" data-action="edit" aria-label="继续编辑">编辑</button>
          <button type="button" data-action="delete" aria-label="删除作品">删除</button>
        </div>
      </div>
    `;
    card.querySelector('[data-action="edit"]').addEventListener("click", () => loadSavedPoem(poem));
    card.querySelector('[data-action="delete"]').addEventListener("click", () => deleteSavedPoem(poem.id));
    elements.galleryGrid.append(card);
  });
}

function loadSavedPoem(poem) {
  draft = sanitizeDraft(poem.draft);
  draft.savedPoemId = poem.id;
  draft.theme = poem.theme || draft.theme;
  draft.author = poem.author || "";
  saveDraft();
  renderAll();
  closeDialog(elements.galleryDialog);
  document.querySelector(".workspace").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
  toast("作品已载入，可以继续编辑。");
}

function deleteSavedPoem(poemId) {
  if (!window.confirm("确认删除这首本地作品吗？此操作无法撤销。")) return;
  const nextSavedPoems = savedPoems.filter((poem) => poem.id !== poemId);
  if (!writeJson(STORAGE_KEYS.saved, nextSavedPoems)) return;
  savedPoems = nextSavedPoems;
  if (draft.savedPoemId === poemId) {
    draft.savedPoemId = null;
    saveDraft();
  }
  updateSavedCount();
  renderGallery();
  updateSaveState();
  toast("作品已删除。");
}

function updateSavedCount() {
  elements.savedCount.textContent = String(savedPoems.length);
}

function openGallery() {
  renderGallery();
  elements.galleryDialog.showModal();
  document.body.style.overflow = "hidden";
}

async function exportPng() {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1440;
  const context = canvas.getContext("2d");
  const theme = draft.theme;
  paintCanvasBackground(context, theme);
  paintCanvasGrain(context, theme);

  const colors = {
    mist: { text: "#23463a", faint: "rgba(35,70,58,.62)" },
    night: { text: "#f0eee6", faint: "rgba(240,238,230,.62)" },
    paper: { text: "#342f29", faint: "rgba(52,47,41,.62)" },
  }[theme];

  context.textBaseline = "top";
  context.fillStyle = colors.text;
  context.font = '600 25px "PingFang SC", "Microsoft YaHei", sans-serif';
  context.fillText("诗 骰", 116, 112);
  const date = formatDate();
  const byline = `${draft.author.trim() || "佚名"} · ${date}`;
  context.font = '400 22px "PingFang SC", "Microsoft YaHei", sans-serif';
  const bylineWidth = context.measureText(byline).width;
  context.fillStyle = colors.faint;
  context.fillText(byline, 964 - bylineWidth, 116);

  const lines = poemLines();
  const fontSize = lines.join("").length > 64 ? 54 : lines.join("").length > 38 ? 62 : 70;
  context.font = `500 ${fontSize}px "Songti SC", "STSong", "Noto Serif CJK SC", serif`;
  const maxWidth = 848;
  const lineHeight = Math.round(fontSize * 1.48);
  const wrapped = lines.flatMap((line, index) => {
    const parts = wrapCanvasText(context, line, maxWidth);
    return index < lines.length - 1 ? [...parts, null] : parts;
  });
  const stanzaGap = Math.round(fontSize * 0.48);
  const totalHeight = wrapped.reduce(
    (height, line) => height + (line === null ? stanzaGap : lineHeight),
    0
  );
  let y = Math.max(310, (canvas.height - totalHeight) / 2 - 20);
  wrapped.forEach((line) => {
    if (line === null) {
      y += stanzaGap;
      return;
    }
    context.fillText(line, 116, y);
    y += lineHeight;
  });

  context.fillStyle = colors.faint;
  context.font = '400 21px "PingFang SC", "Microsoft YaHei", sans-serif';
  if (draft.showQr) {
    paintCanvasQr(context, creationUrl(), 116, 1118, 180);
  }
  const voice = VOICES[draft.voice]?.name || VOICES.original.name;
  const voiceWidth = context.measureText(voice).width;
  context.fillText(voice, 964 - voiceWidth, 1280);

  try {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("PNG generation failed");
    if (exportedImageUrl) URL.revokeObjectURL(exportedImageUrl);
    const fileName = `诗骰-${new Date().toISOString().slice(0, 10)}.png`;
    exportedImageUrl = URL.createObjectURL(blob);
    exportedImageFile = new File([blob], fileName, { type: "image/png" });
    elements.exportedImage.src = exportedImageUrl;
    elements.downloadImage.href = exportedImageUrl;
    elements.downloadImage.download = fileName;
    const canShare =
      typeof navigator.share === "function" &&
      typeof navigator.canShare === "function" &&
      navigator.canShare({ files: [exportedImageFile] });
    elements.shareImage.hidden = !canShare;
    elements.imageDialog.showModal();
    document.body.style.overflow = "hidden";
    toast("图片已生成，可以下载或长按保存。");
  } catch {
    toast("图片生成失败，请稍后重试。");
  }
}

function creationUrl() {
  return new URL("./", window.location.href).href;
}

function paintCanvasQr(context, url, x, y, size) {
  if (typeof qrcode !== "function") throw new Error("QR generator unavailable");
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  const count = qr.getModuleCount();
  const quietZone = 2;
  const total = count + quietZone * 2;
  const moduleSize = size / total;
  const radius = 14;
  context.save();
  context.fillStyle = "#ffffff";
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + size - radius, y);
  context.quadraticCurveTo(x + size, y, x + size, y + radius);
  context.lineTo(x + size, y + size - radius);
  context.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
  context.lineTo(x + radius, y + size);
  context.quadraticCurveTo(x, y + size, x, y + size - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
  context.fill();
  context.fillStyle = "#111b18";
  for (let row = 0; row < count; row += 1) {
    for (let column = 0; column < count; column += 1) {
      if (!qr.isDark(row, column)) continue;
      context.fillRect(
        x + (column + quietZone) * moduleSize,
        y + (row + quietZone) * moduleSize,
        moduleSize + 0.25,
        moduleSize + 0.25
      );
    }
  }
  context.restore();
}

async function shareExportedImage() {
  if (!exportedImageFile) return;
  try {
    await navigator.share({
      files: [exportedImageFile],
      title: "诗骰作品",
    });
  } catch (error) {
    if (error.name !== "AbortError") toast("系统分享未能打开，请使用下载或长按保存。");
  }
}

function paintCanvasBackground(context, theme) {
  if (theme === "mist") {
    const gradient = context.createLinearGradient(0, 0, 1080, 1440);
    gradient.addColorStop(0, "#dcebe5");
    gradient.addColorStop(0.58, "#f7faf7");
    gradient.addColorStop(1, "#c8ddd3");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1440);
    const glow = context.createRadialGradient(810, 230, 0, 810, 230, 420);
    glow.addColorStop(0, "rgba(255,255,255,.92)");
    glow.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 1080, 800);
  } else if (theme === "night") {
    const gradient = context.createLinearGradient(0, 0, 1080, 1440);
    gradient.addColorStop(0, "#101b23");
    gradient.addColorStop(0.58, "#22353d");
    gradient.addColorStop(1, "#0e161b");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1080, 1440);
    const glow = context.createRadialGradient(780, 190, 0, 780, 190, 390);
    glow.addColorStop(0, "rgba(104,139,151,.42)");
    glow.addColorStop(1, "rgba(104,139,151,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, 1080, 750);
  } else {
    context.fillStyle = "#eee5d7";
    context.fillRect(0, 0, 1080, 1440);
    const wash = context.createLinearGradient(0, 0, 1080, 0);
    wash.addColorStop(0, "rgba(117,83,42,.08)");
    wash.addColorStop(0.45, "rgba(117,83,42,0)");
    wash.addColorStop(1, "rgba(255,255,255,.18)");
    context.fillStyle = wash;
    context.fillRect(0, 0, 1080, 1440);
  }
}

function paintCanvasGrain(context, theme) {
  const grainCanvas = document.createElement("canvas");
  grainCanvas.width = 1080;
  grainCanvas.height = 1440;
  const grainContext = grainCanvas.getContext("2d");
  const image = grainContext.createImageData(1080, 1440);
  const alpha = theme === "night" ? 7 : 5;
  for (let index = 0; index < image.data.length; index += 4) {
    const shade = Math.random() > 0.5 ? 255 : 0;
    image.data[index] = shade;
    image.data[index + 1] = shade;
    image.data[index + 2] = shade;
    image.data[index + 3] = alpha;
  }
  grainContext.putImageData(image, 0, 0);
  context.drawImage(grainCanvas, 0, 0);
}

function wrapCanvasText(context, text, maxWidth) {
  const chars = Array.from(text);
  const lines = [];
  let current = "";
  chars.forEach((char) => {
    const test = current + char;
    if (current && context.measureText(test).width > maxWidth) {
      lines.push(current);
      current = char;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  renderDice();
  renderPoem();
  updateSavedCount();
  elements.rollButton.querySelector("span").textContent = draft.hasRolled
    ? "重掷未锁定的词"
    : "掷出一首诗";
  elements.rollHint.textContent = draft.hasRolled
    ? "词语来自同一意象场景；锁定喜欢的部分，再重掷其余。"
    : "系统会协同选择意象与句法，先为你生成一首可编辑的两行诗。";
  renderVoiceOptions();
  updateSaveState();
}

function renderVoiceOptions() {
  elements.voiceOptions.querySelectorAll("[data-voice]").forEach((button) => {
    const active = button.dataset.voice === draft.voice;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-checked", String(active));
  });
  const voice = VOICES[draft.voice] || VOICES.original;
  elements.voiceSource.textContent = voice.source;
  elements.voiceCopyright.textContent = voice.notice;
  elements.voiceSourceLink.hidden = draft.voice !== "pessoa";
}

function selectVoice(voice) {
  if (!VOICES[voice] || voice === draft.voice) return;
  if (draft.hasRolled && !window.confirm("切换诗意气质会开始新一轮，当前未保存的排列将被清空。继续吗？")) {
    return;
  }
  draft = makeDefaultDraft();
  draft.voice = voice;
  draft.diceResults = getDice(voice).map((die) => ({
    dieId: die.id,
    faceIndex: 0,
    locked: false,
  }));
  draft.initialOrder = getDice(voice).map((die) => die.id);
  draft.diceOrder = shuffleArray(draft.initialOrder);
  saveDraft();
  renderAll();
  toast(`已切换为“${VOICES[voice].name}”，词语均为原创灵感。`);
}

elements.rollButton.addEventListener("click", rollDice);
elements.voiceOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-voice]");
  if (button) selectVoice(button.dataset.voice);
});
elements.punctuationTools.addEventListener("click", (event) => {
  const button = event.target.closest("[data-punctuation]");
  if (!button || !draft.hasRolled) return;
  insertAfterSelection({ id: uid("punct"), type: "punct", value: button.dataset.punctuation });
});
elements.addBreak.addEventListener("click", () => {
  if (!draft.hasRolled) return;
  insertAfterSelection({ id: uid("break"), type: "break" });
});
elements.resetOrder.addEventListener("click", resetOrder);
elements.clearPoem.addEventListener("click", clearPoem);
elements.previewButton.addEventListener("click", openPreview);
elements.openGallery.addEventListener("click", openGallery);
elements.openGuide.addEventListener("click", () => {
  elements.guideDialog.showModal();
  document.body.style.overflow = "hidden";
});
elements.authorInput.addEventListener("input", () => {
  draft.author = elements.authorInput.value.slice(0, 12);
  elements.cardAuthor.textContent = draft.author.trim() || "佚名";
  saveDraft();
  updateSaveState();
});
elements.showQr.addEventListener("change", () => {
  draft.showQr = elements.showQr.checked;
  saveDraft();
  updateSaveState();
});
document.querySelectorAll('input[name="theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    draft.theme = input.value;
    elements.poemCard.className = `poem-card theme-${draft.theme}`;
    saveDraft();
    updateSaveState();
  });
});
elements.saveButton.addEventListener("click", savePoem);
elements.exportButton.addEventListener("click", exportPng);
elements.downloadImage.addEventListener("click", () => toast("PNG 图片已交给浏览器下载。"));
elements.shareImage.addEventListener("click", shareExportedImage);
elements.newRoundButton.addEventListener("click", startNewRound);
document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(document.querySelector(`#${button.dataset.close}`)));
});
[elements.previewDialog, elements.imageDialog, elements.galleryDialog, elements.guideDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("cancel", () => {
    window.setTimeout(() => {
      document.body.style.overflow = "";
    }, 0);
  });
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

renderAll();
