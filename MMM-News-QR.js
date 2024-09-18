/* MagicMirror²
 * Module: MMM-News-QR
 *
 * By Thierry Nischelwitzer http://nischi.ch
 * MIT Licensed.
 */

'use strict';

Module.register("MMM-News-QR", {

	defaults: {
    // possible values (polling, push)
    // push only works with MagicMirror 2.8+ and broadcastNewsFeeds activated
    updateType      : 'push',
    // only needed if updateType is polling
    interval        : 2000,
    animationSpeed  : 2500,
		colorDark       : "#fff",
		colorLight      : "#000",
		imageSize       : 150
  },

  text: '',

	getStyles: function() {
		return ["MMM-News-QR.css"];
	},

  getScripts: function() {
		return [this.file("node_modules/qrcode/build/qrcode.js")];
  },
	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
    Log.log("Starting module: " + this.name);
	},

  notificationReceived: function(notification, payload, sender) {
    if (notification === 'ARTICLE_INFO_RESPONSE') {
      this.handleNews(payload);
    }
    if (notification === 'NEWS_FEED' && this.config.updateType === 'push') {
      // if newsmodule feed news, read the information and show QR
      this.sendNotification('ARTICLE_INFO_REQUEST')
    }
    if (notification === 'DOM_OBJECTS_CREATED' && this.config.updateType === 'polling') {
      var _self = this;
      // this.sendNotification('ARTICLE_INFO_REQUEST');
      setInterval(function() {
        _self.sendNotification('ARTICLE_INFO_REQUEST')
      }, this.config.interval);
    }
  },

  handleNews: function(news) {
    /*
    Example from the Newsfeed module, thats in the news object (payload)
    {
      title:  this.newsItems[this.activeItem].title,
      source: this.newsItems[this.activeItem].sourceTitle,
      date:   this.newsItems[this.activeItem].pubdate,
      desc:   this.newsItems[this.activeItem].description,
      url:    this.getActiveItemURL()
    }*/

    if (news.url !== this.text) {
      this.text = news.url;
      this.updateDom(this.config.animationSpeed);
    }
  },

	getDom: function() {
    const wrapperEl = document.createElement("div");
		wrapperEl.classList.add('qrcode');

    if (this.text !== '') {
      const qrcodeEl  = document.createElement("canvas");
      const options = {
        width: this.config.imageSize,
        color: {
          dark: this.config.colorDark,
          light: this.config.colorLight
        },
        errorCorrectionLevel: "H"
      };
  
      QRCode.toCanvas(
        qrcodeEl,
        this.text,
        options,
        (error) => {
          if (error) { Log.error(`${this.name}: Error creating QRCode: ${error}`); }
          Log.log(`${this.name}: successfully created QRCode.`);
        }
      );

      const imageEl  = document.createElement("div");
      imageEl.classList.add('qrcode__image');
      imageEl.appendChild(qrcodeEl);

      wrapperEl.appendChild(imageEl);

      if(this.config.showRaw) {
        const textEl = document.createElement("div");
        textEl.classList.add('qrcode__text');
        textEl.innerHTML = this.config.text;
        wrapperEl.appendChild(textEl);
      }
    }

		return wrapperEl;
	}
});
