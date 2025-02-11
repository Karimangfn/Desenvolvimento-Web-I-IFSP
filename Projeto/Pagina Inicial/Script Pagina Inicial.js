    /* Noticia 1 */
    function slide1(){
    document.getElementById('imagem').src="Imagens - Pagina Inicial/blizzard noticia2.jpg";
    setTimeout("slide2()", 3000)
    }
    
    function slide2(){
    document.getElementById('imagem').src="Imagens - Pagina Inicial/blizzard noticia3.jpg";
    setTimeout("slide3()", 3000)
    }
    
    function slide3(){
    document.getElementById('imagem').src="Imagens - Pagina Inicial/blizzard noticia.jpg";
    setTimeout("slide1()", 3000)
    }

    /* Noticia 2 */
    function slide4(){
    document.getElementById('imagem2').src="Imagens - Pagina Inicial/noticia ps52.jpg";
    setTimeout("slide5()", 3000)
    }
        
    function slide5(){
    document.getElementById('imagem2').src="Imagens - Pagina Inicial/noticia ps53.jpg";
    setTimeout("slide6()", 3000)
    }
        
    function slide6(){
    document.getElementById('imagem2').src="Imagens - Pagina Inicial/noticia ps5.jpg";
    setTimeout("slide4()", 3000)
    }

    /* Noticia 3 */
    function slide7(){
    document.getElementById('imagem3').src="Imagens - Pagina Inicial/cblol noticia2.jpg";
    setTimeout("slide8()", 3000)
    }
            
    function slide8(){
    document.getElementById('imagem3').src="Imagens - Pagina Inicial/cblol noticia3.jpg";
    setTimeout("slide9()", 3000)
    }
            
    function slide9(){
    document.getElementById('imagem3').src="Imagens - Pagina Inicial/cblol noticia.jpg";
    setTimeout("slide7()", 3000)
    }

    
        