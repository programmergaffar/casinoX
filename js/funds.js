function acountDorW (x){

    if(x == 'diposit'){
        removePage('account-page')
    activeShowOrHide("diposit")
    }
    if(x == 'withdrawal'){
    removePage('account-page')
    activeShowOrHide("diposit")
    fund_switch('withdral-sel_btn')
    }
    


}
 function fund_switch(x){


const fundsSwitchParent =  document.querySelector("#funds_switch_parent")

    if(x == 'Diposit-sel_btn'){
        fundsSwitchParent.style.marginLeft=`0`
        document.getElementById("withdral-sel_btn").classList.remove("bg-slate-600")

        document.getElementById(x).classList.add("bg-slate-600")
    }
    if(x == 'withdral-sel_btn'){
        fundsSwitchParent.style.marginLeft=`-100%`

        document.getElementById("Diposit-sel_btn").classList.remove("bg-slate-600")

        document.getElementById(x).classList.add("bg-slate-600")
    }

}
