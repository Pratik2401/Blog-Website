//my blog page
let myblog=document.querySelector(".my-blog")
myblog.addEventListener("click",()=>
{
  window.location.replace("../my_blog/my-blog.html")
})

//feed

let myfeed=document.querySelector(".feed")
myfeed.addEventListener("click",()=>
{
  window.location.replace("../my_feed/my_feed.html")
})

//contact
let contact=document.querySelector(".contact")
contact.addEventListener("click",()=>
{
  window.location.replace("../contact_us/contactus.html")
})

//write
let write=document.querySelector(".button")
write.addEventListener("click",()=>
{
  window.location.replace("../write_blog/write.html")
})

//user name in heading
let users=localStorage.getItem("users")
let log=localStorage.getItem("login")
users=JSON.parse(users)
log=JSON.parse(log)

let user_name=users.map((value)=>
{ 
  return value.fullName
})
let user=document.querySelector(".user_name")
console.log(user_name)
user.innerHTML="Welcome,"+user_name