const tg = window.Telegram.WebApp;
tg.expand();

fetch("https://balkanmma.blogspot.com/feeds/posts/default?alt=json")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.feed.entry.slice(0, 10).forEach(post => {
      html += `
        <p>
          🔹 <a href="${post.link[4].href}" target="_blank">
            ${post.title.$t}
          </a>
        </p>
      `;
    });
    document.getElementById("posts").innerHTML = html;
  });
