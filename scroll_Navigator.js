console.log("It's working");
/*const terms=document.querySelector(".terms_condition")
console.log(terms);

terms.addEventListener("scroll",(e)=>{
  console.log(e);
}) to solve this kind of null problem we wrap  it in a function  ;*/

/*function scrollToEvent(){
    const terms=document.querySelector(".terms_condition");
    console.log(terms);
    if(!terms){
     return;
    }

    terms.addEventListener('scroll',function(e){
        console.log(e.currentTarget.scrollTop);
      })
    
}
//scrollToEvent()

function scrollToAccept() {
    const terms = document.querySelector('.demp');
    
    if(!terms) {
      return; //quit this there isn't that item on tha page
    } 
    terms.addEventListener('scroll', function(e) {
      
      console.log(e.currentTarget.scrollTop);
      console.log(e.currentTarget.scrollHeight);
    })
  
  }
  scrollToAccept();*/
/**Intersection Observer a cool concept for scroll task  not that intersection is an API*/
  //Get me the watch value in the strong tag 
const watch = document.querySelector(".watch");
const terms = document.querySelector('.demp');
const button = document.querySelector('.accept');
    
//Wes bos is no serius this thing is called an Object constrructor 
 //const ob = new IntersectionObserver();

 
 const ob = new IntersectionObserver(obCallBack,{
root:terms,//tell us the body of what we are scrolling
threshold:1,//it can be[0,0.5,1]
 });//passing the function as an argument
 //The above is a intersection observer which responsible to watch
//ob.observe(watch)//something will happen now it observe the watch class on strong tag and inter..obser..entity is log on the console
ob.observe(terms.lastElementChild);
// the object constructor is going to take a call back function on the run
function obCallBack(payload){
  console.log(payload[0].intersectionRatio) //0 means not visible 1 means visibility 0.068402 means partially visible we can make use of this which tell us we have scroll all to the bottom
  // console.log(payload[0].isIntersecting)It tell us whether the scroll function target the strong element
 //writing a if statement to check the button
 if(payload[0].intersectionRatio===1){
   button.disabled=false;
  
 }
  
   //ob.unobserve(terms.lastElementChild);//if you don't want that else cases you can use this method
 
 else{
  button.disabled=true;
 }
}


//*Pop click modal

const allowable=document.querySelector(".overall");
const targetName=document.querySelector(".targets_simple");
console.log(allowable);
const checker = document.querySelector("p[disabled]");
/*checker.forEach(function open(checks){
  return checks;
})*/

//console.log(great);
const observer = new  IntersectionObserver(callbacks,{
  root:terms,
  threshold:1,

});
function callbacks(payee){
  console.log(payee[0].intersectionRatio);
if(payee[0].intersectionRatio===1){
    allowable.classList.add("open");
   
}
} 
observer.observe(checker);
//Create the document element outside the intersectionobserver object constructor
const img = document.createElement("img");
const input=document.createElement("input");



img.src="https://www.pepsi.com/en-us/uploads/images/nitro/Nitro_Logo@3x.png";
img.insertAdjacentElement("afterend",button);
img.classList.add(".unbelieve");
targetName.insertAdjacentElement("beforeend",img);

allowable.addEventListener("click",function(e){
  
  const decision =!(e.target.closest(".targets_simple"));//I don't the middle pepsi image to cancel whenever there is advertisement pop up
  console.log(decision);

  if(decision){
    closeModal();
  }
})

function closeModal(){
  allowable.classList.remove("open");
}

const closeButton=document.querySelector(".closebtn");

closeButton.addEventListener("click",function(e){
    const Jesusdrive=(e.target.closest(".closebtn"))
   if(Jesusdrive){
     closeModal();
   }
})
//i want the web system to be interactive as far it concerns 
window.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
    closeModal();
  }
})
