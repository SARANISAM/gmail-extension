chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://mail.google.com" });
});
