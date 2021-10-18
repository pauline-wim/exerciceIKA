// Lier l'input mot de passe au keypad
function input(e) {
    var password = document.getElementById("password");
    password.value = password.value + e.value;
}


// Random value - KEYPAD 
// for (i = 0; i < 10; i++) {
//     var btn = document.getElementById("btn" + i);
//     btn.value = Math.floor(Math.random() * 10);
// }

var btn = document.getElementById("btn" + i);
var nums = [0,1,2,3,4,5,6,7,8,9];
var gen_nums = [];

function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++) 
       if(array[i] == el) return true;
   return false;
}

function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
       gen_nums.push(rand); 
       return rand;
    }
    return get_rand(array);
}

for(var i = 0; i < 10; i++) {
    var btn = document.getElementById("btn" + i);
    btn.value = get_rand(nums);
}