var consumo=[],detalhado=[];if($("#coin_sales1").length)var ctx=document.getElementById("coin_sales1").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(117, 19, 246, 0.1)",borderColor:"#0b76b6",data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});if($("#coin_sales2").length)ctx=document.getElementById("coin_sales2").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(240, 180, 26, 0.1)",borderColor:"#F0B41A",data:[18,41,86,49,20,65,64,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});if($("#coin_sales3").length)ctx=document.getElementById("coin_sales3").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(247, 163, 58, 0.1)",borderColor:"#fd9d24",fill:!0,data:[18,41,50,49,20,65,50,86,20,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});if($("#verview-shart").length){var myConfig={type:"line","scale-x":{labels:["0","10","20","30","40","50","60","70","80","90","100"],label:{"font-size":14,"offset-x":0},item:{"font-size":10},guide:{visible:!1,"line-style":"solid",alpha:1}},plot:{aspect:"spline"},series:[{values:[20,25,30,35,45,40,40,35,25,17,40,50],"line-color":"#F0B41A","line-width":5,marker:{"background-color":"#D79D3B",size:5,"border-color":"#D79D3B"}},{values:[40,45,30,20,30,35,45,55,40,30,55,30],"line-color":"#0884D9","line-width":5,marker:{"background-color":"#067dce",size:5,"border-color":"#067dce"}}]};zingchart.render({id:"verview-shart",data:myConfig,height:"100%",width:"100%"})}if($("#mvaluechart").length){ctx=document.getElementById("mvaluechart").getContext("2d");var myLineChart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:"transparent",borderColor:"#6e00ff",borderWidth:2,data:[0,15,30,10,25,0,30],pointBorderColor:"transparent",pointBorderWidth:10}]},options:{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{line:{tension:0}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}})}if($("#mvaluechart2").length)ctx=document.getElementById("mvaluechart2").getContext("2d"),myLineChart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:"transparent",borderColor:"#6e00ff",borderWidth:2,data:[0,15,30,10,25,0,50],pointBorderColor:"transparent",pointBorderWidth:10}]},options:{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{line:{tension:0}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});if($("#mvaluechart3").length)ctx=document.getElementById("mvaluechart3").getContext("2d"),myLineChart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","Agut"],datasets:[{label:"Market Value",backgroundColor:"transparent",borderColor:"#6e00ff",borderWidth:2,data:[0,15,40,10,25,0,30,20],pointBorderColor:"transparent",pointBorderWidth:10}]},options:{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{line:{tension:0}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});if($("#mvaluechart4").length)ctx=document.getElementById("mvaluechart4").getContext("2d"),myLineChart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:"transparent",borderColor:"#6e00ff",borderWidth:2,data:[0,30,30,10,25,0,30],pointBorderColor:"transparent",pointBorderWidth:10}]},options:{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}},elements:{line:{tension:0}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});if($("#visitor_graph").length&&Highcharts.chart("visitor_graph",{chart:{type:"areaspline"},title:!1,yAxis:{title:!1,gridLineColor:"#fbf7f7",gridLineWidth:1},xAxis:{gridLineColor:"#fbf7f7",gridLineWidth:1},series:[{name:"USD",data:[400,470,520,500,420,350,320,400,550,600,500,420,400],fillColor:"rgba(76, 57, 249, 0.5)",lineColor:"transparent"},{name:"BTC",data:[450,520,550,400,450,500,400,450,500,450,400,500,450],fillColor:"rgba(103, 13, 251, 0.5)",lineColor:"transparent"}]}),$("#amlinechart1").length){function zoomChart(){chart.zoomToDates(new Date(2012,0,2),new Date(2012,0,13))}(chart=AmCharts.makeChart("amlinechart1",{type:"serial",theme:"light",marginRight:20,autoMarginOffset:20,dataDateFormat:"YYYY-MM-DD HH:NN",dataProvider:[{date:"2012-01-01",value:8},{date:"2012-01-02",color:"#6e00ff",value:10},{date:"2012-01-03",value:12},{date:"2012-01-04",value:14},{date:"2012-01-05",value:11},{date:"2012-01-06",value:6},{date:"2012-01-07",value:7},{date:"2012-01-08",value:9},{date:"2012-01-09",value:13},{date:"2012-01-10",value:15},{date:"2012-01-11",color:"#6e00ff",value:19},{date:"2012-01-12",value:21},{date:"2012-01-13",value:22},{date:"2012-01-14",value:20},{date:"2012-01-15",value:18},{date:"2012-01-16",value:14},{date:"2012-01-17",color:"#6e00ff",value:16},{date:"2012-01-18",value:18},{date:"2012-01-19",value:17},{date:"2012-01-20",value:15},{date:"2012-01-21",value:12},{date:"2012-01-22",color:"#6e00ff",value:10},{date:"2012-01-23",value:8}],valueAxes:[{axisAlpha:0,guides:[{fillAlpha:.1,fillColor:"#6e00ff",lineAlpha:0,toValue:16,value:10}],position:"left",tickLength:0}],graphs:[{balloonText:"[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",bullet:"round",dashLength:3,colorField:"color",valueField:"value"}],trendLines:[{finalDate:"2012-01-11 12",finalValue:19,initialDate:"2012-01-02 12",initialValue:10,lineColor:"#6e00ff"},{finalDate:"2012-01-22 12",finalValue:10,initialDate:"2012-01-17 12",initialValue:16,lineColor:"#6e00ff"}],chartScrollbar:{scrollbarHeight:2,offset:-1,backgroundAlpha:.2,backgroundColor:"#8816FD",selectedBackgroundColor:"#815FF5",selectedBackgroundAlpha:1},chartCursor:{fullWidth:!0,valueLineEabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,cursorAlpha:0},categoryField:"date",categoryAxis:{parseDates:!0,axisAlpha:0,gridAlpha:.1,minorGridAlpha:.1,minorGridEnabled:!0},export:{enabled:!1}})).addListener("dataUpdated",zoomChart)}if($("#amlinechart2").length){function zoomChart(){chart.zoomToIndexes(Math.round(.4*chart.dataProvider.length),Math.round(.55*chart.dataProvider.length))}(chart=AmCharts.makeChart("amlinechart2",{type:"serial",theme:"light",marginTop:0,marginRight:20,dataProvider:[{year:"1950",value:-.307},{year:"1951",value:-.168},{year:"1952",value:-.073},{year:"1953",value:-.027},{year:"1954",value:-.251},{year:"1955",value:-.281},{year:"1956",value:-.348},{year:"1957",value:-.074},{year:"1958",value:-.011},{year:"1959",value:-.074},{year:"1960",value:-.124},{year:"1961",value:-.024},{year:"1962",value:-.022},{year:"1963",value:0},{year:"1964",value:-.296},{year:"1965",value:-.217},{year:"1966",value:-.147},{year:"1967",value:-.15},{year:"1968",value:-.16},{year:"1969",value:-.011},{year:"1970",value:-.068},{year:"1971",value:-.19},{year:"1972",value:-.056},{year:"1973",value:.077},{year:"1974",value:-.213},{year:"1975",value:-.17},{year:"1976",value:-.254},{year:"1977",value:.019},{year:"1978",value:-.063},{year:"1979",value:.05},{year:"1980",value:.077},{year:"1981",value:.12},{year:"1982",value:.011},{year:"1983",value:.177},{year:"1984",value:-.021},{year:"1985",value:-.037},{year:"1986",value:.03},{year:"1987",value:.179},{year:"1988",value:.18},{year:"1989",value:.104},{year:"1990",value:.255},{year:"1991",value:.21},{year:"1992",value:.065},{year:"1993",value:.11},{year:"1994",value:.172},{year:"1995",value:.269},{year:"1996",value:.141},{year:"1997",value:.353},{year:"1998",value:.548},{year:"1999",value:.298},{year:"2000",value:.267},{year:"2001",value:.411},{year:"2002",value:.462},{year:"2003",value:.47},{year:"2004",value:.445},{year:"2005",value:.47}],valueAxes:[{axisAlpha:0,position:"left"}],graphs:[{id:"g1",balloonText:"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",bullet:"round",bulletSize:8,lineColor:"#9656e7",lineThickness:2,negativeLineColor:"#c69cfd",type:"smoothedLine",valueField:"value"}],chartScrollbar:{graph:"g1",gridAlpha:0,color:"#8816FD",scrollbarHeight:55,backgroundAlpha:0,selectedBackgroundAlpha:.1,selectedBackgroundColor:"#8816FD",graphFillAlpha:0,autoGridCount:!0,selectedGraphFillAlpha:0,graphLineAlpha:.2,graphLineColor:"#c2c2c2",selectedGraphLineColor:"#9f46fc",selectedGraphLineAlpha:1},chartCursor:{categoryBalloonDateFormat:"YYYY",cursorAlpha:0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,fullWidth:!0},dataDateFormat:"YYYY",categoryField:"year",categoryAxis:{minPeriod:"YYYY",parseDates:!0,minorGridAlpha:.1,minorGridEnabled:!0},export:{enabled:!1}})).addListener("rendered",zoomChart),chart.zoomChart&&chart.zoomChart()}if($("#amlinechart3").length){var chartData=generateChartData();function zoomChart(){chart.zoomToIndexes(chartData.length-40,chartData.length-1)}function generateChartData(){var e=[],a=new Date;a.setDate(a.getDate()-5);for(var l=1200,t=0;t<1e3;t++){var r=new Date(a);r.setDate(r.getDate()+t),l+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),e.push({date:r,visits:l})}return e}(chart=AmCharts.makeChart("amlinechart3",{type:"serial",theme:"light",marginRight:20,autoMarginOffset:20,marginTop:7,dataProvider:chartData,valueAxes:[{axisAlpha:.2,dashLength:1,position:"left"}],mouseWheelZoomEnabled:!0,graphs:[{id:"g1",balloonText:"[[value]]",bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",hideBulletsCount:50,title:"red line",valueField:"visits",useLineColorForBulletBorder:!0,balloon:{drop:!0}}],chartScrollbar:{autoGridCount:!0,graph:"g1",scrollbarHeight:40,color:"#fff",selectedBackgroundAlpha:1,selectedBackgroundColor:"#815BF6",selectedGraphFillAlpha:0,selectedGraphFillColor:"#8918FE",graphLineAlpha:.2,graphLineColor:"#c2c2c2",selectedGraphLineColor:"#fff",selectedGraphLineAlpha:1},chartCursor:{limitToGraph:"g1"},categoryField:"date",categoryAxis:{parseDates:!0,axisColor:"#DADADA",dashLength:1,minorGridEnabled:!0},export:{enabled:!1}})).addListener("rendered",zoomChart),zoomChart()}if($("#amlinechart4").length)chart=AmCharts.makeChart("amlinechart4",{type:"serial",theme:"light",legend:{useGraphSettings:!0},dataProvider:[{year:1930,italy:1,germany:5,uk:3},{year:1934,italy:1,germany:2,uk:6},{year:1938,italy:2,germany:3,uk:1},{year:1950,italy:3,germany:4,uk:1},{year:1954,italy:5,germany:1,uk:2},{year:1958,italy:3,germany:2,uk:1},{year:1962,italy:1,germany:2,uk:3},{year:1966,italy:2,germany:1,uk:5},{year:1970,italy:3,germany:5,uk:2},{year:1974,italy:4,germany:3,uk:6},{year:1978,italy:1,germany:2,uk:4}],startDuration:.5,graphs:[{balloonText:"place taken by Italy in [[category]]: [[value]]",bullet:"round",hidden:!0,title:"Italy",valueField:"italy",fillAlphas:0,lineColor:"#31ef98",lineThickness:2,negativeLineColor:"#17e285"},{balloonText:"place taken by Germany in [[category]]: [[value]]",bullet:"round",title:"Germany",valueField:"germany",fillAlphas:0,lineColor:"#9656e7",lineThickness:2,negativeLineColor:"#c69cfd"},{balloonText:"place taken by UK in [[category]]: [[value]]",bullet:"round",title:"United Kingdom",valueField:"uk",fillAlphas:0,lineColor:"#31aeef",lineThickness:2,negativeLineColor:"#31aeef"}],chartCursor:{cursorAlpha:0,zoomable:!1},categoryField:"year",categoryAxis:{gridPosition:"start",axisAlpha:0,fillAlpha:.05,fillColor:"#000000",gridAlpha:0,position:"top"},export:{enabled:!1}});if($("#amlinechart5").length){function zoomChart(){chart.zoomToDates(new Date(2012,2,2),new Date(2012,2,10))}(chart=AmCharts.makeChart("amlinechart5",{type:"serial",theme:"light",marginRight:20,marginTop:17,autoMarginOffset:20,dataProvider:[{date:"2012-03-01",price:20},{date:"2012-03-02",price:75},{date:"2012-03-03",price:15},{date:"2012-03-04",price:75},{date:"2012-03-05",price:158},{date:"2012-03-06",price:57},{date:"2012-03-07",price:107},{date:"2012-03-08",price:89},{date:"2012-03-09",price:75},{date:"2012-03-10",price:132},{date:"2012-03-11",price:158},{date:"2012-03-12",price:56},{date:"2012-03-13",price:169},{date:"2012-03-14",price:24},{date:"2012-03-15",price:147}],valueAxes:[{logarithmic:!0,dashLength:1,guides:[{dashLength:6,inside:!0,label:"average",lineAlpha:1,value:90.4}],position:"left"}],graphs:[{bullet:"round",id:"g1",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:7,lineThickness:2,title:"Price",type:"smoothedLine",useLineColorForBulletBorder:!0,valueField:"price"}],chartScrollbar:{},chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,valueLineAlpha:.5,fullWidth:!0,cursorAlpha:.05},dataDateFormat:"YYYY-MM-DD",categoryField:"date",categoryAxis:{parseDates:!0},export:{enabled:!1}})).addListener("dataUpdated",zoomChart)}if($("#seolinechart1").length)ctx=document.getElementById("seolinechart1").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Likes",backgroundColor:"rgba(104, 124, 247, 0.6)",borderColor:"#8596fe",data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0}}}});if($("#seolinechart2").length)ctx=document.getElementById("seolinechart2").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["Janeiro","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Quant.",backgroundColor:"rgba(96, 241, 205, 0.2)",borderColor:"#3de5bb",data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!1,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0}}}});if($("#seolinechart3").length)ctx=document.getElementById("seolinechart3").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Quant.",backgroundColor:"rgba(96, 241, 205, 0)",borderColor:"#fff",data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0}}}});if($("#seolinechart4").length)ctx=document.getElementById("seolinechart4").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Temp.",backgroundColor:"rgba(96, 241, 205, 0)",borderColor:"#fff",data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},options:{legend:{display:!1},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0}}}});if($("#user-statistics").length){function datashora(e){var a=e.split(" ");return String(a[0])}function processDataConsumo(e){var a=[],l=e.split("\n");if(0<l.length)for(var t=0,r=0,o=2;o<l.length;o++)for(o=2;o<l.length;o++){var i=l[o-1].split(","),n=l[o].split(",");0==t&&(r+=parseInt(i[1])),datashora(String(i[0]))==datashora(String(n[0]))?(r+=parseInt(n[1]),t++):t=0,0==t&&(a.push({date:datashora(String(i[0])),value:r}),r=0),o==l.length-1&&(datashora(String(i[0]))!=datashora(String(n[0]))?a.push({date:datashora(String(i[0])),value:parseInt(n[1])}):a.push({date:datashora(String(i[0])),value:r}))}return a}function processDataDetalhado(e){var a=[],l=e.split("\n");if(0<l.length)for(var t=0,r=0,o=2;o<l.length;o++){var i=l[o-1].split(","),n=l[o].split(",");0==t&&(r+=parseInt(i[1])),datashora(String(i[0]))==datashora(String(n[0]))?(r+=parseInt(n[1]),t++):t=0,0==t&&(a.push({date:datashora(String(i[0])),market1:r,market2:parseInt(i[2]),sales1:parseInt(i[3]),sales2:parseInt(t+1)}),r=0),o==l.length-1&&(datashora(String(i[0]))!=datashora(String(n[0]))?a.push({date:datashora(String(n[0])),market1:parseInt(n[1]),market2:parseInt(n[2]),sales1:parseInt(n[3]),sales2:parseInt(t+1)}):a.push({date:datashora(String(n[0])),market1:r,market2:parseInt(n[2]),sales1:parseInt(n[3]),sales2:parseInt(t+1)}))}return a}$.ajax({type:"GET",url:"datalog.txt",crossDomain:!0,async:!1,dataType:"text",success:function(e){consumo=processDataConsumo(e),detalhado=processDataDetalhado(e)}});chart=AmCharts.makeChart("user-statistics",{type:"serial",theme:"light",marginRight:0,marginLeft:40,autoMarginOffset:20,dataDateFormat:"YYYY-MM-DD",valueAxes:[{id:"v1",axisAlpha:0,position:"left",ignoreAxisWidth:!0}],balloon:{borderThickness:1,shadowAlpha:0},graphs:[{id:"g1",balloon:{drop:!0,adjustBorderColor:!1,color:"#ffffff",type:"smoothedLine"},fillAlphas:.2,bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,title:"red line",useLineColorForBulletBorder:!0,valueField:"value",balloonText:"<span style='font-size:18px;'>[[value]]</span>"}],chartCursor:{valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,zoomable:!1,valueZoomable:!0,valueLineAlpha:.5},valueScrollbar:{autoGridCount:!0,color:"#5E72F3",scrollbarHeight:30},categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0},export:{enabled:!1},dataProvider:consumo})}if($("#salesanalytic").length)chart=AmCharts.makeChart("salesanalytic",{type:"serial",theme:"light",dataDateFormat:"YYYY-MM-DD",precision:2,valueAxes:[{id:"v1",title:"Sales",position:"left",autoGridCount:!1,labelFunction:function(e){return"$"+Math.round(e)+"M"}},{id:"v2",title:"Duration",gridAlpha:0,position:"right",autoGridCount:!1}],graphs:[{id:"g3",valueAxis:"v1",lineColor:"#000000",fillColors:"#F3F8FB",fillAlphas:1,type:"column",title:"Actual Sales",valueField:"sales2",clustered:!1,columnWidth:.5,legendValueText:"$[[value]]M",balloonText:"[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"},{id:"g4",valueAxis:"v1",lineColor:"#5C6DF4",fillColors:"#5C6DF4",fillAlphas:1,type:"column",title:"Volume(ml)",valueField:"sales1",clustered:!1,columnWidth:.3,legendValueText:"$[[value]]ml",balloonText:"[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"},{id:"g1",valueAxis:"v2",bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,lineColor:"#4B0082",type:"smoothedLine",title:"Duration",useLineColorForBulletBorder:!0,valueField:"market1",balloonText:"[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"},{id:"g2",valueAxis:"v2",bullet:"round",bulletBorderAlpha:1,bulletColor:"#FFFFFF",bulletSize:5,hideBulletsCount:50,lineThickness:2,lineColor:"#FF4500",type:"smoothedLine",dashLength:5,title:"Market Days ALL",useLineColorForBulletBorder:!0,valueField:"market2",balloonText:"[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"}],chartScrollbar:{graph:"g1",oppositeAxis:!1,offset:50,scrollbarHeight:45,backgroundAlpha:0,selectedBackgroundAlpha:.5,selectedBackgroundColor:"#f9f9f9",graphFillAlpha:.1,graphLineAlpha:.4,selectedGraphFillAlpha:0,selectedGraphLineAlpha:1,autoGridCount:!0,color:"#95a1f9"},chartCursor:{pan:!0,valueLineEnabled:!0,valueLineBalloonEnabled:!0,cursorAlpha:0,valueLineAlpha:.2},categoryField:"date",categoryAxis:{parseDates:!0,dashLength:1,minorGridEnabled:!0,color:"#5C6DF4"},legend:{useGraphSettings:!0,position:"top"},balloon:{borderThickness:1,shadowAlpha:0},export:{enabled:!1},dataProvider:detalhado});