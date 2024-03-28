module.exports = async (params) => {
    console.log("addNewCampaign - START - params");
    console.log(params);
    // This baseFolder code will need to be updated based on how you setup your vault
    const baseFolder = "01-Campaigns/"
    const {quickAddApi: {inputPrompt}} = params;
    let newCampaignName = await inputPrompt("Name for new campaign?");
    console.log(newCampaignName);
    params.variables["newCampaignName"] = newCampaignName;
    params.variables["newCampaignPath"] = baseFolder + newCampaignName;
    console.log("addNewCampaign - END - params");
    console.log(params);
};