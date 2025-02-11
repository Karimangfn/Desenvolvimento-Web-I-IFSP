var balaomsg = document.querySelectorAll('.corSubTopicos');
for(var x=0; x<balaomsg.length; x++){
   balaomsg[x].onmouseenter = function(){  
      this.querySelector('span').style.display = 'inline-block';   
   }

   balaomsg[x].onmouseleave = function(){
      this.querySelector('span').style.display = 'none'; 
   }
}
