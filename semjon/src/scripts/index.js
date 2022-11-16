function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme'); 
})
