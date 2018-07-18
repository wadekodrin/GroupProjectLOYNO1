$(document).ready(function(){
console.log("hello1");
    onClick()

});

function onClick(){        
    $("#All_Companies").click(function(){
    $('.company_container').empty();
        // console.log($('#uemail').val());
        // var buttoninputvar = $('#buttoninputid').val();
        console.log("hello");
        $.ajax({
            method: "GET",
            url: "/Company_Name_All", //url is /routename
            dataType: 'json',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'*'
            },
            success: function(data) { 
                console.log(data);
                for(var i = 0; i < data.length; i++){
                    
                    var myHtml = 
                        "<h4>"+data[i].Company_Name+ "</h4>"+ 
                        "<h1>"+data[i].Website+"</h1>"+
                        "<img class = 'logo' scr ='"+data[i].LOG_URL+"'>"
                    $('.company_container').append(myHtml)
                }
            },
            error: function(xhr, status, error) { 
                console.log("ERROR: ", error) 
            }
        })
    })
console.log("hello2");
    $("#All_Positions").click(function(){
        $('.company_container').empty();
        // console.log($('#uemail').val());
        // var buttoninputvar = $('#buttoninputid').val();
        console.log("hello_listing");
        $.ajax({
            method: "GET",
            url: "/Position_All", //url is /routename
            dataType: 'json',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'*'
            },
            success: function(data) { 
                console.log(data);
                for(var i = 0; i < data.length; i++){
                    
                    var myHtmllisting = 
                        "<h1>"+data[i].Position+"</h1>"+
                        "<h1>"+data[i].Source+"</h1>"+
                        "<h1>"+data[i].Company_Name+"</h1>"+
                        "<h1>"+data[i].Website+"</h1>"+
                        "<img class = 'logo' scr ='"+data[i].LOG_URL+"'>"
                    $('.position_container').append(myHtmllisting)
                 }
            },
            error: function(xhr, status, error) { 
                console.log("ERROR: ", error) 
            }
        })
    })
}