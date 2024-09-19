# MMM-News-QR

Create a QR code of the news which is currently showing in the default [Newsfeed](https://github.com/MagicMirrorOrg/MagicMirror/tree/master/modules/default/newsfeed) module.

Thanks to [Eugen](https://github.com/uxigene) for the inspiration of this module and the prework with your module [MMM-QRCode](https://github.com/uxigene/MMM-QRCode).

## Screenshot

![Screenshot of QR code](news-qr.png)

## Installation

Open up your terminal and simply paste the following code:

```sh
cd ~/MagicMirror/modules
git clone https://github.com/nischi/MMM-News-QR
cd MMM-News-QR
npm install
```

## Update

Go to the module’s folder inside your MagicMirror's module folder and pull the latest version:

```bash
cd ~/MagicMirror/modules/MMM-News-QR
git pull
npm install
```

## Configuration

To use this module, add the configuration example to the modules array in the `config/config.js` file:

### Configuration example

```js
    {
      module: "MMM-News-QR",
      position: "top_right",
      config: {
        updateType: "push",
        interval: 2000,         // Interval to check the news (only needed if updateType is polling)
        animationSpeed: 2500,   // Animation between change
        colorDark: "#fff",      // Color of the code
        colorLight: "#000",     // Background color
        imageSize: 150          // Size of the code
      }
    },
```

### Configuration options

Config | Description
--- | ---
`updateType` | Possible values are `polling` and `push`. Please make sure your newsfeed module has broadcastNewsFeeds activated.<br />**Default value:** `push`
`interval` | If you set `updateType` to `polling` you need to set the interval of get the newsfeed information <br />**Default value:** `2000`
`animationSpeed` | Animation speed between change <br />**Default value:** `2500`
`colorDark` | Color of the code <br />**Default value:** `#fff`
`colorLight` | Background color <br />**Default value:** `#000`
`imageSize` | Size of the QR code in px <br />**Default value:** `150`

## Troubleshooting

Please check the QR code to see if it represents the correct URL. If `localhost:8080/cors?url=”` or something similar appears before the actual URL try to set `useCorsProxy` to `false` in your newsfeed config. Like this:

```js
    {
      module: "newsfeed",
      position: "top_right",
      config: {
        feeds: [
          {
            title: "tagesschau.de",
            url: "https://www.tagesschau.de/xml/rss2/",
            useCorsProxy: false
          }
        ]
      }
    },
```
