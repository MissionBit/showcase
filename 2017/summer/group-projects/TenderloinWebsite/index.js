var buttons = document.getElementsByTagName('button')
array.prototype.forEach.call(buttons, function (b){
    b.addEventListener('click', createRipple);
})

function createRipple (e) {
    var cirle = document.createElement ('div');
    this.appendChild(cirle);
    circle.classList.add('ripple')
}