let btns = document.querySelectorAll('.BTNS')
btns.forEach((b)=>{
    b.addEventListener('click', function(e){
        render(e.target.id);
    });
});
function render(name){
    name='/templates/' + name + '.html';
    $(function(){
        $("#load").load(name); 
        });    
}
