(function () {
                  var setting = {"height":500,"width":600,"zoom":17,"queryString":"Mettupalayam Road, Narasimhanaickenpalayam, Tamil Nadu, India","place_id":"Ej1NZXR0dXBhbGF5YW0gUm9hZCwgTmFyYXNpbWhhbmFpY2tlbnBhbGF5YW0sIFRhbWlsIE5hZHUsIEluZGlhIi4qLAoUChIJBQfOOlnuqDsRjdUrJjHEeeESFAoSCZ-Vsy2S9qg7EW-7jsZWiOEB","satellite":false,"centerCoord":[11.115806103120136,76.93569980000001],"cid":"0xe179c431262bd58d","lang":"en","cityUrl":"/india/coimbatore-38055","cityAnchorText":"Map of Coimbatore, South Kerala, India","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"471911"};
                  var d = document;
                  var s = d.createElement('script');
                  s.src = 'https://1map.com/js/script-for-user.js?embed_id=471911';
                  s.async = true;
                  s.onload = function (e) {
                    window.OneMap.initMap(setting)
                  };
                  var to = d.getElementsByTagName('script')[0];
                  to.parentNode.insertBefore(s, to);
                })();