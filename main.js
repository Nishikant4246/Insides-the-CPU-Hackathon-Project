// To hide elements
function hideElement(element) {
    element.style.display = 'none';
}

// To show elements
function showElement(element) {
    element.style.display = '';
}

// To hide sidebar
function menuHide(){    
    const element1 = document.getElementById('sidebar');
    hideElement(element1)
    const element2 = document.getElementById('bar-button');
    element2.style.display = '';
    showElement(element2)
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("element2").style.display = "block";
      });
}

// To Show menu
function menuShow(){    
    const element3 = document.getElementById('sidebar');
    showElement(element3)
    const element4 = document.getElementById('bar-button');
    hideElement(element4)
}


// Frame
function changeToFrame(){  
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/2e11c4583ebe4fc98c073fd8a2690a06/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
showElement(iframe1)
const src1 = iframe.src;

console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/d86ws7mQYIg"

fetch('frame.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Indicating Lights
function changeToIndicatingLigts(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/c40053b034a74789892d1fdfc7764fe7/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/FU_YFpfDqqA"

fetch('indicatingLights.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// USB & Ports
function changeTousbPorts(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/f881fba9b3ce4f66858911d48594027b/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/pIZREjck9jg"

fetch('usb&Ports.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// System Fan
function changeToSystemFans(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/2177ed75b15f402c81701c71c1a6cac0/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/1UAo2CzS-XI"

fetch('systemFans.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// MotherBoard
function changeToMotherBoard(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/56bd8923fdf341fd8d81b717055a61dd/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/b2pd3Y6aBag"

fetch('motherBoard.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Processor
function changeToProcessor(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/94f962a2866344ceb01ce4e6ba9069c6/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/KgPuZc5iFhs"

fetch('processor.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Hard-Drive
function changeToHardDrive(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/1e699db0fade40eab161603387db918e/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/wtdnatmVdIg?list=PL6rx9p3tbsMsZ9hUvU-kDOXc8Fot04Hhu"

fetch('hardDrive.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Ram
function changeToRam(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/08d88b385d694a0ba8bebd2eface6afc/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/PVad0c2cljo"

fetch('ram.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// PSU
function changeToPsu(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/d85cdc5b183244099b00d81e3598b26b/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/ZW1wcoERoDU"

fetch('psu.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Heat Sink
function changeToHeatSink(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/72c75f52d42643ef83863279b65b856e/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/LA6H_rGoJsI"

fetch('heatSink.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Sound Cards
function changeToSoundCards(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/9c30822f96bc4ef991a936d2e979bbca/embed?autospin=1&autostart=1&preload=1"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/-jiOUIxsDOk"

fetch('soundCards.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// CD Drive Port
function changeToCdDrivePort(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://sketchfab.com/models/1ccab191f993433e84e3fd66778a7708/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
showElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/H-jxTzFrnpg"

fetch('cdDrivePort.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// CU
function changeToCu(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/-Qs5Ypwnb9c"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = "https://www.youtube.com/embed/blvQBwxSWCI"

fetch('cu.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// ALU
function changeToAlu(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/48-NPf51AVU"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = ""

fetch('alu.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// MU
function changeToMu(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/7J7X7aZvMXQ"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = ""

fetch('mu.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Registers
function changeToRegisters(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/8U8NmGokOjY"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = ""

fetch('registers.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Cache
function changeToCache(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/yi0FhRqDJfo"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = ""

fetch('cache.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}

// Clock
function changeToClock(){
const iframe = document.getElementById('myIframe');
const src = iframe.src;

console.log('Iframe src:', src);
iframe.src = "https://www.youtube.com/embed/bmul-fjI1ZE"

const iframe1 = document.getElementById('myIframe1');
const src1 = iframe.src;
hideElement(iframe1)
console.log('Iframe src:', src1);
iframe1.src = ""

fetch('clock.html')
    .then(response => response.text())
    .then(html => {
        const targetElement = document.getElementById('text-area');
        targetElement.innerHTML = "";
        targetElement.innerHTML += html;

    })
    .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching HTML:', error);
    });
}