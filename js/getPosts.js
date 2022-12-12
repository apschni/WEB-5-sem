const postsLoader = document.querySelector(".posts-loader");
const posts = document.querySelector(".posts-list");
const error = document.querySelector(".fetch-error");
const pagination = document.querySelector(".posts-pagination");


window.addEventListener("load", async () => {
  postsLoader.style.display = "block";
  posts.style.display = "none";
  error.style.display = "none";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    data.slice(0, 10).forEach(post => {
      posts.insertAdjacentHTML("afterbegin",
        `<div class="posts-list__item">
            <p>Title - ${post.title}</p>
            <p>Text - ${post.body}</p>
        </div>`);
    });
    document.querySelector('.current-page').innerHTML = 'Текущая страница = ' + 1;

    new Array(data.length / 10).fill(0).map((val, index) => index + 1).forEach(page => {
      pagination.insertAdjacentHTML("afterbegin", `<div class='posts-pagination__number'>${page}</div>`);
    });

    posts.style.display = "flex";

    document.querySelectorAll('.posts-pagination__number').forEach((page, index) => {
      page.addEventListener('click', (e) => {
        posts.innerHTML = '';
        data.slice(index * 10, (index + 1) * 10).forEach(post => {
          posts.insertAdjacentHTML("afterbegin",
            `<div class="posts-list__item">
            <p>Title - ${post.title}</p>
            <p>Text - ${post.body}</p>
        </div>`);

        });
        document.querySelector('.current-page').innerHTML = 'Текущая страница = ' + (10 - index);
      });
    });
  }
  catch (e) {
    console.log(e);
    posts.style.display = "none";
    error.style.display = "block";
  }
  finally {
    postsLoader.style.display = "none";
  }

});