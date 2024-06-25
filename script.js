document.getElementById('theme-toggle').addEventListener('click',function (){

    var body=document.body;
    var button=document.getElementById('theme-toggle');
    if(body.classList.contains('light-mode')){
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent='Light Mode';
    }
    else{
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent='Dark Mode'
    }
});