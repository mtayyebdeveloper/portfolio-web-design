let navlistopenicon = document.getElementById('navbar-open-icon');
let navlistcloseicon = document.getElementById('navlist-close-icon');
let navlist = document.getElementById('nav-list');

navlistopenicon.addEventListener("click", () => {
    navlist.style.display = 'block';
});
navlistcloseicon.addEventListener("click", () => {
    navlist.style.display = 'none';
})
// blog search engine
let searchbtn = document.getElementById('search-btn');

searchbtn.addEventListener('click', () => {
    let searchbox = document.getElementById('blog-search').value.toUpperCase();
    let container = document.getElementById('container');
    let divs = container.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        let h2s = divs[i].getElementsByTagName("h2")[0];

        if (h2s) {
            let textvlue = h2s.textcontant || h2s.innerHTML;

            if (textvlue.toUpperCase().indexOf(searchbox) > -1) {
                divs[i].style.display = "";
            } else {
                divs[i].style.display = "none"
            }

        }
    }
});

// // contact form 
// let name1 = document.getElementById('name');
// let phone = document.getElementById('phone');
// let emails = document.getElementById('email');
// let formbtn = document.getElementById('btn-form');

formbtn.addEventListener("click", () => {
    let name1 = document.getElementById('name');
    if (name1.textContent != "") {
        document.write("thanks")
    } else {
        document.write("soory")
    }
})
