module.exports = async (params) => {
    console.log("addNewCampaign - START - params");
    console.log(params);
    const newName = "";
    // This baseFolder code will need to be updated based on how you setup your vault
    // The next line contains the location where all this vault's campaigns will be stored
    const baseFolder = "01-Campaigns/";
    const {quickAddApi: {inputPrompt}} = params;
    // Prompt for the new campaign name
    let newCampaignName = await inputPrompt("Name for new campaign?", "Make it unique & a vaild filename.");
    console.log("newCampaignName: ", newCampaignName);

    let newCampaignPath = baseFolder + newCampaignName;
    
    let newCampaignShortCode = await inputPrompt("Short code for this campaign?", "2-4 chars - no spaces");

    // A new Campaign is going to be created from 99-Templates/newCampaignTemplate.md
    // This will create a folder structure and a few files - the following will create path+names for those items. Having them exist as a part of this process allows them to be created felixibly and without needing to backtrack to create them later.

    // Calculate the path & name of the Campaign's Home Note
    let newCampaignHomeNote = newCampaignName + " Home";
    // Calculate the path & name of the Campaign's Atlas Note
    let newCampaignAtlas = newCampaignName + "-Simple Atlas";
    // the name of the Campaign Calendarium for this campaign
    const newCampaignCalendar = newCampaignName + "-Calendar";

    params.variables["newCampaignName"] = newCampaignName;
    params.variables["newCampaignPath"] = newCampaignPath;
    params.variables["newCampaignShortCode"] = newCampaignShortCode;
    params.variables["newCampaignHomeNote"] = newCampaignHomeNote;
    params.variables["newCampaignAtlas"] = newCampaignAtlas;
    params.variables["newCampaignCalendar"] = newCampaignCalendar;
    console.log("addNewCampaign - END - params");
    console.log(params);
};
