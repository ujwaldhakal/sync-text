import ext from "./utils/ext";

var submitBtn = document.getElementById("submit")
var textarea = document.getElementById("text-sync-placeholder")

ext.tabs.query({active: true, currentWindow: true}, function(tabs) {
  textarea.focus();
  document.execCommand('Paste')
});


submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  ext.tabs.create({ url: ext.extension.getURL(`qrcode.html?text=${textarea.value}`) });
})
