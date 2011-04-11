//avoid bookmarking <%=singular_name%> pages
var bookmarkerURL = "http://%H%/";

//declare the variables
var bookmarker_inner_style, bookmarker_close_link_style,
    bookmarker_if_style, bookmarker_container_awd_style
//Define some styles for the objects
//Standard set of styles for NON-IE browsers
if(navigator.userAgent.indexOf("MSIE") < 0 ){
    bookmarker_inner_style = {
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
    bookmarker_close_link_style = {
        margin : "0px",
        padding : "0px",
        color : "#000066",
        fontSize : "11px"
    }
    bookmarker_if_style = {
        border : "0px",
        width : "700px",
        height : "500px"
    }
    bookmarker_container_awd_style = {
        width : "1px",
        margin : "0px auto",
        position : "relative"
    }
}else{
    //If we are using IE, we need to take a different approach
    bookmarker_inner_style = {
        width : "700px",
        textAlign : "right",
        height : "520px",
        margin : "0px auto",
        backgroundColor : "white"
    }
    bookmarker_close_link_style = {
        margin : "0px",
        padding : "0px",
        color : "#000066",
        fontSize : "11px",
        display : "block",
        textAlign : "right"
    }
    bookmarker_if_style = {
        border : "0px",
        width : "700px",
        height : "500px"
    }
    bookmarker_container_awd_style = {
        margin : "0px auto",
        backgroundColor : "#FFFFFF",
        borderBottom : "5px solid #000066"
    }
}

if( window.location.href.substring(0,bookmarkerURL.length)==bookmarkerURL ){
    alert('You can\'t bookmark a local page page!');
}else{
    //grab the first element of the dom
    var b = document.getElementsByTagName("body").item(0);

    //create the main holder div. Note, some IDs are appended with _awd to
    //make ID collisions less likely

    c=document.createElement('div');
        c.setAttribute("id","bookmarker_holder_awd");
        c.style.textAlign="center";
        c.style.zIndex="2147483640";
        c.innerHTML="\n\
        <div id='bookmarker_container_awd'>\n\
            <a name='bookmarker_top'></a>\n\
            <div id='bookmarker_inner'>\n\
                <a href='javascript:bookmarker_hide_adder()' id='bookmarker_closer' style='float:none'>Close</a>&nbsp;&nbsp;\n\
                <iframe style='' id='bookmarker_if' frameborder='0'></iframe>\n\
            </div>\n\
        </div>";

    //avoid double bookmarking. Just make the window visible again if it was hidden
    if(document.getElementById('bookmarker_container_awd')){
        document.getElementById('bookmarker_container_awd').style.display="block";
    }else{
        //insert the DIV and iframe
        b.insertBefore(c,b.childNodes [0]);
        //set the styles
        apply_all_styles('bookmarker_inner', bookmarker_inner_style);
        apply_all_styles('bookmarker_closer', bookmarker_close_link_style);
        apply_all_styles('bookmarker_if', bookmarker_if_style);
        apply_all_styles('bookmarker_container_awd', bookmarker_container_awd_style)

        //set the source for the iframe back to us
        document.getElementById('bookmarker_if').src=bookmarkerURL+"<%=plural_name%>/new?bookmarker_url="+escape(window.location.href)+"&title="+escape(document.title);
    }

    //Move to the top of the window so the user can actually see the bookmark!
    window.location.hash="bookmarker_top";
}

/*
 * Functions
*/
function bookmarker_hide_adder(){
    document.getElementById('bookmarker_container_awd').style.display = 'none';
}

//iterate through json object, add each style name and value
function apply_all_styles(id, styles){
    for(style in styles){
        eval("document.getElementById('"+id+"').style."+style+"='"+styles[style]+"';");
    }
}