const start = document.querySelector("#start");
let interval;
start.addEventListener('click', () =>{
      interval = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000);
})


 const randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) 
        {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
    return color;
}
// function backgroundColor() {
//     document.body.style.backgroundColor = randomColor()
    
// }
const stop = document.querySelector("#stop");

stop.addEventListener('click', ()=>{
    clearInterval(interval);
})
