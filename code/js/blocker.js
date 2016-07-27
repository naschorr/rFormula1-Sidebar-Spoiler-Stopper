function injectAntiSpoilerStyle() {
	var spoilerStopper = '.usertext-body:before { content: none !important; }';

	var node = document.createElement('style');
	node.innerHTML = spoilerStopper;
	document.body.appendChild(node);
}

chrome.storage.sync.get({blockingState: 1}, function(result) {
	if(result.blockingState === 1) {
		injectAntiSpoilerStyle();
	}
})
