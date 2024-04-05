module.exports = async (params) => {
    console.log("#### getCampaignName - START ###");
    // The lines below are for determining what keys to use - uncomment as needed
    // console.log(params);
    // let thisCampaignObj = params.app.workspace.getActiveFile();
    // console.log(thisCampaignObj);
    const dv = params.app.plugins.plugins.dataview.api;
    // This should find the Campaign name no matter how deep you are in the campaign's folder stack:
    // In my hierarchy, it's always going to be (or should always be) in '01-Campaigns' from the root of the vault. So with the `split` on the path, the current Campaign should always be the #2 array item
    const folders = params.app.workspace.getActiveFile().path.split('/');
    const parentFolder = folders[((folders.length)-2)];
    console.log("folders:", folders);
    //console.log("parentFolder:", parentFolder);
    if (folders[0] != "01-Campaigns") {
        await params.quickAddApi.infoDialog("New notes created using this task should be connected to a campaign. Choose one manually in the next dialog.");
        const tempCampaignsList = dv.pages("#campaign-home");
        campaignsList = tempCampaignsList.map(x => `${x.campaignName}`).array();
        //console.log("campaignsList:", campaignsList);
        const pickACampaign = await params.quickAddApi.suggester(x => x, campaignsList);
        //console.log ("pickACampaign: ", pickACampaign);
        thisCampaignPath = `${"01-Campaigns/" + pickACampaign}`;
        thisCampaignName = pickACampaign;
    } else {
        console.log("Starting on a Campaign page");
        thisCampaignPath = `${folders[0] + "/" + folders[1]}`;
        thisCampaignName = `${folders[1]}`;
    }

    const thisCampaignHomeNote = thisCampaignPath + "/" + thisCampaignName + " Home";

    // This section should extract the campaignShortCode from the campaingn's Home Note
    // var thisCampaignShortCode = this.app.metadataCache.getFileCache(
    //    tp.file.find_tfile(thisCampaignHomeNote)
    // )?.frontmatter || {};

    //console.log("thisCampaignPath: ", thisCampaignPath);
    //console.log("thisCampaignName: ",  thisCampaignName);
    const thisCampaignCalendar = thisCampaignName + "-Calendar";
    const thisCampaignRunningSessionNote = thisCampaignName + "-Running Session Note";
    // Return the items below as variables in the 'params' object
    params.variables["thisCampaignPath"] = thisCampaignPath;
    params.variables["thisCampaignName"] = thisCampaignName;
    params.variables["thisCampaignCalendar"] = thisCampaignCalendar;
    params.variables["thisCampaignRunningSessionNote"] = thisCampaignRunningSessionNote;
    params.variables["thisCampaignHomeNote"] = thisCampaignHomeNote;
    console.log(params);
    console.log("#### getCampaignName - END ###");
    };