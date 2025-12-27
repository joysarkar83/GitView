const searchbox = document.querySelector('.searchbox');
const search_btn = document.querySelector('.search_btn');
const pfp = document.querySelector('.pfp');
const name = document.querySelector('.name');
const bio = document.querySelector('.bio');
const github_link = document.querySelector('.github_link');
const repo_count = document.querySelector('.repo_count');
const followers_count = document.querySelector('.followers_count');
const following_count = document.querySelector('.following_count');
const place = document.querySelector('.place');
const company = document.querySelector('.company');
const email = document.querySelector('.email');
const x = document.querySelector('.x');
const website = document.querySelector('.website');
const created = document.querySelector('.created');

const url = "https://api.github.com/users/";

async function getData(username){
    try{
        const rawData = await fetch(url+username);
        const processedData = rawData.json();
        console.log(processedData);
        console.log(processedData[2].followers);
        return processedData;
    }
    catch{
        // SearchBox Shake Animation
    }
}



search_btn.addEventListener('click', () =>{
    const searchboxValue = searchbox.value;
    if(searchboxValue.trim()){
        const data = getData(searchboxValue);
        console.log(data.followers);
    }else{
        // SearchBox Shake Animation
    }
});