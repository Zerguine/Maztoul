
    var welcome_notification={"notification_title":"Welcome to blogspot","notification_message":" Thanks for subscribing to push notifications","notification_url":"https:\/\/maztoull.blogspot.com\/","welcome_enabled":"false"}; 
var custom_url=false; 
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var ff_str_pos = navigator.userAgent.toLowerCase().indexOf('firefox/')+8;
var cc_str_pos = navigator.userAgent.toLowerCase().indexOf('chrome/')+7;
var ff_version = parseInt(navigator.userAgent.substr(ff_str_pos,2));
var cc_version = navigator.userAgent.substr(cc_str_pos,2);
if(typeof(pe_http_box_loaded)=="undefined") var pe_http_box_loaded=false;
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    
    return null;
}

window.addEventListener("load",function() {
htmlbody1 = document.getElementsByTagName("BODY")[0];      
if(getCookie("PushSubscriberID")==null || getCookie("PushSubscriberID")=="false")
htmlbody1.insertAdjacentHTML( 'beforeend', '<iframe src="https://maztoul.pushengage.com/cookie.php" style="display: none;"></iframe>');
_pedata.forEach(function(item,index){
    
    if (item.action=="subscribe") {_pe.subscribe();}
    
  });
},false);
window.addEventListener('message',function(event) {
  if(event.origin !== 'https://maztoul.pushengage.com') return;
  subscriber_data=JSON.parse(event.data);
  
  if(typeof(subscriber_data.state) != "undefined"){
  if (subscriber_data.state=="granted"){
    console.log(subscriber_data);
    showContent();

  }   
    }
  else{
  document.cookie='isPushEnabled='+subscriber_data.isPushEnabled.toString()+'; expires=Fri, 3 Aug 2222 20:47:11 UTC; path=/';
  document.cookie='PushSubscriberID='+subscriber_data.PushSubscriberID.toString()+'; expires=Fri, 3 Aug 2222 20:47:11 UTC; path=/';
  }

  _pedata.forEach(function(item,index){
    
    if (item.action=="addSubscriberToSegment") {_pe.addSubscriberToSegment(item.data)}
    if (item.action=="removeSubscriberFromSegment") {_pe.removeSubscriberFromSegment(item.data)}
  });
},false);

function PEleft_hide_sidebar()
  {
    document.querySelector('.PE-optin4-box').style.display = "none";
    
  }
  function PEleft_show_sidebar()
  {
    document.querySelector('.PE-optin4-box').style.display = "block";
    
    
  }
  
  var PEswingwell="";
  function PESwingWellSetOption4()
  {
  PEswingwell = setInterval(function(){ startWellSwing() }, 1000);
  }

  function startWellSwing() {
    var elements = document.getElementsByClassName('fa fa-bell PEoption4bell');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if(element.className=='fa fa-bell PEoption4bell')
        element.className += ' PEnotioption4-swing';
      else
        element.className='fa fa-bell PEoption4bell';
      }
  }
PESwingWellSetOption4();
  function stopWellSwing() {
    clearInterval(PEswingwell);
  }
  function showContent() {
  document.querySelector(".pushengagesweet-alert").style.display="block";
  document.querySelector(".pushengagesweet-overlay").style.display="block";
  document.querySelector(".pushengagesweet-overlay").style.opacity=0.8;
  document.querySelector(".pushengagesweet-alert").className = "pushengagesweet-alert visible showpushengagesweetAlert";
 
  }

function hideAlert(segment){
  document.querySelector(".pushengagesweet-overlay").style.display="none";
  document.querySelector(".pushengagesweet-overlay").style.opacity=0;
  document.querySelector(".visible").className = "pushengagesweet-alert hidepushengagesweetAlert";
  document.querySelector(".hidepushengagesweetAlert").style.display="none";
  var link=_peapp.app_subdomain+"?action=subscribe";
  if (segment != 'undefined' && (typeof segment !== "undefined")) {
    link=link+"&segment="+segment;
  }
  if (custom_url) {
    link=custom_url.url;              
    if (custom_url.type=="window") {
      var _pewin = window.open(link,"_blank",  "width=192, height=185"); 
    }
    else if (custom_url.type=="tab"){
      var _pewin = window.open(link);  
    }
  }
  else        
  window.open(link,"_blank", "width=192, height=185");  
  
}
function attachIframe(){
  iframe = document.createElement("IFRAME"),
  iframe.setAttribute("src",_peapp.app_subdomain+"/iframe.html"),
  iframe.style.width = "0px",
  iframe.style.height = "0px",
  iframe.style.border = "0px",
  iframe.setAttribute("visibility", "hidden"), iframe.style.display = "none" ;
  if(document.body)  document.body.appendChild(iframe); else document.head.appendChild(iframe);  
}
function addAlertHtml(segment){  
  htmlbody = document.getElementsByTagName("BODY")[0];      
    htmlbody.insertAdjacentHTML( 'beforeend','<div class="pushengagesweet-overlay" tabindex="-1" style="opacity: 1.1; display: none;"></div><div class="pushengagesweet-alert showpushengagesweetAlert visible" data-custom-class="" data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="false" data-animation="pop" data-timer="null" style="display: none;margin-top: -122px;"><div class="pushengagesweet-alert-content"><h2>'+_pe_optin_settings.desktop.optin_title+'</h2><p class="pushengagesweet-alert-poweredby">'+_peapp.app_poweredby+'</p></div><div class="sa-button-container"><div class="sa-confirm-button-container"  onclick="hideAlert(\''+segment+'\');"><button class="confirm" tabindex="1">غلق</button></div></div></div>');
  }

function attachDialogCss()
{
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = _peapp.app_subdomain+"/dialog.css";
  link.media = 'screen';
  htmlbody.appendChild(link);
  }
  if(typeof(pathvars) == "undefined")
  var pathvars={worker:"/service-worker.js",manifest:"/manifest.json"};
  var internalsegment=false;
      var _peapp={
  "app_key":"d66d6f2745db57758d3aa02d5474708b",
  "app_id":"935",
  "app_name":"اســأل مزطول ولا تســأل حكيــم",
  "app_subdomain":"https://maztoul.pushengage.com",
  "app_image":"https://assetscdn.pushengage.com/site_images/93580ea01463189853.png",
  "app_poweredby":"powered by PushEngage",
  "app_url":"http://www.pushengage.com"
   };
   if(typeof(_pedata) == "undefined")
   var _pedata=[];
   var _pe_optin_settings={"desktop":{"optin_delay":1,"optin_type":4,"optin_title":"\u062a\u0645\u0643\u064a\u0646 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062c\u0647\u0627\u0632, \u064a\u0645\u0643\u0646\u0643 \u0631\u0624\u064a\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0641\u064a \u0632\u0627\u0648\u064a\u0629 \u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0645\u0628\u064a\u0648\u062a\u0631 \u062d\u062a\u0649 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0627\u0644\u0645\u0648\u0642\u0639 \u063a\u064a\u0631 \u0645\u0641\u062a\u0648\u062d.","optin_allow_btn_txt":"\u0645\u0648\u0627\u0641\u0642","optin_close_btn_txt":"Close","optin_font":null},"mobile":null,"intermediate":{"page_heading":"Click on Allow to get Notifications from '\u0627\u0633\u0640\u0640\u0623\u0644 \u0645\u0632\u0637\u0648\u0644 \u0648\u0644\u0627 \u062a\u0633\u0640\u0640\u0623\u0644 \u062d\u0643\u064a\u0640\u0640\u0645'","page_tagline":"Get Updates from '\u0627\u0633\u0640\u0640\u0623\u0644 \u0645\u0632\u0637\u0648\u0644 \u0648\u0644\u0627 \u062a\u0633\u0640\u0640\u0623\u0644 \u062d\u0643\u064a\u0640\u0640\u0645' through push notifications"}}; 
   var _pehost="https://pushengage.com/";
   function peGetCookie(cname) {
        if(localStorage.getItem(cname)!=null) return localStorage.getItem(cname);
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
   if ( location.protocol==="http:") {
        var _pe={
  openDialogBox:function(segment){
    var link=_peapp.app_subdomain+"?action=subscribe";
            if (typeof segment !== 'undefined') {
              link=link+"&segment="+segment;
            }
    var _pewin = window.open(link,"_blank", "width=800, height=600");
  },
   addSubscriberToSegment :function(segmentName) {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("action=add_subscriber_to_segment&segment_name="+segmentName+"&PushSubscriberID="+getCookie("PushSubscriberID"));
    _pedata.push({"action":"addSubscriberToSegment","data":segmentName});
    return true;    
  },
  removeSubscriberFromSegment :function(segmentName) {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("action=remove_subscriber_from_segment&segment_name="+segmentName+"&PushSubscriberID="+getCookie("PushSubscriberID"));
    _pedata.push({"action":"removeSubscriberFromSegment","data":segmentName});
    return true;    
  },
  addProfileId :function(profileId) {

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("action=add_profile_id&profile_id="+profileId+"&PushSubscriberID="+getCookie("PushSubscriberID"));
    _pedata.push({"action":"addProfileId","data":profileId});
    return true;    
  },
  iframe_subscribe : function(segment){ 
 if(document.readyState == "complete"){
    attachIframe(); 
    addAlertHtml(segment);
    attachDialogCss();
    }
   else 
    window.addEventListener("load",function() {
      attachIframe();
      addAlertHtml(segment);
      attachDialogCss();
  });
  },
  subscribe : function(segment){
    if(_pe_optin_settings.desktop.optin_type==4)//iframe subscriber end
    {
      return this.iframe_subscribe(segment);
    }
    if (typeof customcall !== 'undefined') {
      htmlbody = document.getElementsByTagName("BODY")[0];      
          htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' style='position:fixed;width:435px;top:0px;left:33%;border: 1px solid #D0D0D0;background: #EFEFEF;padding:15px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;box-shadow: 1px 1px 3px #DCDCDC;z-index: 999999;'><div style='float: left;padding: -1px;margin-right: 8px;width:80px;height:80px;' id='pushengage_client_img'><img src='"+_peapp.app_image+"' style='width: 87px;'></div>  <div style='font-family: arial;font-size: 15px;font-weight: 600;color: #4A4A4A;' id='pushengage_dialog_content'>"+_pe_optin_settings.desktop.optin_title+"</div>  <div style='clear: both;'><div style='float: left;font-family: arial;font-size: 9px;padding-top: 10px;'>"+_peapp.app_poweredby+"</div><div style='float: right;font-family: arial;padding: 1px 19px;font-size: 15px;background-color: #2ecc71;color: #fff;border: 1px solid #7FB797;border-radius: 4px;cursor:pointer;' id='pushengage_allow_btn' >"+_pe_optin_settings.desktop.optin_allow_btn_txt+"</div><div style='float: right;font-family: arial;font-size: 15px;padding: 1px 19px;background-color: #fff;border-radius: 5px;border: 1px solid #D6D1D1;margin-right: 7px;cursor:pointer;' id='pushengage_close_btn'>"+_pe_optin_settings.desktop.optin_close_btn_txt+"</div>  </div>  </div> ");
          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = _peapp.app_subdomain+"/dialog.css";
          link.media = 'screen';
          htmlbody.appendChild(link);

          var now = new Date();
          var time = now.getTime();

          var expireTime = time + (1000*60*60*24*30);
                        now.setTime(expireTime);
          host = location.host;
          domainParts = host.split('.');
          
          if (domainParts.length>2) {
            var reducelen=domainParts.length-2;
          }
          for (var i = 0; i <reducelen; i++) {
            domainParts.shift();
          };
          
          domain = '.'+domainParts.join('.');

            pe_allow_btn=document.getElementById("pushengage_allow_btn");
            pe_allow_btn.addEventListener("click",function(){
            document.cookie="peclosed=true; expires=Fri, 3 Aug 2222 20:47:11 UTC;path=/;";//domain="+domain;  
            localStorage.setItem('peclosed', true);
            var _pewin = window.open(_peapp.app_subdomain+"?action=subscribe","_blank", "width=800, height=600");
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            

          });
          pe_close_btn=document.getElementById("pushengage_close_btn");
          pe_close_btn.addEventListener("click",function(){   
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            document.cookie="peclosed=true; expires="+now.toGMTString()+";path=/;";//domain="+domain;
            localStorage.setItem('peclosed', true);
          });
    }
    if (peGetCookie("peclosed")===""&&pe_http_box_loaded==false){
      pe_http_box_loaded=true;
      if(document.readyState == "complete"){
        console.log("ready");
        

      var delay=_pe_optin_settings.desktop.optin_delay*1000; //1 seconds
    
        if ( (is_chrome && cc_version>=42) || (is_firefox && ff_version >= 44) ) 
        setTimeout(function(){

          htmlbody = document.getElementsByTagName("BODY")[0];      
          if(_pe_optin_settings.desktop.optin_type==1 || typeof _pe_optin_settings.desktop.optin_type == "undefined")          
          htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' style='position:fixed;width:435px;top:0px;left:33%;border: 1px solid #D0D0D0;background: #EFEFEF;padding:15px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;box-shadow: 1px 1px 3px #DCDCDC;z-index: 999999;'><div style='float: left;padding: -1px;margin-right: 8px;width:80px;height:80px;' id='pushengage_client_img'><img src='"+_peapp.app_image+"' style='width: 87px;'></div>  <div style='font-family: arial;font-size: 15px;font-weight: 600;color: #4A4A4A;' id='pushengage_dialog_content'>"+_pe_optin_settings.desktop.optin_title+"</div>  <div style='clear: both;'><div style='float: left;font-family: arial;font-size: 9px;padding-top: 10px;'>"+_peapp.app_poweredby+"</div><div style='float: right;font-family: arial;padding: 1px 19px;font-size: 15px;background-color: #2ecc71;color: #fff;border: 1px solid #7FB797;border-radius: 4px;cursor:pointer;' id='pushengage_allow_btn' >"+_pe_optin_settings.desktop.optin_allow_btn_txt+"</div><div style='float: right;font-family: arial;font-size: 15px;padding: 1px 19px;background-color: #fff;border-radius: 5px;border: 1px solid #D6D1D1;margin-right: 7px;cursor:pointer;' id='pushengage_close_btn'>"+_pe_optin_settings.desktop.optin_close_btn_txt+"</div>  </div>  </div> ");

          if(_pe_optin_settings.desktop.optin_type==2)
          htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' class='optin-3 optin-floatin' style='transition-duration: 1.5s;'><div class='cls-btn' id='pushengage_close_btn'><i class='fa fa-close'></i></div><div class='pe_logo'><img src='"+_peapp.app_image+"'></div><div class='pe_title'>"+_pe_optin_settings.desktop.optin_title+"</div><div class='pe_buttons'><input type='button' value='"+_pe_optin_settings.desktop.optin_allow_btn_txt+"' id='pushengage_allow_btn' class='pe_btn-allow allow-btn'></div><div class='pe_branding'><a href='http://www.pushengage.com/' target='_blank'>"+_peapp.app_poweredby+"</a></div></div>");
          if(_pe_optin_settings.desktop.optin_type==3)
            htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' class='PE-optin4'><div class='PE-optin4-box PE-arrow_box '><div class='PE-optin4-image' style='padding-top:10px'><img src='"+_peapp.app_image+"' style='border-radius:50%'></div><div class='PE-optin4-text'><span id='PEnoti-close-pane' onclick='PEleft_hide_sidebar(); PESwingWellSetOption4();'><i class='fa fa-close'></i></span><i id='pushengage_close_btn'></i><div class='PE-title PE-optin4-heading' style='padding-top:10px'>"+_pe_optin_settings.desktop.optin_title+"</div></div><div class='PE-optin4-btns'><input type='button' class='PE-push-btn PE-btn-allow'  value='"+_pe_optin_settings.desktop.optin_allow_btn_txt+"'></div><div class='PE-branding'><a href='https://www.pushengage.com' target='_blank'>"+_peapp.app_poweredby+"</a></div></div><div class='PE-optin4-bell' id='pushengage_allow_btn' ><i class='fa fa-bell PEoption4bell PEnotioption4-swing'></i></div></div>");

          
          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = _peapp.app_subdomain+"/dialog.css";
          link.media = 'screen';

          htmlbody.appendChild(link);

          var now = new Date();
          var time = now.getTime();
          var expireTime = time + (1000*60*60*24*30);
                    now.setTime(expireTime);
          host = location.host;
          domainParts = host.split('.');
        
          if (domainParts.length>2) {
            var reducelen=domainParts.length-2;
          }
          for (var i = 0; i <reducelen; i++) {
            domainParts.shift();
          };
          
          domain = '.'+domainParts.join('.');

            pe_allow_btn=document.getElementById("pushengage_allow_btn");
            pe_allow_btn.addEventListener("click",function(){            
            var link=_peapp.app_subdomain+"?action=subscribe";
            if (typeof segment !== 'undefined') {
              link=link+"&segment="+segment;
            }
            if (custom_url) {
              link=custom_url.url;              
              if (custom_url.type=="window") {
                var _pewin = window.open(link,"_blank", "width=800, height=600"); 
              }
              else if (custom_url.type=="tab"){
                var _pewin = window.open(link);  
              }
            }
            else
            var _pewin = window.open(link,"_blank", "width=800, height=600");
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            document.cookie="peclosed=true; expires=Fri, 3 Aug 2222 20:47:11 UTC;path=/;";//domain="+domain;
            localStorage.setItem('peclosed', true);

          });
          pe_close_btn=document.getElementById("pushengage_close_btn");
          pe_close_btn.addEventListener("click",function(){   
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            document.cookie="peclosed=true; expires="+now.toGMTString()+";path=/;";//domain="+domain;
            localStorage.setItem('peclosed', true);
          });
        }, delay);
      }      
      window.addEventListener("load",function() {
        console.log("onload");
        
        _pedata.forEach(function(item,index){
    
          if (item.action=="addSubscriberToSegment") {segment=item.data;}
          
        });      
        var delay=_pe_optin_settings.desktop.optin_delay*1000; //1 seconds

        if ( (is_chrome && cc_version>=42) || (is_firefox && ff_version >= 44) ) 
        setTimeout(function(){

          htmlbody = document.getElementsByTagName("BODY")[0];    
          
          if(_pe_optin_settings.desktop.optin_type==1 || typeof _pe_optin_settings.desktop.optin_type == "undefined"){          
          htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' style='position:fixed;width:435px;top:0px;left:33%;border: 1px solid #D0D0D0;background: #EFEFEF;padding:15px;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;box-shadow: 1px 1px 3px #DCDCDC;z-index: 999999;'><div style='float: left;padding: -1px;margin-right: 8px;width:80px;height:80px;' id='pushengage_client_img'><img src='"+_peapp.app_image+"' style='width: 87px;'></div>  <div style='font-family: arial;font-size: 15px;font-weight: 600;color: #4A4A4A;' id='pushengage_dialog_content'>"+_pe_optin_settings.desktop.optin_title+"</div>  <div style='clear: both;'><div style='float: left;font-family: arial;font-size: 9px;padding-top: 10px;'>"+_peapp.app_poweredby+"</div><div style='float: right;font-family: arial;padding: 1px 19px;font-size: 15px;background-color: #2ecc71;color: #fff;border: 1px solid #7FB797;border-radius: 4px;cursor:pointer;' id='pushengage_allow_btn' >"+_pe_optin_settings.desktop.optin_allow_btn_txt+"</div><div style='float: right;font-family: arial;font-size: 15px;padding: 1px 19px;background-color: #fff;border-radius: 5px;border: 1px solid #D6D1D1;margin-right: 7px;cursor:pointer;' id='pushengage_close_btn'>"+_pe_optin_settings.desktop.optin_close_btn_txt+"</div>  </div>  </div> ");
                      
          }
          if(_pe_optin_settings.desktop.optin_type==2)
          htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' class='optin-3 optin-floatin' style='transition-duration: 1.5s;'><div class='cls-btn' id='pushengage_close_btn'><i class='fa fa-close'></i></div><div class='pe_logo'><img src='"+_peapp.app_image+"'></div><div class='pe_title'>"+_pe_optin_settings.desktop.optin_title+"</div><div class='pe_buttons'><input type='button' value='"+_pe_optin_settings.desktop.optin_allow_btn_txt+"' id='pushengage_allow_btn' class='pe_btn-allow allow-btn'></div><div class='pe_branding'><a href='http://www.pushengage.com/' target='_blank'>"+_peapp.app_poweredby+"</a></div></div>");
          if(_pe_optin_settings.desktop.optin_type==3)
            htmlbody.insertAdjacentHTML( 'beforeend', "<div id='pushengage_confirm' class='PE-optin4'><div class='PE-optin4-box PE-arrow_box '><div class='PE-optin4-image' style='padding-top:10px'><img src='"+_peapp.app_image+"' style='border-radius:50%'></div><div class='PE-optin4-text'><span id='PEnoti-close-pane' onclick='PEleft_hide_sidebar(); PESwingWellSetOption4();'><i class='fa fa-close'></i></span><i id='pushengage_close_btn'></i><div class='PE-title PE-optin4-heading' style='padding-top:10px'>"+_pe_optin_settings.desktop.optin_title+"</div></div><div class='PE-optin4-btns'><input type='button' class='PE-push-btn PE-btn-allow'  value='"+_pe_optin_settings.desktop.optin_allow_btn_txt+"'></div><div class='PE-branding'><a href='https://www.pushengage.com' target='_blank'>"+_peapp.app_poweredby+"</a></div></div><div class='PE-optin4-bell' id='pushengage_allow_btn' ><i class='fa fa-bell PEoption4bell PEnotioption4-swing'></i></div></div>");

          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = _peapp.app_subdomain+"/dialog.css";
          link.media = 'screen';

          htmlbody.appendChild(link);

          var now = new Date();
          var time = now.getTime();
          var expireTime = time + (1000*60*60*24*30);
                    now.setTime(expireTime);
          host = location.host;
          domainParts = host.split('.');
        
          if (domainParts.length>2) {
            var reducelen=domainParts.length-2;
          }
          for (var i = 0; i <reducelen; i++) {
            domainParts.shift();
          };
          
          domain = '.'+domainParts.join('.');

            pe_allow_btn=document.getElementById("pushengage_allow_btn");
            pe_allow_btn.addEventListener("click",function(){ 

            var link=_peapp.app_subdomain+"?action=subscribe";
            if (typeof segment !== 'undefined') {
              link=link+"&segment="+segment;
            }
            
            if (custom_url) {
              link=custom_url.url;              
              if (typeof segment !== 'undefined') {
                link=link+"?segment="+segment;
              }
              if (custom_url.type=="window") {
                var _pewin = window.open(link,"_blank", "width=800, height=600"); 
              }
              else if (custom_url.type=="tab"){
                var _pewin = window.open(link);  
              }
            }
            else
            var _pewin = window.open(link,"_blank", "width=800, height=600");
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            document.cookie="peclosed=true; expires=Fri, 3 Aug 2222 20:47:11 UTC;path=/;";//domain="+domain;
            localStorage.setItem('peclosed', true);

          });
          pe_close_btn=document.getElementById("pushengage_close_btn");
          pe_close_btn.addEventListener("click",function(){   
            pushengage_confirm=document.getElementById("pushengage_confirm");   
            pushengage_confirm.style.display="none";
            document.cookie="peclosed=true; expires="+now.toGMTString()+";path=/;";//domain="+domain;
            localStorage.setItem('peclosed', true);
          });
        }, delay);
     
    },false);

    }

    }
  };
    

  }
  if (location.protocol==="https:")
  {
     var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = _peapp.app_subdomain+"/script.js";
        document.getElementsByTagName('head')[0].appendChild(script);
         var _pe={
    subscribe:function(segmentName){
      if (typeof segmentName != 'undefined'){
                if (!internalsegment)
                internalsegment=segmentName;
                

              }
        if (typeof pe != 'undefined' &&  getCookie("PushSubscriberID")!=null){
                        if(internalsegment != false){
                segment=internalsegment;
              }
       if(getCookie("PushSubscriberID")==null || getCookie("PushSubscriberID")=="false")                
              pe.subscribe();
          } else {
              setTimeout(_pe.subscribe, 50);
          }
        },
       addSubscriberToSegment :function(segmentName) {
        var isPushEnabled=false;
        var PushSubscriberID=false;
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {              
              serviceWorkerRegistration.pushManager.getSubscription().then(
                function(pushSubscription) {                  
                  
                  if (!pushSubscription) {
                    isPushEnabled=false;
                    return;
                  }
                  else{
                    isPushEnabled=true;
                    
                    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                       if(is_firefox)
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("v1/")+3);
                       }
                       else
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("send/")+5);
                       }
                      
                      var xhttp = new XMLHttpRequest();
                      xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
                      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                      xhttp.send("action=add_subscriber_to_segment&segment_name="+segmentName+"&PushSubscriberID="+PushSubscriberID);
                  }                
                }
                );
          });
    
    return true;    
  },
  addProfileId: function(profileId) {
        _pedata.push({"action":"addProfileId","data":profileId}); 
        var isPushEnabled=false;
        var PushSubscriberID=false;
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {              
              serviceWorkerRegistration.pushManager.getSubscription().then(
                function(pushSubscription) {                  
                  
                  if (!pushSubscription) {
                    isPushEnabled=false;
                    return;
                  }
                  else{
                    isPushEnabled=true;
                    
                    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                       if(is_firefox)
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("v1/")+3);
                       }
                       else
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("send/")+5);
                       }
                      
                      var xhttp = new XMLHttpRequest();
                      xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
                      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                      xhttp.send("action=add_profile_id&profile_id="+profileId+"&PushSubscriberID="+PushSubscriberID);
                      //                    
                      
                  }                
                }
                );
          });
    
    return true;    
  },
  removeSubscriberFromSegment :function(segmentName) {
     var isPushEnabled=false;
        var PushSubscriberID=false;
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {              
              serviceWorkerRegistration.pushManager.getSubscription().then(
                function(pushSubscription) {                  
                  
                  
                  if (!pushSubscription) {
                    isPushEnabled=false;
                    return;
                  }
                  else{
                    isPushEnabled=true;
                    
                    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                       if(is_firefox)
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("v1/")+3);
                       }
                       else
                       {
                        PushSubscriberID = pushSubscription.endpoint.slice(pushSubscription.endpoint.search("send/")+5);
                       }
                      var xhttp = new XMLHttpRequest();
                      xhttp.open("POST", _peapp.app_subdomain+"/segments.php", false);
                      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                      xhttp.send("action=remove_subscriber_from_segment&segment_name="+segmentName+"&PushSubscriberID="+PushSubscriberID);
                  }                
                }
                );
          });
    
    
    return true;    
  } 
    };
  }


  function subscribe() {
      if (typeof pe != 'undefined'){

          pe.subscribe();
      } else {
          setTimeout(subscribe, 50);
      }
  }
  
