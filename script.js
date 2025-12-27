const searchbox = document.querySelector('.searchbox');
const search_btn = document.querySelector('.search_btn');
const pfp = document.querySelector('.pfp');
const username = document.querySelector('.name');
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

const container1 = document.querySelector('.infoContainer1');

const url = "https://api.github.com/users/";

async function getData(username){
    try{
        const rawData = await fetch(url+username);
        const processedData = await rawData.json();
        console.log(processedData);
        return makeLiveChanges(processedData);
    }
    catch{
        // SearchBox Shake Animation
    }
}

const makeLiveChanges = (data) => {
    show(github_link);
    show(container1);

    change_pfp(data.avatar_url);
    change_username(data.name, data.login);
    change_bio(data.bio);
    change_github_link(data.html_url);
    change_repo_count(data.public_repos);
    change_followers_count(data.followers);
    change_following_count(data.following);
    change_place(data.location);
    change_company(data.company);
    change_email(data.email);
    change_x(data.twitter_username);
    change_website(data.blog);
    change_created(data.created_at);
}

const show = (query) => {
    query.classList.remove('hidden');
}

const hide = (query) => {
    query.classList.add('hidden');
}

// Working
const change_pfp = (val) => {
    if(val!=="" && val!==null){
        show(pfp);
        pfp.setAttribute('src', val);
    }
    else{
        hide(pfp);
    }
}

// Working
const change_username = (val1, val2) => {
    show(username);
    if(val1!=="" && val1!==null){
        username.innerText = val1;
    }else{
        username.innerText = val2;
    }
}

// Working
const change_bio = (val) => {
    if(val!=="" && val!==null){
        show(bio);
        bio.innerText = val;
    }else{
        hide(bio);
    }
}

// Working
const change_github_link = (val) => {
    github_link.setAttribute('href', val);
}

const change_repo_count = (val) => {
    repo_count.innerText = val;
}

const change_followers_count = (val) => {
    show(followers_count);
    followers_count.innerText = val;
}

const change_following_count = (val) => {
    show(following_count);
    following_count.innerText = val;
}

const change_place = (val) => {
    if(val!=="" && val!==null){
        show(place);
        place.innerText = val;
    }else{
        hide(place);
    }
}

const change_company = (val) => {
    if(val!=="" && val!==null){
        show(company);
        company.innerText = val;
    }else{
        hide(company);
    }
}

const change_email = (val) => {
    if(val!=="" && val!==null){
        show(email);
        email.innerText = val;
    }else{
        hide(email);
    }
}

const change_x = (val) => {
    if(val!=="" && val!==null){
        show(x);
        x.innerText = val;
    }else{
        hide(x);
    }
}

const change_website = (val) => {
    if(val!=="" && val!==null){
        show(website);
        website.innerText = val;
    }else{
        hide(website);
    }
}

const change_created = (val) => {
    if(val!=="" && val!==null){
        show(created);
        created.innerText = val;
    }else{
        hide(created);
    }
}

// Triggers Execution
const main = () => {
    const searchboxValue = searchbox.value;
    if(searchboxValue.trim()){
        const data = getData(searchboxValue);
    }else{
        // SearchBox Shake Animation
    }
}

search_btn.addEventListener('click', () =>{
    main();
});

addEventListener('keyup', (event) => {
    if(event.code == "Enter"){
        main();
    }
});