$(document).ready(function(){

    onClick()

});

function onClick(){
    $("#buttonid").click(function(){
        // console.log($('#uemail').val());
        // var buttoninputvar = $('#buttoninputid').val();
/*        console.log(useremail);*/
        $.ajax({
            method: "GET",
            url: "/Company_Name_All", //url is /routename
            dataType: 'json',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'*'
            },
            success: function(data) { 
                console.log(data[0]);

                $('#company_name').html(data[0].Company_Name)//#companyname is id name, data[0] is first record, .Company_Name is case sensitve reference to table key
                // if (data.length == 1){
                //     // console.log ("Success with "+data[0].email);
                //     window.location.href = "https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif";
                //     userdataid(data[0].id);

                // }
                // else {
                //     /*console.log (useremail +" not found");*/
                //      window.location.href = "https://thumbs.gfycat.com/OrangeAjarIriomotecat-size_restricted.gif"
                // }

            },
            error: function(xhr, status, error) { 
                console.log("ERROR: ", error) 
            }
        })
    })
}


