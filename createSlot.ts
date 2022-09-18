// function createSlot(height: number, topPosition: number, leftPoition: number, startText: string, eventName: string, eventLocation: string) {
//     const mainContainer = document.createElement("div");
//     mainContainer.classList.add("main_div");

//     //mainContainer.setAttribute("style", `height: ${height}; width: ${width}; top: ${topPosition}; left: ${leftPoition}`);
//     mainContainer.style.height = `${height}px`;
//     mainContainer.style.width = `100%`;
//     mainContainer.style.top = `${topPosition}rem`;
//     mainContainer.style.left = `${leftPoition}rem`;

//     const greenConatiner = document.createElement("div");
//     greenConatiner.classList.add("green_div");
//     greenConatiner.style.height = `${height}px`;

//     const innerContainer = document.createElement("div");
//     innerContainer.classList.add("inner_div");

//     const startTime = document.createElement("span");
//     startTime.textContent = `${startText}-`
//     startTime.classList.add("start_time");

//     const sampleItem = document.createElement("span");
//     sampleItem.textContent = `${eventName}`
//     sampleItem.classList.add("sample_item");

//     const sampleLocation = document.createElement("span");
//     sampleLocation.textContent = `${eventLocation}`
//     sampleLocation.classList.add("sample_location");
    
//     mainContainer.appendChild(greenConatiner);
//     mainContainer.appendChild(innerContainer);
//     innerContainer.append(startTime);
//     innerContainer.appendChild(sampleItem);
//     innerContainer.appendChild(sampleLocation);

//     return mainContainer;

// }

// for(var i = 0; i < data.length; i++){
//     var startTimeSplit: string[] = data[i].startTime.split(':')
//     var startTimeRemainingSplit: string[] = startTimeSplit[1].split(' ');
//     var startTimeHour: number = parseInt(startTimeSplit[0]);
//     var startTimeMinutes: number = parseInt(startTimeRemainingSplit[0]);
//     var startTimeAMPM: string = startTimeRemainingSplit[1];


//     var endTimeSplit: string[] = data[i].endTime.split(':')
//     var endTimeRemainingSplit: string[] = endTimeSplit[1].split(' ');
//     var endTimeHour: number = parseInt(endTimeSplit[0]);
//     var endTimeMinutes: number = parseInt(endTimeRemainingSplit[0]);
//     var endTimeAMPM: string = endTimeRemainingSplit[1];

//     const startPostion = 7.2 +( 4.4 * 2 * startTimeHour) + (startTimeMinutes === 30 ? 4.4 : 0);
//     //TODO: add logic for half hour for height
//     const height = 70 * (endTimeHour - startTimeHour) * 2 - (startTimeMinutes === 30 ? 70 : 0) + (endTimeMinutes === 30 ? 70 : 0);

//     checkIfOverlapping(startTimeHour, endTimeHour, i);



//     body.appendChild(createSlot(height, startPostion, 18, data[i].startTime, data[i].title, data[i].location))


// }

// function checkIfOverlapping(incomingStartTimeHour: number, incomingEndTimeHour: number, index: number) {
//     //TODO: type for variables using typescript
//     for(var i = 0; i < data.length; i++) {
//         if(i != index) {
//             //This will make sure that the index for this we are calling this
//             //fucntion is never getting checked
//             startTimeSplit = data[i].startTime.split(':')
//             startTimeRemainingSplit = startTimeSplit[1].split(' ');
//             startTimeHour = parseInt(startTimeSplit[0]);
//             startTimeMinutes = parseInt(startTimeRemainingSplit[0]);
//             startTimeAMPM = startTimeRemainingSplit[1];
        
        
//             endTimeSplit = data[i].endTime.split(':')
//             endTimeRemainingSplit = endTimeSplit[1].split(' ');
//             endTimeHour = parseInt(endTimeSplit[0]);
//             endTimeMinutes = parseInt(endTimeRemainingSplit[0]);
//             endTimeAMPM = endTimeRemainingSplit[1];

//             if(incomingStartTimeHour >= startTimeHour && incomingEndTimeHour <= endTimeHour) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function checkIfBothHaveSameTime(incomingStartTimeHour, incomingStartTimeMintutes, incomingEndTimeHour, incomingEndTimeMinutes, index) {
//     //TODO: type for variables using typescript
//     for(var i = 0; i < data.length; i++) {
//         if(i != index) {
//             //This will make sure that the index for this we are calling this
//             //fucntion is never getting checked
//             startTimeSplit = data[i].startTime.split(':')
//             startTimeRemainingSplit = startTimeSplit[1].split(' ');
//             startTimeHour = parseInt(startTimeSplit[0]);
//             startTimeMinutes = parseInt(startTimeRemainingSplit[0]);
//             startTimeAMPM = startTimeRemainingSplit[1];
        
        
//             endTimeSplit = data[i].endTime.split(':')
//             endTimeRemainingSplit = endTimeSplit[1].split(' ');
//             endTimeHour = parseInt(endTimeSplit[0]);
//             endTimeMinutes = parseInt(endTimeRemainingSplit[0]);
//             endTimeAMPM = endTimeRemainingSplit[1];
    
//             if( incomingStartTimeHour == startTimeHour && 
//                 incomingStartTimeMintutes == startTimeMinutes &&
//                 incomingEndTimeHour == endTimeHour && 
//                 incomingEndTimeMinutes == endTimeMinutes) {
//                     return true;
//             }
//         }
//     }
//     return false;
// }

// // body.appendChild(createSlot(140, 170, 6.8, 18, "12:00 AM", "Screening", "Lahore, Pakistan"))
// // body.appendChild(createSlot(350, 170, 165.2, 50))