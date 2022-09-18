const am_div = document.querySelector("#am_div")
const pm_div = document.querySelector("#pm_div")

const amLabel = document.querySelector("#amLabel")
const pmLabel = document.querySelector("#pmLabel")

const fullTime = [
    '12:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
  ];

const halfTime = [
    '12:30',
    '01:30',
    '02:30',
    '03:30',
    '04:30',
    '05:30',
    '06:30',
    '07:30',
    '08:30',
    '09:30',
    '10:30',
    '11:30',
  ];

  createAMList(am_div)
  createAMList(pm_div)

  pm_div.style.backgroundColor = "rgba(192, 237, 255, 0.3)"; 
  am_div.style.backgroundColor = "rgba(255,192,203, .3)"; 

  amLabel.style.color = "rgb(255, 0, 128)"; 
  pmLabel.style.color = "rgb(0, 183, 255)"; 
  
  // Insert list items into DOM
  function createAMList(div) {
    [...fullTime]
      .forEach((time, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add("main_time_div")
  
        listItem.innerHTML = `        
             <div id="main_time_div">
                 <span class="main_time">${time}</span>
                 <div class="half_time">
                     <hr class="half_line">
                     <span class="half_time_label">${halfTime[index]}</span>
                 </div>
                 <hr class="full_line">
             </div>`

        div.appendChild(listItem);
      });
  }
