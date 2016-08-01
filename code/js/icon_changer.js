chrome.runtime.onMessage.addListener(
	function(request, sender) {
		if(request.blockingState === 1) {
			chrome.browserAction.setIcon({
				path: {"38": "images/icon_block_38.png"},
				tabId: sender.tab.id
			});
		}
	}	
)