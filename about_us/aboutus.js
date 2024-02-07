let myblog=document.querySelector(".my-blog")
myblog.addEventListener("click",()=>
{
  window.location.replace("../my_blog/my-blog.html")
})

let myfeed=document.querySelector(".feed")
myfeed.addEventListener("click",()=>
{
  window.location.replace("../my_feed/my_feed.html")
})

let contact=document.querySelector(".contact")
contact.addEventListener("click",()=>
{
  window.location.replace("../contact_us/contactus.html")
})

let write=document.querySelector(".button")
write.addEventListener("click",()=>
{
  window.location.replace("../write/write.html")
})