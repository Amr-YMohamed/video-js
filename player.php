
<head>
  <link href="./node_modules/video.js/dist/video-js.css" rel="stylesheet" />
  <link href="./style.css" rel="stylesheet" />
  <script src="./node_modules/video.js/dist/video.js"></script>


  <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
</head>

<body>
  <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="../projectX/vid/video.mp4" type="video/mp4" />
    <source src="../projectX/vid/video.webm" type="video/webm" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
  
  <script src="./test.js"></script>

</body>