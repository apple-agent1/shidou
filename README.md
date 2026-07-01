# 诗骰

一个无后端、无第三方运行时的原创词语骰子诗歌网页小游戏。

## 本地运行

```bash
python3 -m http.server 4173
```

浏览器打开 `http://localhost:4173`。

## 数据说明

- 草稿保存在 `localStorage` 的 `shidou.draft.v1`。
- 本地作品保存在 `localStorage` 的 `shidou.saved.v1`。
- 最多保存 50 首作品。
- Service Worker 会缓存应用外壳，首次访问后可离线使用。
