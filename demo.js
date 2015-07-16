angular.module('mathWidget', [])
.controller('mathWidgetController', function() { 
	this.clockParams={'x':100,'y':100,'radius':80,'innerCircleStyle':{"fill":"#f5f5f5","stroke":'#009fcf',"stroke-width":"5"},'outerCircleStyle':{"stroke":"#292929","stroke-width":"2"},'tick-style':{'stroke':"#B0B0B0"},'font-style':{'font-size':14,"font-weight":600,'fill':'#009fcf'},'text-circle-style':{"stroke":"#CCCCCC"},'tick-style-number':{'stroke':"#909090",'stroke-width':2,"arrow-end":"classic-midium-long","stroke-linecap":"round"},'hour-hand-style':{stroke: "#444444", "stroke-width": 6},'minute-hand-style':{stroke: "#444444", "stroke-width": 4},'pin-style':{"fill":"#000000"},'text-circle-radius':9,'hour-hand-length':40,'minute-hand-length':60,'drag-hour-hand':false,'drag-minute-hand':false,'hour-handler-radius':6,'minute-handler-radius':6,'per-minute-snap':1,'per-hour-sanp':1,'minute-hadler-style':{"stroke": "#0000FF","fill" : "#0000FF"},'hour-handler-style':{"stroke": "#0000FF","fill" : "#0000FF"},'defaultTime':{'hour':0,'minute':0},'labels':[],'title':'Clock A','title-style':{'font-size': 12, "font-weight": "800"},'title-margin':20,'isDigital':false,'digiParams':{'top':10,'left':10,'width':200,'height':75,'background':'#959A93','border':'#38373D','isformat':true,'formatName':'AM'}}
	this.drawWidgets=function(){
		this.GraphmathJS=new GraphmathJS();
		this.drawClock();
	}
	this.drawClock=function(){
		$('#clockExample').html('')
		R=Raphael('clockExample',300,300);
		this.GraphmathJS.drawClock(R,this.clockParams)
	}
});
