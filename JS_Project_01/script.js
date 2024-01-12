const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons.length);

// buttons.forEach(function (button){
//     console.log(button)
//     button.addEventListener('click', (e) =>{
//         console.log(e.target);
//         if (e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });

for(let i=0; i< buttons.length; i++){
   const btn = buttons[i];
   console.log(btn);

       btn.addEventListener('click', (e) =>{
        console.log(e.target);
        // if (e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            
        }
    });
}