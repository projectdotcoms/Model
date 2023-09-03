const press = document.querySelector('.press');
const close = document.querySelector('.close');
const model_container = document.querySelector('.model_container');
const whole = document.querySelector('.whole');

model_container.style.display= 'none';
function tap(){
    model_container.style.display = 'flex';
    whole.style.backdropFilter = 'brightness(0.6)'
}
press.addEventListener('click',tap);

function untap(){
    model_container.style.display = 'none';
    whole.style.backdropFilter = 'brightness(1)'
}
close.addEventListener('click',untap);

window.addEventListener('click',function(e)
{
    if(e.target === whole){
        model_container.style.display = 'none';
        whole.style.backdropFilter = 'none';
    }
})