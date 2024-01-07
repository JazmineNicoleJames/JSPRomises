let url = 'https://deckofcardsapi.com/api/deck'

$.get(`${url}/new/shuffle/?deck_count=1`).then(data =>  {
    console.log(data);
});


$.get(`${url}/new/draw/?count=1`)
.then(card => {
    console.log('suit:',card.cards[0].suit);
    console.log('value:',card.cards[0].value);
});

$.get(`${url}/7vhuewem1sc7/draw/?count=1`)
.then(card => {
    console.log('suit:',card.cards[0].suit);
    console.log('value:',card.cards[0].value);
});


let $btn = $('button')
let $stack = $('<div>')
$('body').append($stack)
$.get(`${url}/new/shuffle/`).then(data => {
    $btn.show()
    console.log(data)
});

$btn.on('click', function() {
    $.get(`${url}/zp8xhud34rxe/draw/`).then(data => {
        let src = data.cards[0].image;
    

        $stack.append($('<img>', {
            src: src,
            alt: "Card",
            class: "stacked"
            
        })
        );
        if (data.remaining === 0) $btn.remove();
    })
})