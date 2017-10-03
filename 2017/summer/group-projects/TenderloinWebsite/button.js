var buttons = document.getElementsByClassName('button')
Array.prototype.forEach.call(buttons, function (b){
    b.addEventListener('click', createRipple);
})

function createRipple (e) {
    var cirle = document.createElement ('div');
    this.appendChild(cirle);
    circle.classList.add('ripple')
}

$(function () {
    $("#nav > div").click(function (item) {
        item.append("<div>Hello</div>")
    })
})