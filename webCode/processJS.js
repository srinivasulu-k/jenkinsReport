
var jsonFileName="../dataFiles/testJSON.json"
// var jsonFileName="//NA1QALABD2/jsonData/testJSON.json"
// var jsonFileName="https://github.com/srinivasulu-k/jenkinsReport/blob/661e271314821663976adb2faad74d3076260948/dataFiles/testJSON.json";
var jsonData=new Object();

function countObjectKeys(obj) { 
    return Object.keys(obj).length;
}

function mainLoadFunction(){
    fetch(jsonFileName)
    .then(Response => Response.json())
    .then(data=>{
        // console.log((data.damJenkinsJobs))
        // console.log(countObjectKeys(data));
        // console.log(countObjectKeys(data.damJenkinsJobs));
        // for(var i = 0 ; i < (countObjectKeys(data.damJenkinsJobs)) ; i++){
        //     document.getElementById('container').innerHTML += data.damJenkinsJobs[i].testPlanName + "<br/>";
        // }
        copyFun(data);
        drawExecStatusPieChart1(data);
    })
}

function copyFun(d1){
    Object.assign(jsonData, d1);
}


// function drawExecStatusPieChart(d1){
//     Object.assign(jsonData, d1);
// 	document.getElementById('pieChartContainer').innerHTML = "";	
	
// 	var chart = anychart.pie();
// 	chart.title("Test Plan Execution Status");

//     var data = [
//         {x: "Passed", value: jsonData.damJenkinsJobs[0].totalPassed, exploded: 0, fill:"#5cb85c"},
//         {x: "Failed", value: jsonData.damJenkinsJobs[0].totalFailures, exploded: 0, fill:"#d9534f"},
//         {x: "Failed", value: jsonData.damJenkinsJobs[0].totalError, exploded: 0, fill:"#ec971f"}
// ];
	
// 	chart.data(data);
	
// 	// display the chart in the container
// 	chart.container('pieChartContainer');
// 	//chart.fill("aquastyle");
// 	//art.labels().position("outside");
// 	//art.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
// 	chart.draw();
// 	// set legend position
// 	chart.legend().position("right");
// 	// set items layout
// 	chart.legend().itemsLayout("vertical");
// 	// sort elements
// 	chart.sort("desc");
// }

function drawExecStatusPieChart1(d1){
    Object.assign(jsonData, d1);
	document.getElementById('pieChartContainerLeft').innerHTML = "";
    document.getElementById('pieChartContainerRight').innerHTML = "";	
	
	

for(var i=0;i<(countObjectKeys(jsonData.damJenkinsJobs));i++){
    var chart = anychart.pie();
	chart.title(jsonData.damJenkinsJobs[i].testPlanName);

    var data = [
        {x: "Passed", value: jsonData.damJenkinsJobs[i].totalPassed, exploded: 0, fill:"#00FF00"},
        {x: "Failed", value: jsonData.damJenkinsJobs[i].totalFailures, exploded: 0, fill:"#FF0000"},
        {x: "Error", value: jsonData.damJenkinsJobs[i].totalError, exploded: 0, fill:"#FFA500"},
        {x: "Skipped", value: jsonData.damJenkinsJobs[i].totalSkipped, exploded: 0, fill:"#0000FF"}
];
	
	chart.data(data);
	
	// display the chart in the container
    if(i%2){
        chart.container('pieChartContainerLeft');
    }
    else{
        chart.container('pieChartContainerRight');
    }
	
	chart.fill("aquastyle");
	//art.labels().position("outside");
	//art.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
	chart.draw();
	// set legend position
	chart.legend().position("right");
	// set items layout
	chart.legend().itemsLayout("vertical");
	// sort elements
	chart.sort("desc");
}
}