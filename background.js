'use strict';

chrome.action.onClicked.addListener((tab) => {
  const title = tab.title || '';
  const url = tab.url || '';
  const text = title ? title + '\n' + url : url;
  const tweetUrl = 'https://x.com/intent/tweet?text=' + encodeURIComponent(text);

  chrome.windows.create({
    url: tweetUrl,
    type: 'popup',
    width: 600,
    height: 520
  });
});
