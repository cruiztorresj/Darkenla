chrome.action.onClicked.addListener(async (tab) => {

	await chrome.scripting.executeScript({
		func: darkenla,
		target: { tabId: tab.id }
	});
});

function darkenla() {

    const BLACK = 'black';

    function style(element, bgcolor, color) {

      const BG_COLOR_PROP = 'background-color';

      Array.from(document.getElementsByTagName(element))
        .forEach(
            (item) => item.setAttribute(
                            'style',
                            bgcolor ?
                                `${BG_COLOR_PROP}: ${bgcolor}; color: ${color}`
                                : `color: ${color}`));
    }

    const elements = ['article', 'aside', 'caption', 'code', 'div', 'footer',
                        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'li',
                        'main', 'nav', 'ol', 'p', 'section', 'span', 'td',
                        'th', 'ul'];

    elements.forEach((element) => style(element, BLACK, 'white'));

    style('strong', BLACK, 'honeydew');
    style('pre', 'darkslategrey', 'white');
    style('body', BLACK, 'cornsilk');
    style('a', undefined, 'aqua');
}
