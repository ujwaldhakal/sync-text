## Sync Text
This extension generates QR CODE based on your last copied text. Since most of the phone has default QR Code scanner 
you can easily copy text by scanning the generated QR CODE via phone. 
If you dont use keep,wunderlist,note in your extension or any desktop app this could be used with minimal javascript implementation.

## Installation 
* Clone this repo
* `npm install`
* `npm run build`
* Load extension from `build/chrome`

## Development
* `npm run chrome-watch`
* `npm run opera-watch`
* `npm run firefox-watch`


## Usage
* Copy any text normal as you do like `CTRL+C` or via mouse
* Press `ALT+P` which will generate QR Code of your copied text
* Or `ALT+X` which will open the popup with text field to generate QR Code. 

### Template used
I have used [this boilerplate](https://github.com/EmailThis/extension-boilerplate/) for starting which was really helpful go check it out [here](https://github.com/EmailThis/extension-boilerplate/)
 