const eventsWrapper = document.querySelector(".events_wrapper");

function createSlot(height, topPosition, leftPoition, startText, eventName, eventLocation) {
    var mainContainer = document.createElement("div");
    mainContainer.classList.add("main_div");

    mainContainer.style.height = "".concat(height, "px");
    mainContainer.style.width = "100%";
    mainContainer.style.top = "".concat(topPosition, "rem");
    mainContainer.style.left = "".concat(leftPoition, "rem");

    var greenConatiner = document.createElement("div");
    greenConatiner.classList.add("green_div");
    greenConatiner.style.height = "".concat(height, "px");

    var innerContainer = document.createElement("div");
    innerContainer.classList.add("inner_div");

    var startTime = document.createElement("span");
    startTime.textContent = "".concat(startText, "-");
    startTime.classList.add("start_time");

    var sampleItem = document.createElement("span");
    sampleItem.textContent = "".concat(eventName);
    sampleItem.classList.add("sample_item");

    var sampleLocation = document.createElement("span");
    sampleLocation.textContent = "".concat(eventLocation);
    sampleLocation.classList.add("sample_location");

    mainContainer.appendChild(greenConatiner);
    mainContainer.appendChild(innerContainer);

    innerContainer.append(startTime);
    innerContainer.appendChild(sampleItem);
    innerContainer.appendChild(sampleLocation);

    return mainContainer;
}

for (var i = 0; i < data.length; i++) {
    // console.log(data)
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
        baseStartPotiion = 7.2
    }
    else if(startTimeAMPM === 'PM'){
        baseStartPotiion = 114.7
    }

    if(startTimeHour === 12) {
        startTimeHour = 0;
    }

    var startPostion = baseStartPotiion + (4.4 * 2 * startTimeHour) + (startTimeMinutes === 30 ? 4.4 : 0);

    var height = 70 * (endTimeHour - startTimeHour) * 2 - (startTimeMinutes === 30 ? 70 : 0) + (endTimeMinutes === 30 ? 70 : 0);
    
    eventsWrapper.appendChild(createSlot(height, startPostion, 18, data[i].startTime, data[i].title, data[i].location));
}
updateUIAtEnd();

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

                // console.log("++++++++++++++++++++++++++++++++++++++++++++")
                // console.log(startTimeI)
                // console.log(endTimeI)
                // console.log(startTimeJ)
                // console.log(endTimeJ)
                // console.log("++++++++++++++++++++++++++++++++++++++++++++")

                if(startTimeI < endTimeJ && endTimeI > startTimeJ) {
                    // console.log('Came here jani!')
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
    console.log(finalList)
    for(var key in finalList) {
        uiArray = finalList[key];
        if(uiArray.length != 0) {
            changeWidthAndLeftPostionFinal(uiArray);
        }
        // key will be your dynamically created keyname
    }
}

function changeWidthAndLeftPostionFinal(arr) {
    arr.sort((a,b) => a-b)
    console.log('Array: ', arr)
    var mainIndex = 0;
    var updatedIndex = 0;
    var previousIndex = 0;
    const length = arr.length;
    const maxWidth = 100 / length;
    const maxLeft = 90 / length;
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

// body.appendChild(createSlot(140, 170, 6.8, 18, "12:00 AM", "Screening", "Lahore, Pakistan"))
// body.appendChild(createSlot(350, 170, 165.2, 50))
