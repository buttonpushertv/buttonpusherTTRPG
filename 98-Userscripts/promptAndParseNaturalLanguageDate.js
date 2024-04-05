const defaultDate = 'Today';

async function promptAndParseNaturalLanguageDate(params,promptQuest) {
  console.log(params);
  promptQuest = "Enter a date - you may use natural language: tomorrow, Thursday, etc:"
  let prompt = defaultDate;
  if (params.quickAddApi) {
    // if calling via a QuickAdd macro
    prompt =  await params.quickAddApi.inputPrompt(promptQuest, defaultDate, defaultDate);
  } else if (params.system) {
    // if calling from a template (requires passing `tp` as params)
    prompt = await params.system.prompt(promptQuest, defaultDate);
  }

  const { parser, settings } = app.plugins.plugins["nldates-obsidian"];

  const parsed = parser.getParsedDate(prompt);
  const dateString = moment(parsed).format(settings.format);
  params.variables["extractedDate"] = `${dateString}`
  return `${dateString}`;
}

module.exports = promptAndParseNaturalLanguageDate;