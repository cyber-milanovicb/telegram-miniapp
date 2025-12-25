const tg = window.Telegram.WebApp;
tg.expand();

fetch("https://balkanmma.blogspot.com/feeds/posts/default?alt=json")
  .then(res => res.json())
  .then(data => {
    const posts = data.feed.entry;
    let html = "";
    posts.slice(0,5).forEach(p => {
      html += `<p><a href="${p.link[4].href}">${p.title.$t}</a></p>`;
    });
    document.getElementById("posts").innerHTML = html;
  });
