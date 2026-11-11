browser.action.onClicked.addListener(async (tab) => {

    await browser.scripting.executeScript({

        files: ['darkenla.js'],
        target: { tabId: tab.id }
    });
});
