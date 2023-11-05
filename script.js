// const modal = document.getElementById('modal')

// function openModal(){
//     modal.classList.add('open-modal')
// }

// function closeModal(){
//     modal.classList.remove('open-modal')
// }

function openModal(){
    document.getElementById('modal').classList.toggle("open-modal");
}

function closeModal(){
    document.getElementById('modal').classList.remove('open-modal')
}

function openModal2(){
    document.getElementById('modal-2').classList.toggle("open-modal");
}

function closeModal2(){
    document.getElementById('modal-2').classList.remove('open-modal')
}

function openModal3(){
    document.getElementById('modal-3').classList.toggle("open-modal");
}

function closeModal3(){
    document.getElementById('modal-3').classList.remove('open-modal')
}



let date = new Date('Nov 13 2023 09:00:00')


function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let secunds = Math.floor(gap / 1000) % 60;
    console.log(days);
    
    document.getElementById('days').innerText = days;
}
counts()