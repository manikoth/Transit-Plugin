$(document).ready(function(){
    
    // On page load
    $('h1').transition({
        perspective: '100px',
        rotateY: '180deg'
    }, 1000, 'easeInOutQuart' );
    
    // Click on Image
    $('img').click(function(){
        
        $(this).transition({
          scale: '2'
        }, 2000);
    
    });
    
    // Hover on 
    $('a').hover(function(){
        
        $(this).css({
            'padding-left' : '100px'
        }, 'easeInBack');        
        
    },
    // Hover off 
    function(){
        
        $(this).css({
            'padding-left' : '0'
        }, 'easeInOutQuart');        
        
    });
    
});

