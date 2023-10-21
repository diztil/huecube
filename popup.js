document.getElementById('openYouTube').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.url.includes('youtube.com/watch')) {
      const videoId = activeTab.url.match(/[?&]v=([^&]+)/)[1];
      if (videoId) {
        const newTabHtml = `
          <html>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
  /* YouTube Audio Embed, Author: Amit Agarwal, Web: http://www.labnol.org/?p=26740 */
  function onYouTubeIframeAPIReady() {
    var e = document.getElementById("youtube-audio"), t = document.createElement("img");
    t.setAttribute("id", "youtube-icon"), t.style.cssText = "cursor:pointer;cursor:hand", e.appendChild(t);
    var a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var o = function(e) {
      var a = e ? "wev.ovh.png" : "wev.ovh.png";
      t.setAttribute("src", "/assets/" + a)
    };
    e.onclick = function() { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) };
    var r = new YT.Player("youtube-player", { height: "720px", width: "90%", videoId:e.dataset.video, playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop }, events: { onReady: function(e) { r.setPlaybackQuality("small"), o(r.getPlayerState() !== YT.PlayerState.CUED) }, onStateChange: function(e) { e.data === YT.PlayerState.ENDED && o(!1) } } })
  };
</script>
<body onload="onYouTubeIframeAPIReady()">
  <div data-video="${videoId}" data-autoplay="1" data-loop="1" id="youtube-audio">
</body>
</div>
</html>
        `;

        chrome.tabs.create({ url: 'data:text/html,' + encodeURIComponent(newTabHtml) });
      }
    }
  });
});