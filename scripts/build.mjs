import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "sw.js",
  "manifest.webmanifest",
  "teaching.html",
  "teaching.css",
  "teaching.js",
  ".nojekyll",
  "vendor",
];

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(client, { recursive: true });
await Promise.all(files.map((file) => cp(resolve(root, file), resolve(client, file), { recursive: true })));
await writeFile(
  resolve(dist, "server/index.js"),
  'export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n',
);
