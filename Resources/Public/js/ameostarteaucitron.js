function AmeosTacClickyMore(){
	if(typeof(Event) === 'function') {
        clickyloaded = new Event("clicky-loaded");
    }else{
        clickyloaded = document.createEvent('Event');
        clickyloaded.initEvent("clicky-loaded", true, true);
    }
}

function AmeosTacGajsMore(){
	if(typeof(Event) === 'function') {
        gajsloaded = new Event("gajs-loaded");
    }else{
        gajsloaded = document.createEvent('Event');
        gajsloaded.initEvent("gajs-loaded", true, true);
    }
}

function AmeosTacGtagMore(){
	if(typeof(Event) === 'function') {
        gtagloaded = new Event("gtag-loaded");
    }else{
        gtagloaded = document.createEvent('Event');
        gtagloaded.initEvent("gtag-loaded", true, true);
    }
}

function AmeosTacMapscallback(){
	if(typeof(Event) === 'function') {
        mapsloaded = new Event("maps-loaded");
    }else{
        mapsloaded = document.createEvent('Event');
        mapsloaded.initEvent("maps-loaded", true, true);
    }
}

function AmeosTacAnalyticsMore(){
	if(typeof(Event) === 'function') {
        analyticsloaded = new Event("analytics-loaded");
    }else{
        analyticsloaded = document.createEvent('Event');
        analyticsloaded.initEvent("analytics-loaded", true, true);
    }
}

function AmeosTacGasMore(){
	if(typeof(Event) === 'function') {
        gasloaded = new Event("gas-loaded");
    }else{
        gasloaded = document.createEvent('Event');
        gasloaded.initEvent("gas-loaded", true, true);
    }
}

function AmeosTacXitiMore(){
	if(typeof(Event) === 'function') {
        xitiloaded = new Event("xiti-loaded");
    }else{
        xitiloaded = document.createEvent('Event');
        xitiloaded.initEvent("xiti-loaded", true, true);
    }
}

function AmeosTacFacebookPixelMore(){
	if(typeof(Event) === 'function') {
        facebookpixelloaded = new Event("facebookpixel-loaded");
    }else{
        facebookpixelloaded = document.createEvent('Event');
        facebookpixelloaded.initEvent("facebookpixel-loaded", true, true);
    }
}

function AmeosTacatMore(){
	if(typeof(Event) === 'function') {
        atinternetloaded = new Event("atinternet-loaded");
    }else{
        atinternetloaded = document.createEvent('Event');
        atinternetloaded.initEvent("atinternet-loaded", true, true);
    }
}

function tacRecaptchaOnLoad(){
	if(typeof(Event) === 'function') {
        recaptchaloaded = new Event("recaptcha-loaded");
    }else{
        recaptchaloaded = document.createEvent('Event');
        recaptchaloaded.initEvent("recaptcha-loaded", true, true);
    }
}