# samim-font
A Persian (Farsi) Font

فونت (قلم) فارسی صمیم

[نمایش فونت](http://rastikerdar.github.io/samim-font/)

با تشکر از برنامه [FontForge](https://fontforge.github.io)

بر مبنای فونت [وزیر](http://rastikerdar.github.io/vazir-font/)


طریقه استفاده در صفحات وب:
--------------------------
<div lang="fa" dir="rtl">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</div>


```
    @font-face {
      font-family: Samim;
      src: url('Samim.eot');
      src: url('Samim.eot?#iefix') format('embedded-opentype'),
           url('Samim.woff') format('woff'),
           url('Samim.ttf') format('truetype');
      font-weight: normal;
    }
      
    @font-face {
      font-family: Samim;
      src: url('Samim-Bold.eot');
      src: url('Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('Samim-Bold.woff') format('woff'),
           url('Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }
    
    body {
        /* optional enhancements for better rendering */
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
```

