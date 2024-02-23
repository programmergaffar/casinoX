const rightBtn = document.getElementById("rightBtn")
const leftBtn = document.getElementById("leftBtn")
const sliderDiv = document.getElementById("slide")
const sliderCountShow = document.getElementById("sliderCount")

let SlideCount = 1;
let TransfromNumber = 0;


rightBtn.addEventListener("click",()=>{
    if(TransfromNumber < 75){
    SlideCount += 1
    TransfromNumber += 25
    sliderDiv.style.transform = `translate(-${TransfromNumber}%)`
    sliderCountShow.innerHTML = SlideCount

}else{
    TransfromNumber = 0
    SlideCount = 1
    sliderDiv.style.transform = `translate(-${TransfromNumber}%)`
    sliderCountShow.innerHTML = SlideCount

}


});
leftBtn.addEventListener("click",()=>{
   
    if(TransfromNumber > 0){
    SlideCount -= 1
        TransfromNumber -= 25
    sliderDiv.style.transform = `translate(-${TransfromNumber}%)`
    sliderCountShow.innerHTML = SlideCount


    }else{
     SlideCount = 4
        TransfromNumber = 75
        sliderDiv.style.transform = `translate(-${TransfromNumber}%)`
        sliderCountShow.innerHTML = SlideCount
    }

});
function removeClass (){
    const aciveState = document. querySelectorAll((".activeState"))
    // for mobile divives 
    aciveState.forEach((x)=>{
    x.classList.remove("On-active")
        // for table and above divives 
})
const pcActiceState = document.querySelectorAll(".smHovereEffect")
     pcActiceState.forEach((x)=>{
        x.classList.remove("mdActive")
     })

}

function activeShowOrHide(id){
    removeClass()

    // fot mobile divices active show 
    const CurrentItemActvie = document.getElementById(id)
    CurrentItemActvie.querySelector("svg").classList.add("On-active")
    // fot mobile divices active show 
   CurrentItemActvie.classList.add("mdActive")
   renderPage(id)
   
}

// catagoris selection code here 


function catagoriClassRemove(){
    const catagorisSelect = document.querySelectorAll(".catagoriSelect")
    catagorisSelect.forEach((x)=>{
        x.classList.remove("catagoriActive")
    })
}
function currentCatagoriSelection(id){

    // actice catagoris selection 
    catagoriClassRemove()
    document.getElementById(id).classList.add("catagoriActive")


    // catagoris content section 

    const mainContentParent = document.getElementById("mainContentParent")
// sport html section here 
   
    // casino html section end here 

if(id == "slot"){
        mainContentParent.innerHTML = ""
    mainContentParent.innerHTML = `
    <div id="SlotContent" class="h-[280px] w-full  relative overflow-hidden ">
    <button id="sportSeeAllBtn" class="absolute top-0 right-0 h-6 w-1/5 md:h-10 md:text-[20px]">See All</button>

    <div class="h-[100px] bg-lime-500 w-full absolute top-[25px] left-0 grid grid-cols-4 items-center box-border p-1">

        <button class="h-20 rounded-full w-20 border-none"><img class="h-full w-full rounded-full" src="../image/Money Maker.png" alt=""></button>
        <button class="h-20 rounded-full w-20 border-none">Demo</button>
        <button class="h-20 rounded-full w-20 border-none">Demo</button>
        <button class="h-20 rounded-full w-20 border-none">Demo</button>
    </div>
</div>
    
    `

    


    }
    // slot html section end here 

if(id == "slot"){
        mainContentParent.innerHTML = ""
    mainContentParent.innerHTML = `
    <div id="SlotContent" class="h-[280px] w-full  relative overflow-hidden ">
        <button id="sportSeeAllBtn" class="absolute top-0 right-0 h-6 w-1/5 md:h-10 md:text-[20px]">See All</button>
    
        <div class="h-[100px] bg-lime-500 w-full absolute top-[25px] left-0 grid grid-cols-4 items-center box-border p-1">
    
            <button class="h-20 rounded-[50%] w-20 border-none"><img class="h-full w-full rounded-[50%]" src="../image/moneyComing.png" alt=""></button>
            <button class="h-20 rounded-full w-20 border-none">Demo</button>
            <button class="h-20 rounded-full w-20 border-none">Demo</button>
            <button class="h-20 rounded-full w-20 border-none">Demo</button>
        </div>
    </div>
    
    `

    


    }
    //live casino html section end here 

if(id == "liveCasino"){
        mainContentParent.innerHTML = ""
    mainContentParent.innerHTML = `
    <div id="SlotContent" class="h-[280px] w-full  relative overflow-hidden ">
        <button id="sportSeeAllBtn" class="absolute top-0 right-0 h-6 w-1/5 md:h-10 md:text-[20px]">See All</button>
    
        <div class="h-[100px] bg-lime-500 w-full absolute top-[25px] left-0 grid grid-cols-4 items-center box-border p-1">
    
            <button class="h-20 rounded-[50%] w-20 border-none"><img class="h-full w-full rounded-[50%]" src="../image/roulatte.png" alt=""></button>
            <button class="h-20 rounded-full w-20 border-none"><img class="h-full w-full rounded-[50%]" src="../image/sicbo.png" alt=""></button>
            <button class="h-20 rounded-full w-20 border-none">Demos</button>
            <button class="h-20 rounded-full w-20 border-none">Demo</button>
        </div>
    </div>s
    
    `

    


    }







}
currentCatagoriSelection('slot')











