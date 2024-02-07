let myblog=document.querySelector(".my-blog")
myblog.addEventListener("click",()=>
{
  window.location.replace("../my_blog/my-blog.html")


})
let feed = document.querySelector(".feed");

feed.addEventListener("click", () => {
  window.location.replace("../my_feed/my_feed.html");
});
let about = document.querySelector(".about");

  about.addEventListener("click", () => {
    window.location.replace("../about_us/aboutus.html");
  });

let btn = document.querySelector(".button");

  btn.addEventListener("click", () => {
    window.location.replace("../write/write.html");
  });