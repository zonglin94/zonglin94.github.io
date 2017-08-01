function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var studentData = [{"sub1": 20, "sub2": 13, "sub3": 5}];
for (var i = 1; i < 50; i++){
  var subArr = {"sub1": getRandomIntInclusive(1, 20),
                "sub2": getRandomIntInclusive(1, 20),
                "sub3": getRandomIntInclusive(1, 20)};
  studentData.push(subArr);
}
var sortedStudentDataSub1 = {"0-4": 0, "5-8": 0, "9-12": 0, "13-16": 0, "17-20": 0};
var sortedSub1 = [0, 0, 0, 0, 0];
var sortedStudentDataSub2 = {"0-4": 0, "5-8": 0, "9-12": 0, "13-16": 0, "17-20": 0};
var sortedSub2 = [0, 0, 0, 0, 0];
var sortedStudentDataSub3 = {"0-4": 0, "5-8": 0, "9-12": 0, "13-16": 0, "17-20": 0};
var sortedSub3 = [0, 0, 0, 0, 0];
for (var i = 0; i < 50; i++){
  if (studentData[i].sub1 < 5){
    sortedStudentDataSub1["0-4"]++;
    sortedSub1[0]++;
  }
  else if (studentData[i].sub1 < 9) {
    sortedStudentDataSub1["5-8"]++;
    sortedSub1[1]++;
  }
  else if (studentData[i].sub1 < 13) {
    sortedStudentDataSub1["9-12"]++;
    sortedSub1[2]++;
  }
  else if (studentData[i].sub1 < 17) {
    sortedStudentDataSub1["13-16"]++;
    sortedSub1[3]++;
  }
  else{
    sortedStudentDataSub1["17-20"]++;
    sortedSub1[4]++;
  }

  if (studentData[i].sub2 < 5){
    sortedStudentDataSub2["0-4"]++;
    sortedSub2[0]++;
  }
  else if (studentData[i].sub2 < 9) {
    sortedStudentDataSub2["5-8"]++;
    sortedSub2[1]++;
  }
  else if (studentData[i].sub2 < 13) {
    sortedStudentDataSub2["9-12"]++;
    sortedSub2[2]++;
  }
  else if (studentData[i].sub2 < 17) {
    sortedStudentDataSub2["13-16"]++;
    sortedSub2[3]++;
  }
  else{
    sortedStudentDataSub2["17-20"]++;
    sortedSub2[4]++;
  }

  if (studentData[i].sub3 < 5){
    sortedStudentDataSub3["0 - 4"]++;
    sortedSub3[0]++;
  }
  else if (studentData[i].sub3 < 9) {
    sortedStudentDataSub3["5 - 8"]++;
    sortedSub3[1]++;
  }
  else if (studentData[i].sub3 < 13) {
    sortedStudentDataSub3["9 - 12"]++;
    sortedSub3[2]++;
  }
  else if (studentData[i].sub3 < 17) {
    sortedStudentDataSub3["13 - 16"]++;
    sortedSub3[3]++;
  }
  else{
    sortedStudentDataSub3["17 - 20"]++;
    sortedSub3[4]++;
  }
}
var sortedStudentData = [];
sortedStudentData.push(sortedStudentDataSub1);
sortedStudentData.push(sortedStudentDataSub2);
sortedStudentData.push(sortedStudentDataSub3);
var studentDataSub1 = [];
var studentDataSub2 = [];
var studentDataSub3 = [];
for (var i = 0; i < 50; i++){
  studentDataSub1.push(studentData[i].sub1);
  studentDataSub2.push(studentData[i].sub2);
  studentDataSub3.push(studentData[i].sub3)
}
console.log("studentData = ", studentData);
console.log("sortedStudentData", sortedStudentData);
console.log("sortedSub1", sortedSub1);
var compareLabel = ["0-4", "5-8", "9-12", "13-16", "17-20"];
var sortedObjectSub1 = [];
var sortedObjectSub2 = [];
var sortedObjectSub3 = [];
for (var i = 0; i < 5; i++){
  arr = {"label": compareLabel[i], "value": sortedSub1[i]};
  sortedObjectSub1.push(arr);
  arr = {"label": compareLabel[i], "value": sortedSub2[i]};
  sortedObjectSub2.push(arr);
  arr = {"label": compareLabel[i], "value": sortedSub3[i]};
  sortedObjectSub3.push(arr);
}
console.log("sortedObjectSub1", sortedObjectSub1);

var subjectDisplay = studentDataSub1;
var compareDisplay = sortedObjectSub1;

$(document).ready( function(){
  $(document).on('change','#subject-select-box',function(){
    var selectedVal = $( "#subject-select-box option:selected" ).text();
    if (selectedVal === "G1"){
      console.log("sub1");
      subjectDisplay = studentDataSub1;
      // compareDisplay = sortedSub1;
      compareDisplay = sortedObjectSub1;
      d3.selectAll("svg").remove();
      graphDisplay(subjectDisplay, compareDisplay);
    }
    if (selectedVal === "G2"){
      console.log("sub2");
      subjectDisplay = studentDataSub2;
      compareDisplay = sortedObjectSub2;
      d3.selectAll("svg").remove();
      graphDisplay(subjectDisplay, compareDisplay);
    }
    if (selectedVal === "G3"){
      console.log("sub3");
      subjectDisplay = studentDataSub3;
      compareDisplay = sortedObjectSub3;
      d3.selectAll("svg").remove();
      graphDisplay(subjectDisplay, compareDisplay);
    }
  });
});

console.log(compareDisplay);
/////////////////////////////////////////////////////////////////////////////////
// Graph update function
////////////////////////////////////////////////////////////////////////////////
function graphDisplay(subjectDisplay, compareDisplay){

  var svgWidth = 650;
  var svgHeight = 400;
  var studentCanvas = d3.select(".practice-section").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background", "#FFFDE7")
    .style("box-shadow", "1px 1px 6px 1px lightgray")
    .append("g")
      .attr("transform", "translate(30, -50)");

  console.log(studentDataSub1);
  var studentBarWidth = 10;
  var studentBarOffset = 2;
  var studentColorScale = d3.scaleLinear()
    .domain([0, d3.max(subjectDisplay)])
    .range(["#FFEB3B", "#00BCD4"]);
  var studentYScale = d3.scaleLinear()
    .domain([0, 20])
    .range([0, (svgHeight/2)]);
  var yAxisScale = d3.scaleLinear()
    .domain([0, 20])
    .range([svgHeight/2, 0]);
  var yAxis = d3.axisLeft(yAxisScale);
  var studentXScale = d3.scaleBand()
    .domain(d3.range(1, 51))
    .rangeRound([0, (svgWidth-30)]);
  var xAxis = d3.axisBottom(studentXScale);

  studentCanvas.selectAll("rect")
    .data(subjectDisplay)
    .enter()
    .append("rect")
      .attr("fill", function(d){ return studentColorScale(d); })
      .attr("width", studentBarWidth)
      .attr("height", function(d){ return studentYScale(d); })
      .attr("x", function(d, i){ return i* ( studentBarWidth + studentBarOffset ); })
      .attr("y", function(d){ return (svgHeight-studentYScale(d)); })
      .on("mouseover", function(d, i){
        console.log(3);
        tooltip.transition()
          .style("opacity", 1);
        tooltip.text("Student " + (i + 1) + " : " + d + " marks")
          .style("left", (d3.event.pageX + 15) + 'px')
          .style("top", (d3.event.pageY + 15) + 'px')
        d3.select(this)
          .style("opacity", ".5");
      })
      .on("mouseout", function(d){
        tooltip.transition()
          .style("opacity", "0");
        d3.select(this)
          .style("opacity", "1");
      })
  studentCanvas.append("g")
    .attr("transform", "translate(0, 200)")
    .call(yAxis).append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 20)
      .attr("dy", ".71em")
      .style("color", "#999")
      .text("Grades");
  studentCanvas.append("g")
    .attr("transform", "translate(-10, 410)")
    .call(xAxis).append("text")
      .attr("dy", ".71em")
      .style("color", "#999")
      .text("Grades");;

  var tooltip = d3.select(".practice-section").append("section")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("min-width", "30px")
    .style("background", "#f4f4f4")
    .style("padding", "5 15px")
    .style("border", "1px #333 solid")
    .style("border-radius", "1px")
    .style("opacity", "0")
    .style("padding", "2px")
    .style("text-align", "center")



  //////////////////////////////////////////////////////////////////////////////
  // second graph display
  //////////////////////////////////////////////////////////////////////////////
  var radius = svgHeight/2;

  //defining svg
  var compareCanvas = d3.select(".more-practice-section").append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .style("background", "#FFFDE7")
  .style("box-shadow", "1px 1px 6px 1px lightgray")
  .append("g")
    .attr("transform", "translate(330, 200)");

  //arc generator
  var arc = d3.arc()
    .outerRadius(radius - 60)
    .innerRadius(radius - 100);

  //pie generator
  var pie = d3.pie()
    .sort(null)
    // .value(function(d) { return d; });
    .value(function(d) { return d.value; });

  var compareColorScale = d3.scaleLinear()
    .domain([0, 5])
    .range(["#E91E63", "#F8BBD0"]);

  var compareYLabel = ["0 - 20", "21 - 40", "41 - 60", "61 - 80", "81 - 100"];
  var theArc = compareCanvas.selectAll(".donut-arc")
    .data(pie(compareDisplay))
    // .data(pie(sortedObjectSub1))
    .enter()
    .append("g")
    .attr("class", "donut-arc");

  theArc.append("path")
    .attr("d", arc)
    .attr("fill", function(d, i){
      return compareColorScale(i);
    })
    .on("mouseover", function(d){
      tooltip.transition()
        .style("opacity", 1);
      // compareYLabel[i] + " : " + d
      tooltip.text( d.data.label + " : " + d.data.value)
        .style("left", (d3.event.pageX + 15) + 'px')
        .style("top", (d3.event.pageY + 15) + 'px')
      d3.select(this)
        .style("opacity", ".5");
        // console.log(d.data.label)
        // height = 240 ->20
        var myg = d3.selectAll("rect")._groups[0];
        switch (d.data.label) {
          case "0-4":
          console.log(myg[1].__data__);
          for(i=0;i<50;i++){

            if(myg[i].__data__<=4){
                myg[i].style.opacity= "0.5";
            }
          }
          break;
          case "5-8":
          for(i=0;i<50;i++){
            if(myg[i].__data__<=8 && myg[i].__data__>=5 ){
                myg[i].style.opacity= "0.5";
            }
          }
          break;

          case "9-12":
          for(i=0;i<50;i++){
            if(myg[i].__data__<=12 && myg[i].__data__>=9 ){
                myg[i].style.opacity= "0.5";
            }
          }
          break;

          case "13-16":
          for(i=0;i<50;i++){
            if(myg[i].__data__<=16 && myg[i].__data__>=13 ){
                myg[i].style.opacity= "0.5";
            }
          }
          break;
          case "17-20":
          for(i=0;i<50;i++){
            if(myg[i].__data__<=20 && myg[i].__data__>=17 ){
              myg[i].style.opacity= "0.5";
            }
          }
          break;

        }


    })
    .on("mouseout", function(d){
      tooltip.transition()
        .style("opacity", "0");
      d3.select(this)
        .style("opacity", "1");
        myg = d3.selectAll("rect")._groups[0];
        for(i=0;i<50;i++){
            myg[i].style.opacity= "1";
        }
    });

  // console.log("pie = ", pie(sortedObjectSub1));

  theArc.append("text")
    .attr("transform", function(d){
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("dy", "1.5em")
    .text(function(d) { return d.data.value; })
    .style("font-weight", "500")
    .style("font-size", "13px");
}
graphDisplay(subjectDisplay, compareDisplay);
