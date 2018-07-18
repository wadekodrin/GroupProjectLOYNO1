

$(document).ready(function(){ 

	SetUpClick()
	getAjax()

}); 


function getAjax(companycard){
			$.ajax({
        method: "GET",
        url: "LOYNO_1_DB.sql",
        dataType: 'json',
        data: {
        	co.name: $("").val(),
        	co.position: $("").val(),
        	co.website: $("").val(),
        	co.logourl: $("").val(),
        }
        
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Headers':'*'
        },
        success: function(data) { 
        	console.log(data) },
        error: function(xhr, status, error) { console.log("ERROR: ", error) }
    })

}; 


