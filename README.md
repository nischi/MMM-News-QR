# MMM-News-QR
Create a QR-Code of the News which is currently showing in the default [Newsfeed](https://github.com/MichMich/MagicMirror/tree/master/modules/default/newsfeed "Newsfeed") Module

Thanks to [Evghenii Marinescu](https://github.com/MarinescuEvghenii "Evghenii Marinescu") for the inspiration of this module and the prework with your Module [MMM-QRCode](https://github.com/MarinescuEvghenii/MMM-QRCode "MMM-QRCode").

## Screenshot
![Screenshot of QR-code](news-qr.png)

## Installation

Open up your terminal and simply paste the following code
```sh
cd ~/MagicMirror/modules
git clone https://github.com/nischi/MMM-News-QR.git
cd MMM-News-QR
npm install
```

## Setup the Module

Config | Description
--- | ---
`updateType` | Possible Values are `polling`, `push`. Push works only for MagicMirror 2.8+ because this Version has a Broadcast built in. Please make sure your newsfeed moduel has broadcastNewsFeeds activated.<br />**Default Value:** `push`
`interval` | If you set updateType to `polling` you need to set the interval of get the newsfeed information <br />**Default Value:** `2000`
`animationSpeed` | Animation Speed between change <br />**Default Value:** `2500`
`colorDark` | Color of the Code <br />**Default Value:** `#fff`
`colorLight` | Background color <br />**Default Value:** `#000`
`imageSize` | Size of the QR-Code in px <br />**Default Value:** `150`

### Full configuration of the module

```javascript
{
    module: 'MMM-News-QR',
    config: {
        // possible values (polling, push)
        // push only works with MagicMirror 2.8+ and broadcastNewsFeeds activated
        updateType : 'push',
        // Interval to check the news
        // only needed if updateType is polling
        interval: 2000,
        // Animation between change
        animationSpeed: 2500,
        // Color of the Code
        colorDark: '#fff',
        // Background Color
        colorLight: '#000',
        // Size of the Code
        imageSize: 150
    }
}
```
