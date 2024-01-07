//PART 1: Number Facts

let url = "http://numbersapi.com/";


let num = 8;
$.get(`${url}${num}?json`).then(data => {console.log(data)
});


let nums = [2, 8, 23];
$.get(`${url}${nums}?json`).then(data => {console.log(data)
});


let favNum = 8;
let promises = [];
for(let i = 0; i <4; i++){
    promises.push($.get(`${url}${favNum}?json`));
};
Promise.all(promises).then(data => {
    data.forEach(d => 
        $("body").append(`<p> ${d.text} </p>`));
});

