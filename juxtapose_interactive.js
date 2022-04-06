let origImages = [
    {
        "src": "https://loremflickr.com/300/300",
        "credit": "Boston Herald",
        "label": "Left kitten"
    },
    {
        "src": "photocombos/2oclocklounge.jpeg",
        "credit": "Corey Dockser",
        "label": "Right kitten"
    }
];

let origOptions = {
    "makeResponsive": true,
    "showLabels": true,
    "mode": "horizontal",
    "showCredits": true,
    "animate": true,
    "startingPosition": "50"
};

const juxtaposeSelector = "#juxtapose-embed";
const transientSelector = "#juxtapose-hidden";
var slider;

function replaceImage(LeftRight, img, date) {
    let leftImage = {
        label: "Left kitten",
        credit: "LoremFlickr",
    };
    let rightImage = {
        label: "Right kitten",
        credit: "LoremFlickr",
    };
    if (LeftRight === "Left") {
        leftImage.src = img.src;
        leftImage.label = date;
        rightImage.src = slider.imgAfter.image.src;
        console.log(leftImage)
    } else if (LeftRight === "Right") {
        leftImage.src = slider.imgBefore.image.src;
        rightImage.src = img.src;
        leftImage.label = date;
        console.log(rightImage)
    }
    let images = [leftImage, rightImage];
    let options = slider.options;
    options.callback = function (obj) {
        var newNode = document.getElementById(obj.selector.substring(1));
        var oldNode = document.getElementById(juxtaposeSelector.substring(1));
        oldNode.replaceChild(newNode.children[0], oldNode.children[0]);
        newNode.removeChild(newNode.children[0]);
    };
    options.startingPosition = slider.sliderPosition;
    slider = new juxtapose.JXSlider(transientSelector, images, options);
};

function replaceLeft(e, img, date) {
    e.preventDefault();
    replaceImage("Left", img, date);
}

function replaceRight(e, img, date) {
    e.preventDefault();
    replaceImage("Right", img, date);
}

(function () {
    slider = new juxtapose.JXSlider(
        juxtaposeSelector, origImages, origOptions);
    document.getElementById("left-button").onclick = replaceLeft;
    document.getElementById("right-button").onclick = replaceRight;
})();