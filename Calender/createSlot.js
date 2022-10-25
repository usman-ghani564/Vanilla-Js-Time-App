const eventsWrapper = document.querySelector(".events_wrapper");


// This is the function where we dynamically define the structure of 
// an **Event**
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

// This function is being called in the drawSlots.js files