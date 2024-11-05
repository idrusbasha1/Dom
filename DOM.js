var a=document.getElementById("btn")
var b=document.getElementById("p")
a.onclick=function(){
    b.textContent="hello how are you"
}
a.style.borderRadius="15px"
a.style.padding="20px"
a.style.fontSize="30px"
a.style.backgroundColor="cyan"
b.style.backgroundColor="red"
b.style.fontSize="50px"
b.style.borderRadius="50%"
b.style.textAlign="center"
b.style.color="white"

var c=document.getElementById("btn1")
var d=document.getElementById("img1")
var e=document.getElementById("img2")
var f=document.getElementById("img3")

c.onclick=function(){
    d.innerHTML=`<img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" width="300" style="border-radius:30px"/>`
    e.innerHTML=`<img src="https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg" width="300" style="border-radius:100px"/>`
    f.innerHTML=`<img src="https://th.bing.com/th/id/OIG3.80EN2JPNx7kp5VqoB5kz" width="300" style="border-radius:50%"/>`
}
c.style.padding="20px"
c.style.fontSize="30px"
c.style.backgroundColor="magenta"
c.style.borderRadius="15px"

