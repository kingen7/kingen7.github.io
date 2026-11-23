import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { fetchGitHubActivity } from "../api/github.ts";
import { profile } from "../src/data/profile.ts";

const output = new URL("../dist/", import.meta.url);
const index = new URL("index.html", output);

await copyFile(index, new URL("404.html", output));

for (const route of ["blogs", "projects", "opensource", "uses", "contact"]) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(index, new URL("index.html", directory));
}

const activity = await fetchGitHubActivity(profile.githubUsername, process.env.GITHUB_TOKEN);
await writeFile(new URL("github-activity.json", output), JSON.stringify(activity));
