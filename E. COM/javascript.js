let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=> {
    ul.classList.toggle("showData");
    if(ul.className == "showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})

//navbar

let shop = document.getElementById("shop");
let review = document.getElementById("review");
let blog = document.getElementById("blog");
let contact = document.getElementById("contact");

shops.addEventListener("click",()=>{
    shops.style.color="rgb(0, 255, 255)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(0, 255, 255)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(0, 255, 255)";
    shops.style.color="white";
    reviews.style.color="white";
    contacts.style.color="white";
})

contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(0, 255, 255)";
    shops.style.color="white";
    blogs.style.color="white";
    reviews.style.color="white";
})

// card //

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage");
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");
let buybtn = document.getElementById("buybtn");
console.log(crd);


    crd.forEach(function(curvalue){
        curvalue.addEventListener("click", function(){
           itempage.style.display="flex";
           container.style.display="none";
           
           let imgsrc = curvalue.firstElementChild.src ;
           itemimg.src=imgsrc;

           
           let buytext =  document.querySelector(".buytext");
           buybtn.addEventListener("click", function(){
               document.querySelector(".buypage").style.display="block";
               buytext.innerHTML=`
               <h3>Enter Details :</h3>
               <input type="text" placeholder="Enter Your Name" id="name"> <br>
               <input type="text" placeholder="Enter Your Address" id="address"> <br>
               <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
               <h3>Payment Option :</h3>
               <select>
                   <option value="Google-Pay">Google-Pay</option>
                   <option value="Phone-Pay">Phone-Pay</option>
                   <option value="Bharat-Pay">Bharat-Pay</option>
                   <option value="Cash-on-Delivery">Cash-on-Delivery</option>
   
               </select> <br>
               
   
               `
               let button = document.createElement("button");
               button.innerText="Submit";
               buytext.appendChild(button);

               button.addEventListener("click", function(){
                let name = document.getElementById("name");

                if(name.value == "" && address.value =="" && num.value ==""){
                    alert("please enter detail")
                }else{
                    alert("your response recorded");
                    document.querySelector("buypage").style.display="nane";
                }
               })

               let cross = document.querySelector(".cross");
               cross.addEventListener("click", function(){
                document.querySelector(".buypage").style.display="none";
               })
            })

        })

    })
    // connect

    function connect(){
        let name = document.getElementById("name");
        let num =document.getElementById("number");
        if(name.value == ""  && num.value == ""){
            alert("fill detail")
        }else{
            alert("thanks for connecting")
        }
    }
    