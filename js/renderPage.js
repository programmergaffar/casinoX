function renderPage(x){
    // accoount section 
    if(x == "account"){

        document.body.innerHTML += `
        <div id="account-page"  class="fixed top-[100vh] left-0 z-20 h-screen w-full duration-500 bg-violet-900 box-border p-2">
        <div class="h-screen w-full relative flex flex-col justify-center items-center">
        
            <button class="absolute right-0 top-0 h-10 w-10 ]" onclick="removePage('account-page')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  
            </button>
        <!-- account name user name and balannce -->
            <div id="Account-header" class="h-[120px] w-full bg-lime-700 box-border p-1">
        
                <h2 id="account_fullName" class="my-1 text-center">Gaffar Adif</h2>
                <h3 id="account_userName" class="my-1 text-center">gaffar1008</h3>
                <!-- balancee show  -->
                <div id="balanceParent" class="h-[50px] w-full bg-slate-700 grid grid-cols-2 text-yellow-50 rounded">
                    <div class="h-[50px] w-full flex justify-start items-center gap-3 box-border  px-3">
                        <p>Main Wallet</p> <span id="balance_reload" class=""><i class="fa-solid fa-rotate"></i></span> <span id="balance_hide"><i class="fa-regular fa-eye"></i></span>
                        
                    </div>
                    <div class="h-[50px] w-full text-end box-border  px-3 flex justify-end items-center gap-2">
                        <p id="balanceId">500</p> <span> BDT</span>
                    </div>
                </div>
            </div>
        
            <!-- funds Section  -->
            <div id="funds_section" class=" relative h-[100px] w-full bg-cyan-900 box-border mt-8 p-2">
            <p class="mt-0 h-[5px]">Funds</p>
            <hr class="h-px w-full bg-black border-none top-0">
            <div class="w-full h-fit box-border p-1 grid grid-cols-2">
                <button class="bg-transparent border-none text-[15px]" onclick="acountDorW('diposit')"><i class="fa-solid fa-wallet"></i> <br> <span>Diposit</span></button>
                <button class="bg-transparent border-none text-[15px]" onclick="acountDorW('withdrawal')"><i class="fa-solid fa-wallet"></i> <br> <span>Withdrawl</span></button>
            </div>
        </div>
        
        
        <!-- History Section  -->
            <div id="funds_section" class=" relative h-[100px] w-full bg-cyan-900 box-border mt-2 p-2">
            <p class="mt-0 h-[5px]">History</p>
            <hr class="h-px w-full bg-black border-none top-0">
            <div class="w-full h-fit box-border p-1 grid grid-cols-3">
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-clipboard-list"></i> <br> <span>Betting Record</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-circle-dollar-to-slot"></i> <br> <span>Turn Over</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-money-check-dollar"></i><br> <span>Transition</span></button>
            </div>
        </div>
        
        
        <!-- profile section  -->
            <div id="funds_section" class=" relative h-[100px] w-full bg-cyan-900 box-border mt-2 p-2">
            <p class="mt-0 h-[5px]">Profile</p>
            <hr class="h-px w-full bg-black border-none top-0">
            <div class="w-full h-fit box-border p-1 grid grid-cols-4">
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-id-badge"></i> <br> <span>Personal Info</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-unlock"></i> <br> <span>Password Reset</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-envelope"></i><br> <span>Inbox</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-solid fa-people-group"></i><br> <span>Refarel</span></button>
            </div>
        </div>
        
        <!-- Contract us section  -->
            <div id="funds_section" class=" relative h-[100px] w-full bg-cyan-900 box-border mt-2 p-2">
            <p class="mt-0 h-[5px]">Contract Us</p>
            <hr class="h-px w-full bg-black border-none top-0">
            <div class="w-full h-fit box-border p-1 grid grid-cols-3">
                <button class="bg-transparent border-none text-[15px]"><i class="fa-brands fa-square-whatsapp"></i><br> <span>Whatsapp</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-brands fa-facebook"></i> <br> <span>Facebook</span></button>
                <button class="bg-transparent border-none text-[15px]"><i class="fa-regular fa-envelope"></i><br> <span>Email</span></button>
            </div>
        </div>
        
        <button id="log_outBtn" class="h-8 w-[80%] my-4 mx-[10%] md:w-[40%]"><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
        
        </div>
        </div>
        `

         setTimeout(()=>{
    document.getElementById("account-page").style.top = "0"
    },1)
    }

    // diposin section 

   else if(x == 'diposit'){

    document.body.innerHTML += `

    <div id="diposit-page" class="fixed top-[100vh] left-0 h-screen w-full duration-500 bg-[#CCD3CA] md:z-30">
        <div class="relative h-screen w-full box-border p-3">

            <button id="diposit_backBtn" class="absolute top-1 left-1 h-10 w-10 text-[30px] bg-transparent border-none"
                onclick="removePage('diposit-page')"><i class="fa-solid fa-chevron-left"></i></button>

            <h2 class="text-center  m-0">Funds</h2>
            <hr class="h-[2px] w-[50%] bg-cyan-900 border-none ">
            <!-- switch diposit  to Withdrawl  -->
            <div class="h-[40px] w-[75%]  mx-auto grid grid-cols-2 px2border">
                <button id="Diposit-sel_btn" class="text-[18px] bg-transparent border-none text-white duration-200 "
                    onclick="fund_switch('Diposit-sel_btn')">Diposit</button>

                <button id="withdral-sel_btn" class="text-[18px] bg-transparent border-none text-white duration-200"
                    onclick="fund_switch('withdral-sel_btn')">Withdrawl</button>

            </div>
<div class="w-full overflow-hidden">

  <div id="funds_switch_parent" class="h-fit w-[200%] bg-green-400 grid grid-cols-2 duration-300">
            <!-- diposit sectipon  -->

                <div id="diposit-sec" class="h-fit">
                    <div class="h-[40px] w-full bg-yellow-200 rounded-md mt-5">
                        <select name="select" id="DipositBonusSelect"
                            class="h-[40px] w-full bg-yellow-200 rounded-md border-none">
                            <option value="no_bonus" selected>No Bonus</option>
                            <option value="20%">20% Bonus</option>
                            <option value="100%">20% Bonus</option>
                        </select>
                    </div>

                    <!-- payment methord section  -->

                    <div class="h-[115px] w-full bg-gray-400 mt-5 rounded-md box-border p-3">
                        <h3 class="mt-0 h-1">Payment method</h3>
                        <div class="h-fit w-full  box-border p-2 grid grid-cols-4 gap-2">

                            <button id="py_nagad" onclick="CheckPym('py_nagad')"
                                class="h-[50px] bg-transparent px2border rounded-md">Nagad</button>
                            <button id="py_bKash" onclick="CheckPym('py_bKash')"
                                class="h-[50px] bg-transparent px2border rounded-md">bKash</button>
                            <button id="py_upay" onclick="CheckPym('py_upay')"
                                class="h-[50px] bg-transparent px2border rounded-md">Upay</button>
                            <button id="py_rocket" onclick="CheckPym('py_rocket')"
                                class="h-[50px] bg-transparent px2border rounded-md">Rocket</button>

                        </div>
                    </div>

                    <!-- diposit method Section  -->

                    <!-- diposit Ammount section  -->
                    <div class="h-[140px] w-full bg-yellow-800 mt-5 rounded-md box-border p-3">
                        <h3 class="mt-0 h-1">Ammount</h3>
                        <div class="h-fit w-full  box-border p-2 grid grid-cols-4 gap-2 mt-0">

                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">100</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">200</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">500</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">1000</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">2000</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">5000</button>

                        </div>
                    </div>

                    <!-- diposit input section  -->
                    <div class="h-[50px] w-full bg-purple-500 mt-5 rounded-md">
                        <input type="text" id="diposit_input"
                            class="h-[50px] w-full border-none bg-slate-100 rounded-md box-border px-5 py-px text-end">
                    </div>

                    <!-- diposit submit button  -->
                    <button id="diposit_submitBtn"
                        class="w-[80%] h-12 bg-blue-300 rounded-lg border-none mt-5 mx-[10%]">Submit</button>
                </div>
                <!-- diposit section end   -->

            <!-- Withdrawl section  -->

    <div id="withdral_sec" class="">
    
    <div class="h-[115px] w-full bg-gray-400 mt-5 rounded-md box-border p-3">
        <h3 class="mt-0 h-1">Payment method</h3>
        <div class="h-fit w-full  box-border p-2 grid grid-cols-4 gap-2">

            <button id="py_nagad" onclick="CheckPym('py_nagad')"
                class="h-[50px] bg-transparent px2border rounded-md">Nagad</button>
            <button id="py_bKash" onclick="CheckPym('py_bKash')"
                class="h-[50px] bg-transparent px2border rounded-md">bKash</button>
            <button id="py_upay" onclick="CheckPym('py_upay')"
                class="h-[50px] bg-transparent px2border rounded-md">Upay</button>
            <button id="py_rocket" onclick="CheckPym('py_rocket')"
                class="h-[50px] bg-transparent px2border rounded-md">Rocket</button>

        </div>
    </div>
                    <!-- diposit Ammount section  -->
                    <div class="h-[140px] w-full bg-yellow-800 mt-5 rounded-md box-border p-3">
                        <h3 class="mt-0 h-1">Ammount</h3>
                        <div class="h-fit w-full  box-border p-2 grid grid-cols-4 gap-2 mt-0">

                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">100</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">200</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">500</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">1000</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">2000</button>
                            <button onclick="ammountSelected()"
                                class="h-[40px] bg-transparent px2border rounded-md">5000</button>
                        </div>
                    </div>
                    <!-- diposit input section  -->
                    <div class="h-[50px] w-full bg-purple-500 mt-5 rounded-md">
                        <input type="text" id="diposit_input"
                            class="h-[50px] w-full border-none bg-slate-100 rounded-md box-border px-5 py-px text-end">
                    </div>

                    <!-- diposit submit button  -->
                    <button id="diposit_submitBtn"
                        class="w-[80%] h-12 bg-blue-300 rounded-lg border-none mt-5 mx-[10%]">Submit</button>

    </div>
            <!-- Withdrawl section end  -->
            </div>
</div>
            <!-- funds  selection section  -->
        </div>
    </div>
    `
    setTimeout(()=>{
        document.getElementById("diposit-page").style.top = "0"
        },1)
        fund_switch('Diposit-sel_btn')
   }
    
//    promotion section 

   else if(x == 'promotion'){
    document.body.innerHTML += `
    <div id='promotion-page' class="absolute top-[100vh] left-0 md:z-30 h-screen w-full duration-500 flex items-center justify-center bg-[#50727B]">
   <div class="relative h-screen w-full flex items-center justify-center">

    <button class="absolute right-0 top-0 h-10 w-10 ]" onclick="removePage('promotion-page')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          
    </button>

       <h2>No Promotin</h2>
   </div>
    
    
</div>
    
    `
    setTimeout(()=>{
        document.getElementById("promotion-page").style.top = "0"
        },1)

   }

   else if(x == 'home'){
   
   }
}
