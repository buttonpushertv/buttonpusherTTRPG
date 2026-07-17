<%*
// Fantasy Hub — Shop (standalone template — no Town Forge needed).
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
const subtypeChoice = (await tp.system.suggester(
  ["random","general","weapon","armor","alchemy","magic"],
  ["random","general","weapon","armor","alchemy","magic"], false, "Shop type?")) ?? "random";
let subtype = subtypeChoice, name = "";
if (subtypeChoice === "random") {
  const pick = (await api.rollUnscoped("TF-ShopPick")).result.split("|");
  subtype = (pick[0] ?? "general").trim(); name = (pick[1] ?? "").trim();
} else {
  const nameTable = { general: "GeneralShopName", weapon: "WeaponShopName",
    armor: "ArmorShopName", alchemy: "AlchemyShopName", magic: "MagicShopName" }[subtype];
  name = (await api.rollUnscoped(nameTable)).result;
}
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

tR += `---\ntype: shop\nsubtype: "${subtype}"\nsize: "${size}"\ntown: "${town}"\n---\n`;
tR += `# ${name}\n\n> [!info] ${subtype} shop in ${town}\n\n`;

// ONE keeper + ONE customer across the whole note: infobox, the
// Proprietor line, quotes, and the "Also here" customer all agree.
let keeper = null, shopper = null;
if (has) {
  keeper = await P.roll();
  shopper = await P.roll();
  tR += infobox(keeper, "Shopkeeper", "Runs");
}

const shop = await api.rollUnscoped("TF-ShopByType", { promptValues: {
  town, shopType: subtype, shopName: name, size,
  keeperName: keeper?.name ?? "", keeperRace: keeper ? raceWord(keeper) : "",
  keeperGender: keeper?.gender ?? "", keeperAge: keeper?.age ?? "",
  keeperDesc: keeper ? descOf(keeper) : "",
  custName: shopper?.name ?? "", custRace: shopper ? raceWord(shopper) : "",
  custDesc: shopper ? descOf(shopper) : ""
}});
tR += shop.result;

if (has && shopper) {
  tR += "\n\n## Seen browsing\n\n";
  tR += `- ${P.inlineSnippet(shopper.recipe, 96)} **${shopper.name}**\n`;
}
%>
