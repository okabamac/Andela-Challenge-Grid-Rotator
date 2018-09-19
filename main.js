let list = [1, 2, 3, 6, 9, 8, 7, 4];
let wheel = document.querySelectorAll('.wheels');

function rotate(list, times) {
    while (times--) {
        var temp = list.shift();
        list.push(temp)
    }
    wheel[0].innerHTML = list[0];
    wheel[1].innerHTML = list[1];
    wheel[2].innerHTML = list[2];
    wheel[3].innerHTML = list[7];
    wheel[4].innerHTML = list[3];
    wheel[5].innerHTML = list[6];
    wheel[6].innerHTML = list[5];
    wheel[7].innerHTML = list[4];
}