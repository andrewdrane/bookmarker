//avoid bookmarking <%=singular_name%> pages
if( window.location.href.substring(0,21)=='<%= location %>' ){
    alert('You can\'t bookmark a local page page!');
}else{
    //grab the first element of the dom
    var b = document.getElementsByTagName("body").item(0);

    //create the main holder div. Note, some IDs are appended with _awd to
    //make ID collisions less likely

    c=document.createElement('div');
        c.setAttribute("id","<%=singular_name%>_holder_awd");
        c.style.textAlign="center";
        c.style.position="relative";
        c.style.zIndex="2147483640";
        c.innerHTML="\n\
        <div style='width:500px; margin:0px auto;' id='<%=singular_name%>_container_awd'>\n\
            <a name='<%=singular_name%>_top'></a>\n\
            <div style='position:absolute; z-index:2147483640; width:700px; border:5px solid #000066; text-align:right; height:520px; top:10px; background-color:white;'>\n\
                <a href='javascript:<%=singular_name%>_hide_adder()' style='font-size:11px;'>Close</a>&nbsp;&nbsp;\n\
                <iframe style='border:0px; width:700px; height:500px;' id='<%=singular_name%>_if'></iframe>\n\
            </div>\n\
        </div>";

    //avoid double bookmarking
    if(document.getElementById('<%=singular_name%>_container_awd')){
        document.getElementById('<%=singular_name%>_container_awd').style.display="block";
    }else{
        //insert the DIV and iframe
        b.insertBefore(c,b.childNodes [0]);
        //set the source for the iframe back to us
        document.getElementById('<%=singular_name%>_if').src="<%= location %><%=plural_name%>/new?url="+escape(window.location.href)+"&title="+escape(document.title);
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