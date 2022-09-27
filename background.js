const filter = {
  url: [
    {
      urlMatches: 'https://twitter.com/home',
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  // chrome.scripting.insertCSS(
  //   injection: ".css-1dbjc4n{display:none}"
  // );
  console.log("Twitter home loaded");
}, filter);
