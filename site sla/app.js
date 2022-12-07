'use sctrict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('darkt-theme');
    
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = 'Dark';
    } else{
        this.textContent = 'Light';
    }

    console.log('current class name:'+ className);
});
