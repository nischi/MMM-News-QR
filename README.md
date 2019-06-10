# MMM-News-QR
Create a QR-Code of the News which is currently showing in the default [Newsfeed](https://github.com/MichMich/MagicMirror/tree/master/modules/default/newsfeed "Newsfeed") Module

Thanks to [Evghenii Marinescu](https://github.com/MarinescuEvghenii "Evghenii Marinescu") for the inspiration of this module and the prework with your Module [MMM-QRCode](https://github.com/MarinescuEvghenii/MMM-QRCode "MMM-QRCode").

## Screenshot


## Setup the Module

Config | Description
--- | ---
`interval` | Because the default newsfeed Module has no sendNotification if he change the news we need to poll it. <br />**Default Value:** `2000`
`colorDark` | Color of the Code <br />**Default Value:** `#fff`
`colorLight` | Background color <br />**Default Value:** `#000`
`imageSize` | Size of the QR-Code in px <br />**Default Value:** `150`

### Full configuration of the module

```javascript
{
    module: 'MMM-News-QR',
    config: {
        // Interval to check the news
        interval: 2000,
        // Color of the Code
        colorDark: '#fff',
        // Background Color
        colorLight: '#000',
        // Size of the Code
        imageSize: 150
    }
}
```