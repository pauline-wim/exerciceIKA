function input(e) {
    var password = document.getElementById("password");
    password.value = password.value + e.value;
}


// Random value - KEYPAD 
for (i = 0; i < 10; i++) {
    var btn = document.getElementById("btn" + i);
    btn.value = Math.floor(Math.random() * 10);
}

// function load() {
//     var array = new Array();

//     while (array.length < 10) {
//         var temp = Math.round(Math.random() * 9);
//         if (!contain(array, temp)) {
//             array.push(temp);
//         }
//     }
//     for (i = 0; i < 10; i++) {
//         var btn = document.getElementById("btn" + i);
//         btn.value = array[i];
//     }
// }