/* Magic Mirror
 * Module: MMM-News-QR
 *
 * By Thierry Nischelwitzer http://nischi.ch
 * MIT Licensed.
 */

'use strict';

Module.register("MMM-News-QR", {

	defaults: {
		interval   : 2000,
		colorDark  : "#fff",
		colorLight : "#000",
		imageSize  : 150
  },

  text: '',

	getStyles: function() {
		return ["MMM-News-QR.css"];
	},

	getScripts: function() {
		return ["qrcode.min.js"];
  },

	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
    Log.log("Starting module: " + this.name);
	},

  notificationReceived: function(notification, payload, sender) {
    if (notification === 'ARTICLE_INFO_RESPONSE') {
      this.handleNews(payload);
    }
    if (notification === 'DOM_OBJECTS_CREATED') {
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
      this.updateDom(100);
    }
  },

	getDom: function() {
    const wrapperEl = document.createElement("div");
		wrapperEl.classList.add('qrcode');

    if (this.text !== '') {
      const qrcodeEl  = document.createElement("div");
      new QRCode(qrcodeEl, {
        text: this.text,
        width: this.config.imageSize,
        height: this.config.imageSize,
        colorDark : this.config.colorDark,
        colorLight : this.config.colorLight,
        correctLevel : QRCode.CorrectLevel.H
      });

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
