const body = document.querySelector("body");

const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("wrapper_div");
body.appendChild(wrapperDiv);

wrapperDiv.appendChild(createAMList());
wrapperDiv.appendChild(createPMList());



