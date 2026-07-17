<%*
// Fantasy Hub — Tavern (standalone template — no Town Forge needed).
// Trigger it in an empty note: it asks for the town + size, rolls the
// rest, and renames "Untitled" notes to the rolled name.
// Requires: Randomness + the Fantasy Hub generators installed where
// your generator root can see them (Settings -> Randomness).
// Optional: a portrait pack (NPC faces + infobox), ITS theme (infobox
// styling).
const api = app.plugins.plugins["randomness"]?.api;
if (!api) { tR += "_Randomness plugin not found._"; return; }
const P = api.portraits;
const has = P && (await P.available());
const town = (await tp.system.prompt("Town name?", "an unnamed town")) || "an unnamed town";
const size = (await tp.system.suggester(["hamlet","village","town","city"],["hamlet","village","town","city"],false,"Settlement size?")) ?? "town";
const name = (await api.rollUnscoped("TavernName")).result;
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

tR += `---\ntype: tavern\nsize: "${size}"\ntown: "${town}"\n---\n`;
tR += `# ${name}\n\n> [!info] tavern in ${town}\n\nA tavern on the streets of ${town}.\n\n`;

// The keep — same person in the infobox and the rolled text.
let main = null;
if (has) { main = await P.roll(); tR += infobox(main, "Keep", "Pours at"); }

const result = await api.rollUnscoped("TF-Tavern", { promptValues: {
  town, shopType: "tavern", shopName: name, size,
  keeperName: main?.name ?? "", keeperRace: main ? raceWord(main) : "",
  keeperGender: main?.gender ?? "", keeperAge: main?.age ?? "",
  keeperDesc: main ? descOf(main) : ""
}});
tR += result.result;

if (has) {
  tR += "\n\n## At the bar\n\n";
  tR += await face(await P.roll(), "Regular");
}
%>
