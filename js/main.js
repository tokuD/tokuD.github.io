'use strict';

{
    const navis = document.querySelectorAll('header nav ul li a');
    const targets = document.querySelectorAll('main div');
    console.log(navis);
    navis.forEach(nav=>{
        nav.addEventListener('click', (e)=>{
            e.preventDefault();
            navis.forEach(nav=>{nav.classList.remove('current')});
            const name = nav.dataset.nav;
            targets.forEach(target=>{
                if(target.id === name) target.classList.add('appear');
            });
            targets.forEach(target=>{
                if(target.id !== name) target.classList.remove('appear');
            });
            nav.classList.add('current');
        });
    });

}