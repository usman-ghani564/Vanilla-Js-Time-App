
function drawSlots() {
    for (var i = 0; i < data.length; i++) {
        var startTimeSplit = data[i].startTime.split(':');
        var startTimeRemainingSplit = startTimeSplit[1].split(' ');
        var startTimeHour = parseInt(startTimeSplit[0]);
        var startTimeMinutes = parseInt(startTimeRemainingSplit[0]);
        var startTimeAMPM = startTimeRemainingSplit[1];
    
        var endTimeSplit = data[i].endTime.split(':');
        var endTimeRemainingSplit = endTimeSplit[1].split(' ');
        var endTimeHour = parseInt(endTimeSplit[0]);
        var endTimeMinutes = parseInt(endTimeRemainingSplit[0]);
        var endTimeAMPM = endTimeRemainingSplit[1];
    
        var baseStartPotiion = 0;

        if(startTimeAMPM === 'AM'){
            baseStartPotiion = 10.9
        }
        else if(startTimeAMPM === 'PM'){
            baseStartPotiion = 104.4
        }
    
        if(startTimeHour === 12) {
            startTimeHour = 0;
        }
    
        var startPostion = baseStartPotiion + (3.8 * 2 * startTimeHour) + (startTimeMinutes === 30 ? 3.8 : 0);
    
        var height = 60 * (endTimeHour - startTimeHour) * 2 - (startTimeMinutes === 30 ? 60 : 0) + (endTimeMinutes === 30 ? 60 : 0);
        
        eventsWrapper.appendChild(createSlot(height, startPostion, 18, data[i].startTime, data[i].title, data[i].location));
    }
}

function convertTimeToNumber(timeStamp) {
    var timeSplit = timeStamp.split(':');
    var remainingSplit = timeSplit[1].split(' ');
    var hours = parseInt(timeSplit[0]);
    var minutes = parseInt(remainingSplit[0]) / 60;
    var ampm = remainingSplit[1];

    // We will create checks  because we want hours
    // from 0 - 24

    if(ampm === 'AM' && hours === 12) {
        hours = 0;
    }
    else if(ampm === 'PM' && hours != 12) {
        hours += 12;
    }
    return hours + minutes;
 }

function returnOverlappingMapList() {
    returnMap = {};

    for(var i = 0; i < data.length; i++) { 
        returnMap[i] = [];
        for(var j = 0; j < i; j++) {
            if(i != j) {
                //We need this condition because we dont want to check the 
                //same element having the same index in array

                var startTimeI = convertTimeToNumber(data[i].startTime);
                var endTimeI = convertTimeToNumber(data[i].endTime);
                var startTimeJ = convertTimeToNumber(data[j].startTime);
                var endTimeJ = convertTimeToNumber(data[j].endTime);

                if(startTimeI < endTimeJ && endTimeI > startTimeJ) {
                    if(!returnMap[i].includes(i)) {
                        returnMap[i].push(i)
                    }
                    if(!returnMap[i].includes(j)) {
                        returnMap[i].push(j)
                    }
                }
            }
        }
    }
    return returnMap;
}

function updateUIAtEnd() {
    const finalList = returnOverlappingMapList();
    for(var key in finalList) {
        uiArray = finalList[key];
        if(uiArray.length != 0) {
            changeWidthAndLeftPostionFinal(uiArray);
        }
    }
}

function changeWidthAndLeftPostionFinal(arr) {
    // We need to sort the array in asending order
    arr.sort((a,b) => a-b)

    //Initallizing variables
    var mainIndex = 0;
    var updatedIndex = 0;
    var previousIndex = 0;
    const length = arr.length;
    const maxWidth = 100 / length;
    const maxLeft = 90 / length;

    // We will loop through the array and if there is an overlap we will change
    // width and position
    for(var i = 0; i < eventsWrapper.children.length; i++) {
        if (eventsWrapper.children[i].className == 'main_div') {
            if(arr.includes(mainIndex)) {
                eventsWrapper.children[i].style.width = `${maxWidth}%`;
                if(updatedIndex > 0) {
                    const textLeftPrevious = eventsWrapper.children[previousIndex].style.left;
                    const textSplitPrevious = textLeftPrevious.split('r')
                    var leftIntPrevious = parseInt(textSplitPrevious[0])

                    leftIntPrevious += maxLeft
                    eventsWrapper.children[i].style.left = `${leftIntPrevious}rem`;
                }
                previousIndex = i;
                updatedIndex++;
            }
            mainIndex++;
        }
    }
}


//Calling the functions
drawSlots();
updateUIAtEnd();
