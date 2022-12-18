function hello(b) {
    console.log("hello "+ b);
}

function sayHello(a, b) {
    a(b);
}

sayHello(hello, "mike");//hello mike


const alerting= ()=> alert("hey u clicked me!")

const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    alert('hey you clicked me!')
})