import ext from "./utils/ext";

ext.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === "perform-save") {
      console.log("Extension Type: ", "/* @echo extension */");
      console.log("PERFORM AJAX", request.data);

      sendResponse({action: "saved"});
    }
  }
);


chrome.commands.onCommand.addListener(function (command) {

  if (command === "generate-qrcode") {
    let data = getLastCopiedText();
    if (data && data !== '') {
      ext.tabs.create({url: ext.extension.getURL(`qrcode.html?text=${data}`)});
    }
  }
});

function getLastCopiedText() {
  let tempInput = document.createElement("INPUT");
  tempInput.setAttribute("type", "text");
  tempInput.setAttribute("id", "temp-input");
  document.body.appendChild(tempInput);
  tempInput.focus();
  document.execCommand('Paste');
  const value = document.getElementById('temp-input').value;
  document.getElementById('temp-input').remove();

  return value;
}