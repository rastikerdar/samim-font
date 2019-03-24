# [Samim Font](http://rastikerdar.github.io/samim-font/)
A Persian (Farsi) Font &mdash; فونت (قلم) فارسی صمیم

[![npm version](https://badge.fury.io/js/samim-font.svg)](https://badge.fury.io/js/samim-font)

فونت فارسی صمیم  
[نمایش فونت - صفحه رسمی پروژه](https://rastikerdar.github.io/samim-font)  
[صفحه دریافت (دانلود) بسته فونت شامل فایل های ttf,woff,eot](https://github.com/rastikerdar/samim-font/releases)  
با تشکر از برنامه [FontForge](https://fontforge.github.io)  
بر مبنای فونت [وزیر](https://rastikerdar.github.io/vazir-font)  
نسخه‌های بدون حروف لاتین یا تمام ارقام فارسی درون بسته فشرده موجود می‌باشد.  
فرآیند تولید بسته نهایی شامل انواع نسخه‌ها و فرمت‌ها توسط ابزار [fontbuilder](https://github.com/rastikerdar/fontbuilder) انجام می‌شود.

## نمونه متن Sample:
![نمونه متن فونت صمیم](./sample.png)

## طریقه استفاده در صفحات وب:

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

## Install

Grab the [latest release](https://github.com/rastikerdar/samim-font/releases/latest) file.

#### bower

```shell
bower install samim-font --save
```

#### npm

```shell
npm install samim-font
```

#### [RawGit](https://rawgit.com) CDN

```html
<link href="https://cdn.rawgit.com/rastikerdar/samim-font/v[X.Y.Z]/dist/font-face.css" rel="stylesheet" type="text/css" />
```

Replace [X.Y.Z] with the latest version (e.g. 3.1.0) and integrate the font into your CSS:

```
font-family: 'Samim', sans-serif;
```

#### Arch Linux

Arch user's could use [samim-fonts](https://aur.archlinux.org/packages/samim-fonts/) package from [AUR](https://aur.archlinux.org/) repository to install samim font. Use your favourite [AUR helper](https://wiki.archlinux.org/index.php/AUR_helpers) like pacaur or yaourt for installing package:

```shell
pacaur -S samim-fonts
```

## Contributors

- Allen Bargi [@aziz] (https://github.com/aziz)
- Farzan Balkani [@artlesshand] (https://github.com/artlesshand)

## License
SIL Open Font License Version 1.1  
Copyright &copy; 2015, Saber Rastikerdar
