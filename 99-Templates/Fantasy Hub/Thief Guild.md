<%*
// Fantasy Hub — Thieves' Guild (standalone template — no Town Forge needed).
// Trigger it in an empty note: it asks for the town + size, rolls the
// rest, and renames "Untitled" notes to the rolled name.
// Requires: Randomness + the Fantasy Hub generators installed where
// your generator root can see them (Settings -> Randomness).
// Optional: a portrait pack (NPC faces + infobox), ITS theme (infobox
// styling), Heraldry Weaver (the crest).
const api = app.plugins.plugins["randomness"]?.api;
if (!api) { tR += "_Randomness plugin not found._"; return; }
const P = api.portraits;
const has = P && (await P.available());
const town = (await tp.system.prompt("Town name?", "an unnamed town")) || "an unnamed town";
const size = (await tp.system.suggester(["hamlet","village","town","city"],["hamlet","village","town","city"],false,"Settlement size?")) ?? "town";
const name = (await api.rollUnscoped("GuildName")).result;
if (tp.file.title.startsWith("Untitled")) { try { await tp.file.rename(name); } catch (e) {} }
const raceWord = (p) => ({ halfelf: "half-elf", halforc: "half-orc" }[p.race] ?? p.race ?? "");
const descOf = (p) => p.age === "old" ? "silver-haired"
  : (p.recipe.parts.scars ?? -1) >= 0 ? "scarred"
  : (p.recipe.parts.facial_hair ?? -1) >= 0 ? "bearded"
  : p.age === "young" ? "fresh-faced" : "";
const infobox = (p, heading, lastRowName) => [
  "> [!infobox]", `> # ${p.name}`,
  "> " + P.inlineSnippet(p.recipe, 160),
  `> ###### ${heading}`, "> | |  |", "> | --- | --- |",
  `> | Race | ${raceWord(p)} |`, `> | Gender | ${p.gender} |`,
  `> | Age | ${p.age} |`, `> | ${lastRowName} | ${name} |`, "", "",
].join("\n");
const face = async (p, role) => {
  const beat = (await api.rollUnscoped("Personality")).result;
  return `- ${P.inlineSnippet(p.recipe, 96)} **${p.name}** — ${role}, ${beat}\n`;
};

const hseed = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
tR += `---\ntype: guild\nsize: "${size}"\ntown: "${town}"\nheraldry-seed: ${hseed}\n---\n`;
tR += `# ${name}\n`;
tR += ["> [!infobox]+", `> # ${name}`, "> \`heraldry:|120\`", "> ###### Stats", "> | Type | Stat |", "> | --- | --- |", "", ""].join("\n");
tR += `> [!info] guild in ${town}\n\nA criminal syndicate operating in the shadows of ${town}.\n\n`;

// The boss — same person in the infobox and the rolled text.
let main = null;
if (has) { main = await P.roll(); tR += infobox(main, "Boss", "Runs"); }

const result = await api.rollUnscoped("TF-Guild", { promptValues: {
  town, shopType: "guild", shopName: name, size,
  slant: "criminal",
  keeperName: main?.name ?? "", keeperRace: main ? raceWord(main) : "",
  keeperGender: main?.gender ?? "", keeperAge: main?.age ?? "",
  keeperDesc: main ? descOf(main) : ""
}});
tR += result.result;

if (has) {
  tR += "\n\n## In the shadows\n\n";
  tR += await face(await P.roll({ age: "young" }), "Lookout");
  tR += await face(await P.roll(), "Fence");
}

tR += "\n\n```heraldry\n```\n";
%>
