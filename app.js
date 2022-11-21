const userContainer = document.querySelector('.user-container')
const left = document.getElementById('left')
const right = document.getElementById('right')
const randomBtn = document.querySelector('.btn')


let count = 0;
let len;


getUser()

async function getUser(){
    const res = await fetch("https://randomuser.me/api/?results=100");
    const {results} = await res.json();
    len = results.length;
    
    userContainer.innerHTML =`<div class="user">
                                    <div class="image">
                                        <img src="${results[count].picture.large}" alt="" class="user-image">
                                    </div>
                                    <div class="info">
                                        <h3 class="title">${results[count].name.first} ${results[count].name.last}</h3>
                                        <span>${results[count].location.country}</span>
                                    </div>
                                </div>
    `
    
                        
}

right.addEventListener('click',()=>{
    count++;
    if(count > len-1){
        count = 0;
    }
    getUser();
})

left.addEventListener('click',()=>{
    count--;
    if(count < 0){
        count = len-1;
    }
    getUser();
})

randomBtn.addEventListener('click',()=>{
    count = getRandomNum();
    getUser();
})

function getRandomNum(){
    return Math.floor(Math.random()*len);
}





