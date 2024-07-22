// extensions/background.js

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    chrome.storage.sync.get(['blocklist'], (result) => {
      const blocklist = result.blocklist || [];
      const url = new URL(details.url);
  
      console.log('Checking URL:', url.hostname);
  
      // Check if the URL matches facebook.com or any of its subdomains
      if (url.hostname.includes('facebook.com')) {
        console.log('Blocked:', url.hostname);
        chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('blocked.html') });
      }
    });
  }, { url: [{ urlMatches: '<all_urls>' }] });
  