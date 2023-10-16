
	var apiUrl = 'http://md.panguh5.com:1202/get_un.php';
	var websiteUrl,appid,baseCDN,version = '';
	var queryUrl = apiUrl
	var urlParams = parseURLParams(window.location.href)
	if (urlParams.room){
	    queryUrl = queryUrl + '?room=' + urlParams.room;
	} else if (urlParams.cardNo){
	    $("#cardno").html(urlParams.cardNo);
	}else if (urlParams.skinNo){
	    $("#skinno").html(urlParams.skinNo);
	}else if (urlParams.headNo){
	    $("#headno").html(urlParams.headNo);
	}else if(urlParams.invitation) {
	     $("#invitation").html(urlParams.invitation);
	}else{
	    queryUrl = queryUrl
	}
     
	
	//getCurrentAgent();
       


    


	
    
    
    
