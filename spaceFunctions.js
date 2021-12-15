
/****************************************************************
 * Class Declaration
****************************************************************/
class InputData {

    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

/****************************************************************
 * Functions
****************************************************************/
function getData(){
    var loadedData = loadData();
    return loadedData;
}

/**
 * format the row to display data
 * @param {*} legend 
 * @param {*} value 
 * @param {*} units 
 */
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


 //function to start and control the countdown
 function countDown() {
    var currTime = 10;
//    start the timer
    for (var i = 1; i <= 11; i++) {
        //complete
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {//half
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING, LESS THAN HALF TIME REMAINING! Time Remaining:  " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {//start
            setTimeout(function () {
            
                document.getElementById("countdownTimer").innerHTML = "Time Remaining: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

function Check(){//checks the content of the Log In attempt
    //vars, the name and badge number form the user
var name = document.getElementById("Name").value;
var badge = document.getElementById("Badge").value;
//the coding for the checking
if(name.length>20){//checks name length
    document.getElementById("error").innerHTML = "Name is too long. Please try again.";
}else if(badge>=1000){//checks badge #
    document.getElementById("error").innerHTML = "Badge number is incorrect. Please try again.";
}else{//log in complete
    document.getElementById("error").innerHTML = "";
    alert("Log in successful. Please continue");
}

}

// a function to return to the hub page
function leave(){
    location.replace("index.html")
}
    
    