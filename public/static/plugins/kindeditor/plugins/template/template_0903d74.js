KindEditor.plugin("template",function(a){function c(c){return g+c+"?ver="+encodeURIComponent(a.DEBUG?a.TIME:a.VERSION)}var v=this,h="template",g=(v.lang(h+"."),v.pluginsPath+h+"/html/");v.clickToolbar(h,function(){var g=v.lang(h+"."),k=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',g.selectTemplate+" <select>"];a.each(g.fileList,function(a,c){k.push('<option value="'+a+'">'+c+"</option>")}),html=[k.join(""),"</select></div>",'<div class="ke-right">','<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'+g.replaceContent+"</label>","</div>",'<div class="ke-clearfix"></div>',"</div>",'<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>',"</div>"].join("");var b=v.createDialog({name:h,width:500,title:v.lang(h),body:html,yesBtn:{name:v.lang("yes"),click:function(){var c=a.iframeDoc(D);v[F[0].checked?"html":"insertHtml"](c.body.innerHTML).hideDialog().focus()}}}),y=a("select",b.div),F=a('[name="replaceFlag"]',b.div),D=a("iframe",b.div);F[0].checked=!0,D.attr("src",c(y.val())),y.change(function(){D.attr("src",c(this.value))})})});