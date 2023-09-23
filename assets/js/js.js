//service class
class Service {
    constructor(servIndex, title, description, imagePath) {
        this.servIndex = servIndex;
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
    }
}

let services = [];
//service objects
// services.push(new Service(0, "Web Application Development", "Create web-based applications for businesses and organisations.", "../assets/img/clipArt/web.png"));
services.push(new Service(0, "Web Application Development", "Create web-based applications for businesses and organisations.", './assets/img/clipArt/web.png'));
services.push(new Service(1, "Mobile Application Development", "Design and develop mobile applications for iOS and Android platforms.", './assets/img/clipArt/mobile.png'));
services.push(new Service(2, "Stand-alone Application Development", "Create web-based applications for businesses and organisations.", './assets/img/clipArt/standalone.png'));
services.push(new Service(3, "UI/UX Design", " Offer user interface and user experience design services to create intuitive and user-friendly applications.", './assets/img/clipArt/uiUx.png'));
services.push(new Service(4, "Software Maintenance and Support", "Provide ongoing maintenance, updates, and technical support for software applications.", './assets/img/clipArt/maintenance.png'));
services.push(new Service(5, "Security", "We employ strong data encryption and access controls, safeguarding your software and user data from threats. Focus on your core business with confidence.", './assets/img/clipArt/security.png'));


/*let serviceItems = $('.service-item');*/

let serviceItems = $(".service-item");
let currentServiceIndex = null;
let count = 0;
let interval;
let timeout;


$('.service-item').click(function () {

    clearTimeout(timeout);

    if (currentServiceIndex != null) {

        serviceItems[currentServiceIndex].style.color = "#a5a5a5";
        serviceItems[currentServiceIndex].style.borderBottom = "3px solid #a5a5a5";

    }

    let selectedServiceIndex = getSelectedService(this.innerText);
    currentServiceIndex = selectedServiceIndex;
    setDetails(selectedServiceIndex);
    clearInterval(interval);

    timeout = setTimeout(function () {
        clearInterval(interval);
        interval = setInterval(serviceToggle, 2000);
    }, 8000);

    console.log(selectedServiceIndex);


})


interval = setInterval(serviceToggle, 2000);

function serviceToggle() {

    if (currentServiceIndex != null) {

        serviceItems[currentServiceIndex].style.color = "#a5a5a5";
        serviceItems[currentServiceIndex].style.borderBottom = "3px solid #a5a5a5";

    }

    if (count < serviceItems.length) {

        currentServiceIndex = count;
        setDetails(count)
        count++;

    } else {
        count = 0;
    }

}

function getSelectedService(name) {
    for (let i = 0; i < serviceItems.length; i++) {
        if (serviceItems[i].innerText === name) {
            return i;
        }
    }
}

function setDetails(index) {

    let sdTitle = $('#sdTitle');
    let sdImage = $('#sdImage');
    let sdContent = $('#sdContent');

    sdTitle.text(services[index].title);
    //sdImage.attr('src','../assets/img/clipArt/web.png');
    sdImage.attr('src',services[index].imagePath);
    sdContent.text(services[index].description)

    count = index;

    serviceItems[index].style.color = "#000235";
    serviceItems[index].style.borderBottom = "3px solid #000235";

    /*// var x= serviceItems[index];
    //  x.css('color','red');
     var element = $(serviceItems[index]);
     element.css('color', 'red');*/
}
