// tracking pixel - Centro

function ebConversionTracker(conv) {
    var ebConversionImg = new Image();
    var ebConversionURL = "HTTP://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?";
    ebConversionURL += "cn=as&ActivityID="+conv+"&ns=1";
    ebConversionImg.src = ebConversionURL;
}

// tracking pixel - Facebook

function fbConversionTracker(conv) {
    var fbConversionImg = new Image();
    var fbConversionURL = "https://www.facebook.com/offsite_event.php?";
    fbConversionURL += "id="+conv+"&value=0&currency=USD";
    fbConversionImg.src = fbConversionURL;
}