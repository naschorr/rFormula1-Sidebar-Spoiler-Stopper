/* Globals */
var ENABLE_BLOCKING_TEXT = chrome.i18n.getMessage('popup_enable_blocking_string');
var DISABLE_BLOCKING_TEXT = chrome.i18n.getMessage('popup_disable_blocking_string');
/* End Globals */

function updatePopupState(state) {
	toggleBlockingBtn.value = (state === 0) ? ENABLE_BLOCKING_TEXT : DISABLE_BLOCKING_TEXT;
}

function loadBlockingState() {
	chrome.storage.sync.get({blockingState : 1}, function(result) {
		updatePopupState(result.blockingState);
	})
}

function saveBlockingState(state) {
	/* Make sure garbage isn't being saved (0 = Blocking disabled, 1 = Blocking enabled) */
	if(state >= 0 || state <= 1) {
		chrome.storage.sync.set({blockingState: state}, updatePopupState(state));
	}
}

function loadLocalization() {
	document.title = chrome.i18n.getMessage('name');
	document.getElementById('nameContainer').innerHTML = chrome.i18n.getMessage('name');
}

/* Listener Init */
document.addEventListener('DOMContentLoaded', loadBlockingState);

var toggleBlockingBtn = document.getElementById('toggleBlockingBtn');
toggleBlockingBtn.addEventListener('click', function() {
	chrome.storage.sync.get({blockingState: 1}, function(result) {
		saveBlockingState(result.blockingState ^= 1);
	})
});
/* End Listener Init */

/* Localization Init */
document.addEventListener('DOMContentLoaded', loadLocalization);
/* End Localization Init */