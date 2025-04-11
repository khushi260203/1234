var arr = [{
    username: 'Khushi',
    age: '22',
    istatus: 'Stranger',
    married: 'false',
    image:'https://149868225.v2.pressablecdn.com/wp-content/uploads/2023/04/342643.jpg'
},
{ username: 'Monika',
    age: '22',
    istatus: 'Stranger',
    married: 'false',
    image:'https://149868225.v2.pressablecdn.com/wp-content/uploads/2023/04/342643.jpg'
},
{ username: 'Tannu',
    age: '22',
    istatus: 'Stranger',
    married: 'false',
    image:'https://149868225.v2.pressablecdn.com/wp-content/uploads/2023/04/342643.jpg'
},
{ username: 'Ginni',
    age: '22',
    istatus: 'Stranger',
    married: 'false',
    image:'https://149868225.v2.pressablecdn.com/wp-content/uploads/2023/04/342643.jpg'
},]

var main = document.querySelector('#main')

function heroFunction() {
    var sum = ''

    arr.forEach(function (elem, idx) {
        sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}, ${elem.age}</h1>
    <h4>Maried : ${elem.married}</h4>
    <h5>${elem.istatus}</h5>
    <button id=${idx}>Add Friend</button>
</div>`
    })

    main.innerHTML = sum
}
heroFunction()

main.addEventListener('click', function (dets) {
    var gold = arr[dets.target.id]
    if(gold.istatus == 'Stranger'){
        gold.istatus = 'Friends'
    }else{
        gold.istatus = 'Stranger'
    }
    heroFunction()
})