// this file use for remove page 

function removePage(currentPage){

    if(currentPage == 'account-page'){

        document.getElementById(currentPage).style.top = "100vh"
        setTimeout(()=>{
           document.querySelector(`#${currentPage}`).remove() 
        },510)
    }
    // diposit page remove

    if(currentPage == 'diposit-page'){

        document.getElementById(currentPage).style.top = "100vh"
        setTimeout(()=>{
           document.querySelector(`#${currentPage}`).remove() 
        },510)
        
    }
    if(currentPage == 'promotion-page'){

        document.getElementById(currentPage).style.top = "100vh"
        setTimeout(()=>{
           document.querySelector(`#${currentPage}`).remove() 
        },510)
        
    }

    // for back home manu 



}