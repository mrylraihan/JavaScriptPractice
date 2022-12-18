const btn = document.getElementById('button')

const input = document.getElementById('input')

function stringContainsNumbers(str) {
	return /\d/.test(str)
}

btn.addEventListener('click', ()=>{
    if(input.value === re){
        alert('hey we need input!')
    }else{
        const inValue = input.value
        console.log(inValue);
    }
})