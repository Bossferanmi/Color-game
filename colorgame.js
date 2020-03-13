var colordisplay = document.querySelector('#colordisplay');
var displaymessage = document.querySelector('#displaymessage');
var squares = document.querySelectorAll('.square');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');

var colors = generateRandomColors(6);
var pickedcolor = colors[Math.floor(Math.random() * 5)]
// rgb(112, 174, 221)

game()

function game(){
    colordisplay.innerHTML = pickedcolor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function(){
            var squareColor = this.style.backgroundColor;

            if(squareColor == pickedcolor){
                displaymessage.innerHTML = 'CORRECT';
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.backgroundColor = squareColor;
                }
                h1.style.backgroundColor = squareColor;
                reset.innerHTML = 'PLAY AGAIN';
            } else {
                displaymessage.innerHTML = 'try again';
                this.style.backgroundColor = '#232323';
            }
        })
    }
}

reset.addEventListener('click', function(){
    colors = generateRandomColors(6);
    pickedcolor = colors[Math.floor(Math.random() * 5)]
    game();
})

function generateRandomColors(numbers){
    var arr = [];
    for(var i = 0; i < numbers; i++){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(color);
    }
    return arr;
}