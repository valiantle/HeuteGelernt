// function countDown(n) {
//     if (n <= 0){
//         console.log("Fertig!");
//         return;
//     }
//     console.log(n);
//     countDown(n - 1);
// }

// function add(n) {
//     if (n >= 25){
//         // console.log("Dah");
//         return;
//     }
//     console.log(n);
//     add(n + 1);
// }
// add(1)

// function complex(n) {
//     if ((n - 1) <= 0) {
//         console.log("bruh");
//         return;
//     }
//     console.log(n);
//     complex(n + (n - 1));
// }
// n(15)


// function complex(n) {
//     if ((n - 1) <= 0) {
//         console.log("bruh");
//         return;
//     }
//     console.log(n);
//     n + complex(n - 1);
// }

// function sumUpTo(n) {
//     if (n === 0) {          //если н равно 0 закончить рекурсию через ретенрн что ее прерывает
//         console.log("slojna sliwkam slojna") //бонус вывод сообщения в консоль
//         return 0;
            
//     }
//     console.log(n);         // показывает н на промежутке каждого шага который будет задан командой ниже
//     return n + sumUpTo(n - 1);//вернуть н + функцию sumupto но (от н взятого перед плюсом еще отнимается - 1)
// }

// console.log(sumUpTo(15));// по сути это консоль лог ссылающийся сам на себя паралельно дающий начальную точку в 15 



function endLess(n) {
    if (n <= 0)
        return;
    
    console.log(n);
    endLess(n - 1);
}


