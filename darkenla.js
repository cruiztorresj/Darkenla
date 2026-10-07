chrome.action.onClicked.addListener(async (tab) => {

	await chrome.scripting.executeScript({
		func: darkenla,
		target: { tabId: tab.id }
	});
});

function darkenla() {

    function style(element, bgcolor, color) {

      const BG_COLOR = 'background-color';

      Array.from(document.getElementsByTagName(element))
        .forEach(
            (item) => item.setAttribute(
                            'style',
                            bgcolor ?
                                `${BG_COLOR}: ${bgcolor}; color: ${color}`
                                : `color: ${color}`));
    }

    const elements = ['span', 'caption', 'h1', 'h2', 'h3', 'h4',
                        'h5', 'h6', 'code', 'td', 'th', 'div', 'section',
                        'main', 'p', 'article', 'nav', 'aside', 'label',
                        'footer'];

    elements.forEach((element) => style(element, 'black', 'white'));

    style('pre', 'darkslategrey', 'white');
    style('body', 'black', 'cornsilk');
    style('a', undefined, 'aqua');
}
