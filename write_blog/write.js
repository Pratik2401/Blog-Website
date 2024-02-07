let btn = document.querySelector("#my-feed");

btn.addEventListener("click", () => {
  window.location.replace("/my_feed/my_feed.html");
});

let userDetails = null;

let title = document.querySelector("#title_1");
let description = document.querySelector("#des");
let url = document.querySelector("#url");
let save = document.querySelector("#save");

let logout = document.querySelector(".button");

let users = localStorage.getItem("users");
users = JSON.parse(users);

let active = localStorage.getItem("login");
active = JSON.parse(active);
if (active !== null) {
  logout.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to LogOut",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logOut!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        window.location.replace("../index.html");
      }
    });
  });
  let index = localStorage.getItem("login");
  index = JSON.parse(index);
  let author_1 = users.map((value) => {
    return value.fullName;
  });
  let author = author_1[index];
  save.addEventListener("click", () => {
    
  let unique_id=Date.now()
    let newBlog = {
      title: title.value,
      description: description.value,
      url: url.value,
      author: author,
      u_id:unique_id
    };
    let blogs = localStorage.getItem("blogs");
    blogs = blogs === null ? [] : JSON.parse(blogs);
    blogs.unshift(newBlog);

    //store data in localStorage
    localStorage.setItem("blogs", JSON.stringify(blogs)); //stringify to store array in local
    alert("Blog Saved Successfully");
  });

  let contact = document.querySelector("#contact");
  let about = document.querySelector("#about");

  console.log(contact);

  contact.addEventListener("click", () => {
    window.location.replace("../contact_us/contactus.html");
  });

  about.addEventListener("click", () => {
    window.location.replace("../about_us/aboutus.html");
  });
  let myblog=document.querySelector("#my-blog")
  myblog.addEventListener("click",()=>
  {
    window.location.replace("../my_blog/my-blog.html")
  })
} else {
  window.location.replace("../index.html");
}
