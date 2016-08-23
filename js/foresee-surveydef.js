//var vaSurvey = 'mcenter';
FSR.surveydefs = [{
    name: 'browse',
    section: 'va_vba',
    invite: {
		when: 'onentry',
		siteLogo: "sitelogo.jpg",
		
		dialogs: [[{
			reverseButtons: false,
			headline: "We'd welcome your feedback!",
			blurb: "Thank you for visiting our website. You have been randomly selected to participate in a customer satisfaction survey to let us know how we can improve your website experience.",
			noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
			attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
			closeInviteButtonText: "Click to close.",
			declineButton: "No, thanks",
			acceptButton: "Yes, I'll give feedback",
			error: "Error",
			warnLaunch: "this will launch a new window"
		
		}]]
	},

    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 4,
        lf: 3
    },
    tracker: {
        url: 'tracker_vba.html'
    },
    links: {
        pop: [{
            tag: 'a',
            attribute: 'href',
            patterns: ['/ebenefits-portal']
        }]
    },
    include: {
        urls: ['vba.va.gov', 'benefits.va.gov', 'insurance.va.gov', 'homeloans.va.gov', 'gibill.va.gov']
    }
}, {
    name: 'browse',
    section: 'va_medctr',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 10,
        lf: 4
    },
    include: {
        variables: [{
            name: 'vaSurvey',
            value: 'mcenter'
        }]
    }
}, {
    name: 'browse',
    section: 'va_main',
    invite: {
        when: 'onentry'
    },
    pop: {
        when: 'later'
    },
    criteria: {
        sp: 1.35,
        lf: 4
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
   repeatdays: 0,

    repeatoverride : false,

    altcookie : {
    },

    language : {
        locale : 'en'
    },

    exclude : {
   	urls: [/ebenefits.va.gov/i, /myhealth.va.gov/i]
    },

    zIndexPopup : 10000,

    ignoreWindowTopCheck : false,

    ipexclude : 'fsr$ip',

    mobileHeartbeat : {
        delay : 60, /*mobile on exit heartbeat delay seconds*/
        max : 3600  /*mobile on exit heartbeat max run time seconds*/
    },

    invite : {

        // For no site logo, comment this line:
        siteLogo : "sitelogo.gif",

        //alt text fore site logo img
		siteLogoAlt : "",

        /* Desktop */
        dialogs : [[{
            reverseButtons: false,
            headline: "We'd welcome your feedback!",
            blurb: "Thank you for visiting our website. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.",
            noticeAboutSurvey: "The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.",
            attribution: "This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.",
            closeInviteButtonText: "Click to close.",
            declineButton: "No, thanks",
            acceptButton: "Yes, I'll give feedback",
            error: "Error",
            warnLaunch: "this will launch a new window"

        }]],

        exclude : {
            urls:['https://benefits.vba.va.gov/', 'http://inquiry.vba.va.gov/', 'https://vareap.vba.va.gov/vareap_www/dmdc_default.asp', 'https://www.gibill.va.gov/wave/index.do', 'https://vaonce.vba.va.gov/vaonce_student/default.asp', 'https://www.gibill2.va.gov/', 'http://www.gibill.va.gov/resources/benefits-resources/chapter-33-benefit-calculator.html', 'http://www.gibill.va.gov/Training/stakeholder/', 'http://www.vba.va.gov/bln/21/advisor/runtime/utilities/login.asp', 'http://www.insurance.va.gov/AutoForm/index.asp',
		         'https://giosgli.prudential.com/osgli/web/OSGLIMenu.html', 'https://insurance.va.gov/inForceGliSite/SelfService/insmain.asp'],
            referrers:[],
            userAgents:[],
            browsers:[],
            cookies:[],
            variables:[]
        },
        include : {
            local : [ '.' ]
        },

        delay : 0,
        timeout : 0,

        hideOnClick : false,

        hideCloseButton : false,

        css : 'foresee-dhtml.css',

        hide : [],

        hideFlash: false,

        type : 'dhtml',
        /* desktop */
        // url: 'invite.html'
        /* mobile */
        url : 'invite-mobile.html',
        back: 'url'

        //SurveyMutex: 'SurveyMutex'
    },

    tracker : {
        width : '690',
        height : '415',
        timeout : 3,
        adjust : true,
        alert : {
         enabled: false,
            message : 'The survey is now available.'
        },
        url : 'tracker.html'
    },

    survey : {
        width : 690,
        height : 600
    },

    qualifier : {
        footer : '<div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        width : '690',
      height: '600',
        bgcolor : '#333',
        opacity : 0.7,
        x : 'center',
        y : 'center',
        delay : 0,
        buttons : {
            accept : 'Continue'
        },
        hideOnClick : false,
        css : 'foresee-dhtml.css',
        url : 'qualifying.html'
    },

    cancel : {
        url : 'cancel.html',
        width : '690',
        height : '400'
    },

    pop : {
        what : 'survey',
        after : 'leaving-site',
        pu : false,
        tracker : true
    },

    meta : {
        referrer : true,
        terms : true,
        ref_url : true,
        url : true,
        url_params : false,
        user_agent : false,
        entry : false,
        entry_params : false
    },

    events : {
        enabled : true,
        id : true,
        codes : {
            purchase : 800,
            items : 801,
            dollars : 802,
            followup : 803,
            information : 804,
            content : 805
        },
        pd : 7,
        custom : {}
    },

    previous : false,

	analytics : {
		google_local : false,
		google_remote : false
	},

   cpps: {
   	        GovDelivery: {
            source: 'url',
            init: 'N',
            patterns: [{
                regex: 'source=govdelivery',
                value: 'Y'
            }]
        }
   },

    mode : 'first-party'
};