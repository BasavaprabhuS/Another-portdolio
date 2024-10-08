//navbar code

let navh1=document.querySelector(".nav-h1");
let body=document.querySelector("body");
let navOptions=document.querySelector(".nav-options");
let navBtn=document.querySelector(".nav-btn");


navh1.addEventListener("click", function(){
    body.style.backgroundColor="Black";
    navh1.style.display="none";
    navOptions.style.display="none";
    navBtn.style.display="none";
    body.innerHTML="<h1>PORTFOLIO</h1>";
    body.style.color="teal";
    body.style.display="flex";
    body.style.justifyContent="center";
    body.style.alignItems="center";
    body.style.fontSize="100px";
})

//herosection code
let herosectionRightImage=document.querySelector(".herosection-right-image");
let temp=herosectionRightImage.getElementsByTagName("img");
let mode=0;
let x= document.getElementById("demo");

temp[0].addEventListener("click",function(){
    if(mode==0){
        temp[0].src="IMG_20240920_110759.jpg";
        mode=1;
    }
    else{
        temp[0].src="file.png";
        mode=0;
    }
})



let aboutRightSkillsContainer=document.querySelector(".about-right-skills-container");
let aboutRightExperienceContainer=document.querySelector(".about-right-experience-container");

let aboutRightSkillsList=document.querySelector(".about-right-skills-list");

let span_right=aboutRightExperienceContainer.getElementsByTagName("span");
let span_left=aboutRightSkillsContainer.getElementsByTagName("span");

let aboutRightEducationList=document.querySelector(".about-right-education-list");
span_right[0].addEventListener("mouseover", function(){
    aboutRightSkillsList.style.display="none";
    aboutRightEducationList.style.display="block";
    span_left[0].style.borderBottom="none";
    span_left[0].style.color="black"
})
span_right[0].addEventListener("mouseleave", function(){
    aboutRightSkillsList.style.display="block";
    aboutRightEducationList.style.display="none";
    span_left[0].style.borderBottom=" 4px solid black";
    span_left[0].style.color="teal";
})


//services part
let serviceBox1=document.querySelector(".services-box-1");
let serviceBox2=document.querySelector(".services-box-2");
let serviceBox3=document.querySelector(".services-box-3");
let learn=document.querySelectorAll(".learn");

serviceBox1.addEventListener("mouseover",function(){
    serviceBox1.style.backgroundColor="teal";
    serviceBox1.style.color="black";
});
serviceBox1.addEventListener("mouseleave",function(){
    serviceBox1.style.backgroundColor="black";
    serviceBox1.style.color="teal";
});
learn[0].addEventListener("click",function(){
    alert("Coming soon...")
});
learn[1].addEventListener("click",function(){
    alert("Coming soon...")
});
learn[2].addEventListener("click",function(){
    alert("Coming soon...")
});
serviceBox2.addEventListener("mouseover",function(){
    serviceBox2.style.backgroundColor="teal";
    serviceBox2.style.color="black";
});
serviceBox2.addEventListener("mouseleave",function(){
    serviceBox2.style.backgroundColor="black";
    serviceBox2.style.color="teal";
});
serviceBox3.addEventListener("mouseover",function(){
    serviceBox3.style.backgroundColor="teal";
    serviceBox3.style.color="black";
});
serviceBox3.addEventListener("mouseleave",function(){
    serviceBox3.style.backgroundColor="black";
    serviceBox3.style.color="teal";
});

document.querySelectorAll('a[href="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelectorAll(this.getAttribute('href')).scrollIntoView({
            behaviour:"smooth"
        })
    })
})