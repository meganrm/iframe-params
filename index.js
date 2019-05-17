(function (module) {
    var iframeParams = {}
    iframeParams.createUrl = function createUrl(iframe, baseUrl, params) {
        if (params) {
            queryString = Object.keys(params).reduce(function (acc, key) {
                acc = acc + '&' + key + '=' + params[key];
                return acc;
            }, '')
        }
        var newSrc = baseUrl;

        if (queryString && document.location.search) {
            newSrc = newSrc + document.location.search + '&' + queryString;
        } else if (queryString) {
            newSrc = newSrc + '?' + queryString;
        } else {
            newSrc = newSrc + document.location.search;
        }
        iframe.src = newSrc;
    }

    
    module.iframeParams = iframeParams;
})(window);