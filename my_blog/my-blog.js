let active = localStorage.getItem("login");
active = JSON.parse(active);
if (active !== null) {
  let btn = document.querySelector(".button");

  btn.addEventListener("click", () => {
    window.location.replace("../write_blog/write.html");
  });

  let users = localStorage.getItem("users");
  let blogs = localStorage.getItem("blogs");
  let blogList = document.querySelector("#whole");
  blogs = JSON.parse(blogs);
  users = JSON.parse(users);

  let index = localStorage.getItem("login");
  index = JSON.parse(index);
  let author_1 = users.map((value) => {
    return value.fullName;
  });
  let author_2 = author_1[index];
  if(blogs!==null)
  {
  let list = blogs.map((value) => {
    if (String(author_2) === String(value.author)) {
      return `
    <section class="img-preview">
            
            
  <section class="blog-area">
      <h2 class="title">${value.title}</h2>
          <p class="des">${value.description}</p>
          
  <button class="del">Delete</button>
          
  </section>
  <section>
      <img class="image" src="${value.url}" alt="">
  </section>
</section>
    `;
    } else {
      return -1;
    }
  });

  blogList.innerHTML = list.join("");
}
  let feed = document.querySelector(".feed");

  feed.addEventListener("click", () => {
    window.location.replace("../my_feed/my_feed.html");
  });
  let contact=document.querySelector(".contact")
  contact.addEventListener("click",()=>
  {
    window.location.replace("../contact_us/contactus.html")
  })
  let myblog=document.querySelector(".about")
myblog.addEventListener("click",()=>
{
  window.location.replace("../about_us/aboutus.html")


})

} else {
  window.location.replace("../login/login.html");
}
