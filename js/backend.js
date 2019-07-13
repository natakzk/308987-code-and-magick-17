'use strict';

(function () {

  window.backend = {
    load: function (onLoad, onError) {
        var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.open('GET', URL);

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.send();
    },

    save: function (data, onLoad) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };

})();
