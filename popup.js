let changeColor = document.querySelector(".color");

changeColor.addEventListener('change', async (event) => {
    let color = event.target.value;
    chrome.storage.sync.set({color})

    let [tab] = await chrome.tabs.query({active: true,currentWindow: true})

    chrome.scripting.executeScript({target: {tabId : tab.id}, function: setPageBackgroundColor,})
  });

const setPageBackgroundColor = () => {
    chrome.storage.sync.get("color", ({color}) => {
        document.body.style.backgroundColor = color;
    })
}