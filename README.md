# [Samim Font](http://rastikerdar.github.io/samim-font/)
A Persian (Farsi) Font &mdash; فونت (قلم) فارسی صمیم

<div lang="fa" dir="rtl" align="right">
    <h3><a href="http://rastikerdar.github.io/samim-font/">نمایش فونت</a></h3>
</div>
<p dir="rtl">
<a href="https://github.com/rastikerdar/samim-font/releases">صفحه دریافت (دانلود) بسته فونت شامل فایل های ttf,woff,eot</a> <br />
نسخه های بدون حروف لاتین یا تمام ارقام فارسی درون بسته فشرده موجود می‌باشد.
</p>

<a href="http://rastikerdar.github.io/samim-font/">
    <img src="https://cloud.githubusercontent.com/assets/3202/11185401/e3cf9f4e-8c7c-11e5-9617-9d74e30ee7e3.png">
</a>
<h2 lang="fa" dir="rtl" align="right">طریقه استفاده در صفحات وب</h2>

<p lang="fa" dir="rtl" align="right">
کد زیر را در قسمت style یا فایل css وارد نمایید:
</p>


```css
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
```


<div lang="fa" dir="rtl" align="right">
<p>با تشکر از برنامه‌های <a href="https://fontforge.github.io">FontForge</a> و <a href="https://www.freetype.org/ttfautohint/">ttfautohint</a></p>
<p>بر مبنای فونت <a href="http://rastikerdar.github.io/vazir-font/">وزیر</a></p>
</div>

## Install

Grab the [latest release](https://github.com/rastikerdar/samim-font/releases/latest) file.

Or you can get it on bower:

```
bower install samim-font --save
```

Or [RawGit](https://rawgit.com) CDN:

```html
<link href="https://cdn.rawgit.com/rastikerdar/samim-font/v[X.Y.Z]/dist/font-face.css" rel="stylesheet" type="text/css" />
```

Replace [X.Y.Z] with the latest version (e.g. 1.0.2) and integrate the font into your CSS:

```
font-family: 'Samim', sans-serif;
```


## Contributors

- Allen Bargi [@aziz] (https://github.com/aziz)
- Farzan Balkani [@artlesshand] (https://github.com/artlesshand)

## License
SIL Open Font License Version 1.1  
Copyright &copy; 2015, Saber Rastikerdar
