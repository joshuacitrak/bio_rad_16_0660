function startAd(){var bgtl=new TimelineLite;bgtl.from("#bradBackground",3,{x:50});var mtl=new TimelineLite;mtl.from("#mag_content",3,{x:300}).from("#mag_txt",3,{x:90},0).to("#mag_txt",.6,{opacity:.3},11.8);var atl=new TimelineLite;atl.from("#april",.6,{opacity:0}).from("#tnf_alpha",.6,{opacity:0},.8).from("#mmp8",.6,{opacity:0},1.6).from("#igfbp",.6,{opacity:0},2.4).to("#april",.6,{opacity:0},2.4).from("#il26",.6,{opacity:0},3.2).to("#tnf_alpha",.6,{opacity:0},3.2).from("#sher2",.6,{opacity:0},4).to("#mmp8",.6,{opacity:0},4).from("#pyy",.6,{opacity:0},4.8).to("#igfbp",.6,{opacity:0},4.8).from("#il6",.6,{opacity:0},5.6).to("#il26",.6,{opacity:0},5.6).from("#il8",.6,{opacity:0},6.4).to("#sher2",.6,{opacity:0},6.4).from("#il10",.6,{opacity:0},7.2).to("#pyy",.6,{opacity:0},7.2).to("#il6",.6,{opacity:0},7.8).to("#il8",.6,{opacity:0},8.4).to("#il10",.6,{opacity:0},8.8);var ttl=new TimelineLite;ttl.from("#t2",.8,{y:-10,opacity:0,ease:Power3.easeOut}).from("#t3",.8,{y:-10,opacity:0,ease:Power3.easeOut},1).from("#t4",.8,{y:-10,opacity:0,ease:Power3.easeOut},2);var ctl=new TimelineLite;ctl.from("#bradCtaButton",.8,{opacity:0,ease:Power3.easeOut}),tl.add(bgtl,0),tl.add(mtl,0),tl.add(atl,3),tl.add(ttl,12.2),tl.add(ctl,14)}function addListeners(){document.getElementById("bradContent").addEventListener("click",clickthrough)}function clickthrough(){EB.clickthrough()}function animationComplete(evt){}function checkInit(){function onInit(){TweenLite.set("#bradContainer",{opacity:1}),addListeners(),startAd()}EB.isInitialized()?onInit():EB.addEventListener(EBG.EventName.EB_INITIALIZED,onInit)}function updateSlider(){$("#slider").slider("value",100*tl.progress())}window.addEventListener("load",checkInit);var tl=new TimelineLite({onUpdate:updateSlider});tl.eventCallback("onComplete",animationComplete),$("#play").click(function(){1!=tl.progress()?tl.play():tl.restart()}),$("#pause").click(function(){tl.pause()}),$("#restart").click(function(){tl.restart()}),$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(event,ui){tl.pause(),tl.progress(ui.value/100)}});