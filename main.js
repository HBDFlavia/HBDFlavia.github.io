document.querySelector('.happy-birthday').addEventListener('click', function() {
    document.body.classList.remove('not-loaded');
    document.body.classList.add('show-flowers');
    this.style.display = 'none';
  });
  
onload = () =>{
    document.body.classList.remove("container");
};