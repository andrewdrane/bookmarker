//avoid bookmarking <%=singular_name%> pages
var bookmarkerURL = "http://%H%/";

//Define some styles for the objects
//
//position:absolute; z-index:2147483640; width:700px; border:5px solid #000066; text-align:right; height:520px; top:10px; background-color:white;
var bookmarker_inner_style = {
        position : "absolute",
        zIndex : "2147483640",
        width : "700px",
        border : "5px solid #000066",
        textAlign : "right",
        height : "520px",
        top : "10px",
        left : "-350px",
        backgroundColor : "white"
    }
var bookmarker_close_link_style = {
        margin : "0px",
        padding : "0px",
        color : "#000066",
        fontSize : "11px"
    }
var <%=singular_name%>_if_style = {
        border : "0px",
        width : "700px",
        height : "500px"
    }
var <%=singular_name%>_container_awd_style = {
        width : "1px",
        margin : "0px auto",
        position : "relative"
    }

if( window.location.href.substring(0,bookmarkerURL.length)==bookmarkerURL ){
    alert('You can\'t bookmark a local page page!');
}else{
    //grab the first element of the dom
    var b = document.getElementsByTagName("body").item(0);

    //create the main holder div. Note, some IDs are appended with _awd to
    //make ID collisions less likely

    c=document.createElement('div');
        c.setAttribute("id","<%=singular_name%>_holder_awd");
        c.style.textAlign="center";
        c.style.zIndex="2147483640";
        c.innerHTML="\n\
        <div id='<%=singular_name%>_container_awd'>\n\
            <a name='<%=singular_name%>_top'></a>\n\
            <div id='bookmarker_inner'>\n\
                <a href='javascript:<%=singular_name%>_hide_adder()' id='bookmarker_closer' style='float:none'>Close</a>&nbsp;&nbsp;\n\
                <iframe style='' id='<%=singular_name%>_if'></iframe>\n\
            </div>\n\
        </div>";

    //avoid double bookmarking. Just make the window visible again if it was hidden
    if(document.getElementById('<%=singular_name%>_container_awd')){
        document.getElementById('<%=singular_name%>_container_awd').style.display="block";
    }else{
        //insert the DIV and iframe
        b.insertBefore(c,b.childNodes [0]);
        //set the styles
        apply_all_styles('bookmarker_inner', bookmarker_inner_style);
        apply_all_styles('bookmarker_closer', bookmarker_close_link_style);
        apply_all_styles('<%=singular_name%>_if', <%=singular_name%>_if_style);
        apply_all_styles('<%=singular_name%>_container_awd', <%=singular_name%>_container_awd_style)

        //set the source for the iframe back to us
        document.getElementById('<%=singular_name%>_if').src=bookmarkerURL+"<%=plural_name%>/new?url="+escape(window.location.href)+"&title="+escape(document.title);
    }

    //Move to the top of the window so the user can actually see the bookmark!
    window.location.hash="<%=singular_name%>_top";
}

/*
 * Functions
*/
function <%=singular_name%>_hide_adder(){
    document.getElementById('<%=singular_name%>_container_awd').style.display="none";
}

//iterate through json object, add each style name and value
function apply_all_styles(id, styles){
    for(style in styles){
        eval("document.getElementById('"+id+"').style."+style+"='"+styles[style]+"';");
    }
}