let active = localStorage.getItem("login");
active = JSON.parse(active);
if (active !== null) {

    //user name in heading
let users_1=localStorage.getItem("users")
let log=localStorage.getItem("login")
users_1=JSON.parse(users_1)
log=JSON.parse(log)

let user_name=users_1.map((value)=>
{ 
  return value.fullName
})
let user=document.querySelector(".user_name")
console.log(user_name)
user.innerHTML="Welcome,"+user_name


let btn=document.querySelector(".button")

btn.addEventListener('click',()=>
{
    window.location.replace("../write_blog/write.html")
})


let users=localStorage.getItem("users");
let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#whole");
blogs = JSON.parse(blogs);
users=JSON.parse(users)
    if(blogs!==null)
    {
    let list = blogs.map((value) => {
        
    return `
    <section class="img-preview">
                
                
    <section class="blog-area">
        <h2 class="title">${value.title}</h2>
            <p class="des">${value.description}</p>
            <p class="author"> ${value.author}</p>
    </section>
    <section>
        <img class="image" src="${value.url}" alt="">
    </section>
    </section>
        `;
    });

blogList.innerHTML = list.join("");
console.log(blogs);
    }
let myblog=document.querySelector(".my-blog")
  myblog.addEventListener("click",()=>
  {
    window.location.replace("../my_blog/my-blog.html")
  })
  let contact=document.querySelector(".contact")
  contact.addEventListener("click",()=>
  {
    window.location.replace("../contact_us/contactus.html")
  })
  let about=document.querySelector(".about")
  about.addEventListener("click",()=>
  {
    window.location.replace("../about_us/aboutus.html")
  })
}
else
{
  window.location.replace("../index.html");
}