!function(a){function h(a){this.init(a)}a.extend(h,{init:function(h){function c(h,c){a(".ke-status > div",h).hide(),a(".ke-message",h).addClass("ke-error").show().html(a.escape(c))}var _=this;h.afterError=h.afterError||function(a){alert(a)},_.options=h,_.progressbars={},_.div=a(h.container).html(['<div class="ke-swfupload">','<div class="ke-swfupload-top">','<div class="ke-inline-block ke-swfupload-button">','<input type="button" value="Browse" />',"</div>",'<div class="ke-inline-block ke-swfupload-desc">'+h.uploadDesc+"</div>",'<span class="ke-button-common ke-button-outer ke-swfupload-startupload">','<input type="button" class="ke-button-common ke-button" value="'+h.startButtonValue+'" />',"</span>","</div>",'<div class="ke-swfupload-body"></div>',"</div>"].join("")),_.bodyDiv=a(".ke-swfupload-body",_.div);var g={debug:!1,upload_url:h.uploadUrl,flash_url:h.flashUrl,file_post_name:h.filePostName,button_placeholder:a(".ke-swfupload-button > input",_.div)[0],button_image_url:h.buttonImageUrl,button_width:h.buttonWidth,button_height:h.buttonHeight,button_cursor:SWFUpload.CURSOR.HAND,file_types:h.fileTypes,file_types_description:h.fileTypesDesc,file_upload_limit:h.fileUploadLimit,file_size_limit:h.fileSizeLimit,post_params:h.postParams,file_queued_handler:function(a){a.url=_.options.fileIconUrl,_.appendFile(a)},file_queue_error_handler:function(c,_){var g="";switch(_){case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:g=h.queueLimitExceeded;break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:g=h.fileExceedsSizeLimit;break;case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:g=h.zeroByteFile;break;case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:g=h.invalidFiletype;break;default:g=h.unknownError}a.DEBUG&&alert(g)},upload_start_handler:function(h){var c=this,_=a('div[data-id="'+h.id+'"]',c.bodyDiv);a(".ke-status > div",_).hide(),a(".ke-progressbar",_).show()},upload_progress_handler:function(a,h,c){var g=Math.round(100*h/c),S=_.progressbars[a.id];S.bar.css("width",Math.round(80*g/100)+"px"),S.percent.html(g+"%")},upload_error_handler:function(h){if(h&&h.filestatus==SWFUpload.FILE_STATUS.ERROR){var g=a('div[data-id="'+h.id+'"]',_.bodyDiv).eq(0);c(g,_.options.errorMessage)}},upload_success_handler:function(h,g){var S=a('div[data-id="'+h.id+'"]',_.bodyDiv).eq(0),F={};try{F=a.json(g)}catch(e){_.options.afterError.call(this,"<!doctype html><html>"+g+"</html>")}return 0!==F.error?void c(S,a.DEBUG?F.message:_.options.errorMessage):(h.url=F.url,a(".ke-img",S).attr("src",h.url).attr("data-status",h.filestatus).data("data",F),void a(".ke-status > div",S).hide())}};_.swfu=new SWFUpload(g),a(".ke-swfupload-startupload input",_.div).click(function(){_.swfu.startUpload()})},getUrlList:function(){var h=[];return a(".ke-img",self.bodyDiv).each(function(){var c=a(this),_=c.attr("data-status");_==SWFUpload.FILE_STATUS.COMPLETE&&h.push(c.data("data"))}),h},removeFile:function(h){var c=this;c.swfu.cancelUpload(h);var _=a('div[data-id="'+h+'"]',c.bodyDiv);a(".ke-photo",_).unbind(),a(".ke-delete",_).unbind(),_.remove()},removeFiles:function(){var h=this;a(".ke-item",h.bodyDiv).each(function(){h.removeFile(a(this).attr("data-id"))})},appendFile:function(h){var c=this,_=a('<div class="ke-inline-block ke-item" data-id="'+h.id+'"></div>');c.bodyDiv.append(_);var g=a('<div class="ke-inline-block ke-photo"></div>').mouseover(function(){a(this).addClass("ke-on")}).mouseout(function(){a(this).removeClass("ke-on")});_.append(g);var S=a('<img src="'+h.url+'" class="ke-img" data-status="'+h.filestatus+'" width="80" height="80" alt="'+h.name+'" />');g.append(S),a('<span class="ke-delete"></span>').appendTo(g).click(function(){c.removeFile(h.id)});var F=a('<div class="ke-status"></div>').appendTo(g);a(['<div class="ke-progressbar">','<div class="ke-progressbar-bar"><div class="ke-progressbar-bar-inner"></div></div>','<div class="ke-progressbar-percent">0%</div></div>'].join("")).hide().appendTo(F),a('<div class="ke-message">'+c.options.pendingMessage+"</div>").appendTo(F),_.append('<div class="ke-name">'+h.name+"</div>"),c.progressbars[h.id]={bar:a(".ke-progressbar-bar-inner",g),percent:a(".ke-progressbar-percent",g)}},remove:function(){this.removeFiles(),this.swfu.destroy(),this.div.html("")}}),a.swfupload=function(a,c){return new h(a,c)}}(KindEditor),KindEditor.plugin("multiimage",function(a){var h=this,c="multiimage",_=(a.undef(h.formatUploadUrl,!0),a.undef(h.uploadJson,h.basePath+"php/upload_json.php")),g=h.pluginsPath+"multiimage/images/",S=a.undef(h.imageSizeLimit,"1MB"),F=(a.undef(h.imageFileTypes,"*.jpg;*.gif;*.png"),a.undef(h.imageUploadLimit,20)),U=a.undef(h.filePostName,"imgFile"),v=h.lang(c+".");h.plugin.multiImageDialog=function(y){var b=y.clickFn,E=a.tmpl(v.uploadDesc,{uploadLimit:F,sizeLimit:S}),W=['<div style="padding:20px;">','<div class="swfupload">',"</div>","</div>"].join(""),D=h.createDialog({name:c,width:650,height:510,title:h.lang(c),body:W,previewBtn:{name:v.insertAll,click:function(){b.call(h,I.getUrlList())}},yesBtn:{name:v.clearAll,click:function(){I.removeFiles()}},beforeRemove:function(){(!a.IE||a.V<=8)&&I.remove()}}),w=D.div,I=a.swfupload({container:a(".swfupload",w),buttonImageUrl:g+("zh_CN"==h.langType?"select-files-zh_CN.png":"select-files-en.png"),buttonWidth:"zh_CN"==h.langType?72:88,buttonHeight:23,fileIconUrl:g+"image.png",uploadDesc:E,startButtonValue:v.startUpload,uploadUrl:a.addParam(_,"dir=image"),flashUrl:g+"swfupload.swf",filePostName:U,fileTypes:"*.jpg;*.jpeg;*.gif;*.png;*.bmp",fileTypesDesc:"Image Files",fileUploadLimit:F,fileSizeLimit:S,postParams:a.undef(h.extraFileUploadParams,{}),queueLimitExceeded:v.queueLimitExceeded,fileExceedsSizeLimit:v.fileExceedsSizeLimit,zeroByteFile:v.zeroByteFile,invalidFiletype:v.invalidFiletype,unknownError:v.unknownError,pendingMessage:v.pending,errorMessage:v.uploadError,afterError:function(a){h.errorDialog(a)}});return D},h.clickToolbar(c,function(){h.plugin.multiImageDialog({clickFn:function(c){0!==c.length&&(a.each(c,function(i,a){h.afterUpload&&h.afterUpload.call(h,a.url,a,"multiimage"),h.exec("insertimage",a.url,a.title,a.width,a.height,a.border,a.align)}),setTimeout(function(){h.hideDialog().focus()},0))}})})}),function(){window.SWFUpload=function(a){this.initSWFUpload(a)},SWFUpload.prototype.initSWFUpload=function(a){try{this.customSettings={},this.settings=a,this.eventQueue=[],this.movieName="KindEditor_SWFUpload_"+SWFUpload.movieCount++,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings(),this.loadFlash(),this.displayDebugInfo()}catch(ex){throw delete SWFUpload.instances[this.movieName],ex}},SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.2.0 2009-03-25",SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130},SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290},SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5},SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120},SWFUpload.CURSOR={ARROW:-1,HAND:-2},SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"},SWFUpload.completeURL=function(a){if("string"!=typeof a||a.match(/^https?:\/\//i)||a.match(/^\//))return a;var h=(window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),window.location.pathname.lastIndexOf("/"));return path=0>=h?"/":window.location.pathname.substr(0,h)+"/",path+a},SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(a,h){this.settings[a]=void 0==this.settings[a]?h:this.settings[a]},this.ensureDefault("upload_url",""),this.ensureDefault("preserve_relative_urls",!1),this.ensureDefault("file_post_name","Filedata"),this.ensureDefault("post_params",{}),this.ensureDefault("use_query_string",!1),this.ensureDefault("requeue_on_error",!1),this.ensureDefault("http_success",[]),this.ensureDefault("assume_success_timeout",0),this.ensureDefault("file_types","*.*"),this.ensureDefault("file_types_description","All Files"),this.ensureDefault("file_size_limit",0),this.ensureDefault("file_upload_limit",0),this.ensureDefault("file_queue_limit",0),this.ensureDefault("flash_url","swfupload.swf"),this.ensureDefault("prevent_swf_caching",!0),this.ensureDefault("button_image_url",""),this.ensureDefault("button_width",1),this.ensureDefault("button_height",1),this.ensureDefault("button_text",""),this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;"),this.ensureDefault("button_text_top_padding",0),this.ensureDefault("button_text_left_padding",0),this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES),this.ensureDefault("button_disabled",!1),this.ensureDefault("button_placeholder_id",""),this.ensureDefault("button_placeholder",null),this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW),this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW),this.ensureDefault("debug",!1),this.settings.debug_enabled=this.settings.debug,this.settings.return_upload_start_handler=this.returnUploadStart,this.ensureDefault("swfupload_loaded_handler",null),this.ensureDefault("file_dialog_start_handler",null),this.ensureDefault("file_queued_handler",null),this.ensureDefault("file_queue_error_handler",null),this.ensureDefault("file_dialog_complete_handler",null),this.ensureDefault("upload_start_handler",null),this.ensureDefault("upload_progress_handler",null),this.ensureDefault("upload_error_handler",null),this.ensureDefault("upload_success_handler",null),this.ensureDefault("upload_complete_handler",null),this.ensureDefault("debug_handler",this.debugMessage),this.ensureDefault("custom_settings",{}),this.customSettings=this.settings.custom_settings,this.settings.prevent_swf_caching&&(this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime()),this.settings.preserve_relative_urls||(this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)),delete this.ensureDefault},SWFUpload.prototype.loadFlash=function(){var a,h;if(null!==document.getElementById(this.movieName))throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";if(a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder,void 0==a)throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;h=document.createElement("div"),h.innerHTML=this.getFlashHTML(),a.parentNode.replaceChild(h.firstChild,a),void 0==window[this.movieName]&&(window[this.movieName]=this.getMovieElement())},SWFUpload.prototype.getFlashHTML=function(){var a="";return KindEditor.IE&&KindEditor.V>8&&(a=' classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'),['<object id="',this.movieName,'"'+a+' type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")},SWFUpload.prototype.getFlashVars=function(){var a=this.buildParamString(),h=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(h),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(a),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")},SWFUpload.prototype.getMovieElement=function(){if(void 0==this.movieElement&&(this.movieElement=document.getElementById(this.movieName)),null===this.movieElement)throw"Could not find Flash element";return this.movieElement},SWFUpload.prototype.buildParamString=function(){var a=this.settings.post_params,h=[];if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&h.push(encodeURIComponent(c.toString())+"="+encodeURIComponent(a[c].toString()));return h.join("&amp;")},SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,!1);var a=null;if(a=this.getMovieElement(),a&&"unknown"==typeof a.CallFunction){for(var i in a)try{"function"==typeof a[i]&&(a[i]=null)}catch(h){}try{a.parentNode.removeChild(a)}catch(ex){}}return window[this.movieName]=null,SWFUpload.instances[this.movieName]=null,delete SWFUpload.instances[this.movieName],this.movieElement=null,this.settings=null,this.customSettings=null,this.eventQueue=null,this.movieName=null,!0}catch(c){return!1}},SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","	","upload_url:               ",this.settings.upload_url,"\n","	","flash_url:                ",this.settings.flash_url,"\n","	","use_query_string:         ",this.settings.use_query_string.toString(),"\n","	","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","	","http_success:             ",this.settings.http_success.join(", "),"\n","	","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","	","file_post_name:           ",this.settings.file_post_name,"\n","	","post_params:              ",this.settings.post_params.toString(),"\n","	","file_types:               ",this.settings.file_types,"\n","	","file_types_description:   ",this.settings.file_types_description,"\n","	","file_size_limit:          ",this.settings.file_size_limit,"\n","	","file_upload_limit:        ",this.settings.file_upload_limit,"\n","	","file_queue_limit:         ",this.settings.file_queue_limit,"\n","	","debug:                    ",this.settings.debug.toString(),"\n","	","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","	","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","	","button_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n","	","button_image_url:         ",this.settings.button_image_url.toString(),"\n","	","button_width:             ",this.settings.button_width.toString(),"\n","	","button_height:            ",this.settings.button_height.toString(),"\n","	","button_text:              ",this.settings.button_text.toString(),"\n","	","button_text_style:        ",this.settings.button_text_style.toString(),"\n","	","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","	","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","	","button_action:            ",this.settings.button_action.toString(),"\n","	","button_disabled:          ",this.settings.button_disabled.toString(),"\n","	","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","	","swfupload_loaded_handler assigned:  ",("function"==typeof this.settings.swfupload_loaded_handler).toString(),"\n","	","file_dialog_start_handler assigned: ",("function"==typeof this.settings.file_dialog_start_handler).toString(),"\n","	","file_queued_handler assigned:       ",("function"==typeof this.settings.file_queued_handler).toString(),"\n","	","file_queue_error_handler assigned:  ",("function"==typeof this.settings.file_queue_error_handler).toString(),"\n","	","upload_start_handler assigned:      ",("function"==typeof this.settings.upload_start_handler).toString(),"\n","	","upload_progress_handler assigned:   ",("function"==typeof this.settings.upload_progress_handler).toString(),"\n","	","upload_error_handler assigned:      ",("function"==typeof this.settings.upload_error_handler).toString(),"\n","	","upload_success_handler assigned:    ",("function"==typeof this.settings.upload_success_handler).toString(),"\n","	","upload_complete_handler assigned:   ",("function"==typeof this.settings.upload_complete_handler).toString(),"\n","	","debug_handler assigned:             ",("function"==typeof this.settings.debug_handler).toString(),"\n"].join(""))},SWFUpload.prototype.addSetting=function(a,h,c){return this.settings[a]=void 0==h?c:h},SWFUpload.prototype.getSetting=function(a){return void 0!=this.settings[a]?this.settings[a]:""},SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement(),returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>"),returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}return void 0!=returnValue&&"object"==typeof returnValue.post&&(returnValue=this.unescapeFilePostParams(returnValue)),returnValue},SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")},SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")},SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])},SWFUpload.prototype.cancelUpload=function(a,h){h!==!1&&(h=!0),this.callFlash("CancelUpload",[a,h])},SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")},SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")},SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])},SWFUpload.prototype.getFile=function(a){return"number"==typeof a?this.callFlash("GetFileByIndex",[a]):this.callFlash("GetFile",[a])},SWFUpload.prototype.addFileParam=function(a,h,c){return this.callFlash("AddFileParam",[a,h,c])},SWFUpload.prototype.removeFileParam=function(a,h){this.callFlash("RemoveFileParam",[a,h])},SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString(),this.callFlash("SetUploadURL",[a])},SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a,this.callFlash("SetPostParams",[a])},SWFUpload.prototype.addPostParam=function(a,h){this.settings.post_params[a]=h,this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a],this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.setFileTypes=function(a,h){this.settings.file_types=a,this.settings.file_types_description=h,this.callFlash("SetFileTypes",[a,h])},SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a,this.callFlash("SetFileSizeLimit",[a])},SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a,this.callFlash("SetFileUploadLimit",[a])},SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a,this.callFlash("SetFileQueueLimit",[a])},SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a,this.callFlash("SetFilePostName",[a])},SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a,this.callFlash("SetUseQueryString",[a])},SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a,this.callFlash("SetRequeueOnError",[a])},SWFUpload.prototype.setHTTPSuccess=function(a){"string"==typeof a&&(a=a.replace(" ","").split(",")),this.settings.http_success=a,this.callFlash("SetHTTPSuccess",[a])},SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a,this.callFlash("SetAssumeSuccessTimeout",[a])},SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a,this.callFlash("SetDebugEnabled",[a])},SWFUpload.prototype.setButtonImageURL=function(a){void 0==a&&(a=""),this.settings.button_image_url=a,this.callFlash("SetButtonImageURL",[a])},SWFUpload.prototype.setButtonDimensions=function(a,h){this.settings.button_width=a,this.settings.button_height=h;var c=this.getMovieElement();void 0!=c&&(c.style.width=a+"px",c.style.height=h+"px"),this.callFlash("SetButtonDimensions",[a,h])},SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a,this.callFlash("SetButtonText",[a])},SWFUpload.prototype.setButtonTextPadding=function(a,h){this.settings.button_text_top_padding=h,this.settings.button_text_left_padding=a,this.callFlash("SetButtonTextPadding",[a,h])},SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a,this.callFlash("SetButtonTextStyle",[a])},SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a,this.callFlash("SetButtonDisabled",[a])},SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a,this.callFlash("SetButtonAction",[a])},SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a,this.callFlash("SetButtonCursor",[a])},SWFUpload.prototype.queueEvent=function(a,h){void 0==h?h=[]:h instanceof Array||(h=[h]);var c=this;if("function"==typeof this.settings[a])this.eventQueue.push(function(){this.settings[a].apply(this,h)}),setTimeout(function(){c.executeNextEvent()},0);else if(null!==this.settings[a])throw"Event handler "+a+" is unknown or is not a function"},SWFUpload.prototype.executeNextEvent=function(){var f=this.eventQueue?this.eventQueue.shift():null;"function"==typeof f&&f.apply(this)},SWFUpload.prototype.unescapeFilePostParams=function(a){var h,c=/[$]([0-9a-f]{4})/i,_={};if(void 0!=a){for(var g in a.post)if(a.post.hasOwnProperty(g)){h=g;for(var S;null!==(S=c.exec(h));)h=h.replace(S[0],String.fromCharCode(parseInt("0x"+S[1],16)));_[h]=a.post[g]}a.post=_}return a},SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(ex){return!1}},SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();return a?(this.cleanUp(a),void this.queueEvent("swfupload_loaded_handler")):void this.debug("Flash called back ready but the flash movie can't be found.")},SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&"unknown"==typeof a.CallFunction){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var h in a)try{"function"==typeof a[h]&&(a[h]=null)}catch(ex){}}}catch(c){}window.__flash__removeCallback=function(a,h){try{a&&(a[h]=null)}catch(c){}}},SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")},SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a),this.queueEvent("file_queued_handler",a)},SWFUpload.prototype.fileQueueError=function(a,h,c){a=this.unescapeFilePostParams(a),this.queueEvent("file_queue_error_handler",[a,h,c])},SWFUpload.prototype.fileDialogComplete=function(a,h,c){this.queueEvent("file_dialog_complete_handler",[a,h,c])},SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a),this.queueEvent("return_upload_start_handler",a)},SWFUpload.prototype.returnUploadStart=function(a){var h;if("function"==typeof this.settings.upload_start_handler)a=this.unescapeFilePostParams(a),h=this.settings.upload_start_handler.call(this,a);else if(void 0!=this.settings.upload_start_handler)throw"upload_start_handler must be a function";void 0===h&&(h=!0),h=!!h,this.callFlash("ReturnUploadStart",[h])},SWFUpload.prototype.uploadProgress=function(a,h,c){a=this.unescapeFilePostParams(a),this.queueEvent("upload_progress_handler",[a,h,c])},SWFUpload.prototype.uploadError=function(a,h,c){a=this.unescapeFilePostParams(a),this.queueEvent("upload_error_handler",[a,h,c])},SWFUpload.prototype.uploadSuccess=function(a,h,c){a=this.unescapeFilePostParams(a),this.queueEvent("upload_success_handler",[a,h,c])},SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a),this.queueEvent("upload_complete_handler",a)},SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)},SWFUpload.prototype.debugMessage=function(a){if(this.settings.debug){var h,c=[];if("object"==typeof a&&"string"==typeof a.name&&"string"==typeof a.message){for(var _ in a)a.hasOwnProperty(_)&&c.push(_+": "+a[_]);h=c.join("\n")||"",c=h.split("\n"),h="EXCEPTION: "+c.join("\nEXCEPTION: "),SWFUpload.Console.writeLine(h)}else SWFUpload.Console.writeLine(a)}},SWFUpload.Console={},SWFUpload.Console.writeLine=function(a){var h,c;try{h=document.getElementById("SWFUpload_Console"),h||(c=document.createElement("form"),document.getElementsByTagName("body")[0].appendChild(c),h=document.createElement("textarea"),h.id="SWFUpload_Console",h.style.fontFamily="monospace",h.setAttribute("wrap","off"),h.wrap="off",h.style.overflow="auto",h.style.width="700px",h.style.height="350px",h.style.margin="5px",c.appendChild(h)),h.value+=a+"\n",h.scrollTop=h.scrollHeight-h.clientHeight}catch(ex){alert("Exception: "+ex.name+" Message: "+ex.message)}}}(),function(){"function"==typeof SWFUpload&&(SWFUpload.queue={},SWFUpload.prototype.initSettings=function(a){return function(){"function"==typeof a&&a.call(this),this.queueSettings={},this.queueSettings.queue_cancelled_flag=!1,this.queueSettings.queue_upload_count=0,this.queueSettings.user_upload_complete_handler=this.settings.upload_complete_handler,this.queueSettings.user_upload_start_handler=this.settings.upload_start_handler,this.settings.upload_complete_handler=SWFUpload.queue.uploadCompleteHandler,this.settings.upload_start_handler=SWFUpload.queue.uploadStartHandler,this.settings.queue_complete_handler=this.settings.queue_complete_handler||null}}(SWFUpload.prototype.initSettings),SWFUpload.prototype.startUpload=function(a){this.queueSettings.queue_cancelled_flag=!1,this.callFlash("StartUpload",[a])},SWFUpload.prototype.cancelQueue=function(){this.queueSettings.queue_cancelled_flag=!0,this.stopUpload();for(var a=this.getStats();a.files_queued>0;)this.cancelUpload(),a=this.getStats()},SWFUpload.queue.uploadStartHandler=function(a){var h;return"function"==typeof this.queueSettings.user_upload_start_handler&&(h=this.queueSettings.user_upload_start_handler.call(this,a)),h=h===!1?!1:!0,this.queueSettings.queue_cancelled_flag=!h,h},SWFUpload.queue.uploadCompleteHandler=function(a){var h,c=this.queueSettings.user_upload_complete_handler;if(a.filestatus===SWFUpload.FILE_STATUS.COMPLETE&&this.queueSettings.queue_upload_count++,h="function"==typeof c?c.call(this,a)===!1?!1:!0:a.filestatus===SWFUpload.FILE_STATUS.QUEUED?!1:!0){var _=this.getStats();_.files_queued>0&&this.queueSettings.queue_cancelled_flag===!1?this.startUpload():this.queueSettings.queue_cancelled_flag===!1?(this.queueEvent("queue_complete_handler",[this.queueSettings.queue_upload_count]),this.queueSettings.queue_upload_count=0):(this.queueSettings.queue_cancelled_flag=!1,this.queueSettings.queue_upload_count=0)}})}();