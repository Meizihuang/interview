# 前端总结

---

## HTML 篇

---

- XHTML 和 HTML 区别

  1.  XHTML 是更严格更纯净 HTML 代码。
  2.  XHTML 元素必须被正确地嵌套。
  3.  标签名必须用小写字母。
  4.  XHTML 元素必须被关闭。
  5.  XHTML 文档必须拥有根元素。

- Doctype 的作用？标准模式和兼容模式有什么区别

  1.  <!DOCTYPE html> 声明位于HTML文档第一行，告知浏览器按何种标准解析该文档。不写或者格式不正确文档将会以建融模式呈现。
  2.  标准模式：排版和 JS 将会按照浏览器当前最高标准运行。兼容模式：浏览器以向后的兼容模式显示，模拟老版浏览器行为。

- 行内元素有哪些？块级元素有哪些？行内块元素有哪些？行内元素和块级元素有什么区别？空元素有哪些？

  前提: CSS 规范规定，每个元素都有 display 属性，确定该元素类型。块级元素 display 属性为“block”, 行内元素 display 属性为“inline”,行内块元素 display 属性为“inline-block”。

  1.  块级元素： div ul ol li p h1 h2...

      - 独占一行，宽度默认填满父级元素的宽度。
      - 能够设置 width、height 属性。
      - 可以设置 padding、margin 的属性值，top、left、bottom、right 都产生边距效应。

  2.  行内元素： span a select img input strong b i，行内元素分为 replaced 和 non-replaced 两类,而像 input,textarea,img 等可以设置宽高的行内元素,称为 replaced 元素,而那些不能设置宽高的元素被称为 non-replaced 元素,例如 span

      - 不会独占一行, 不能设置 width、height 属性值，宽高由内容撑开。
      - 可以使用 padding 上下左右都有效果，但是 margin 只有 left 和 right 有效果，top 和 bottom 都不产生效果。

  3.  常见空元素：<br/> <input/> <img/> <hr/> <meta/> <link/>

  4.  行内块元素： img input

      - 结合了 block 和 inline 的特点，即：不会独占一行, 能够设置 width、height 属性,可以设置 padding、margin 的属性值

  5.  inline-block 布局 vs float 布局

      - 不同之处：inline-block 不会脱离文本流，而 float 回脱离文本流且父元素会高度坍塌。
      - inline-blick 布局元素之间会因为回车符产生空白符而出现 4px 的间隙。
      - float 布局元素换行时会因为前面的元素高度不同出现参差不齐的情况，而 inline-blick 不会。
      - 去除 inline-blick 元素之间间隙的方法，在父元素上添加{font-size： 0}，即字体大小设置为 0。
      - inline-block 在 ie6/ie7 浏览器下的兼容性：对于行内元素直接使用{dislplay:inline-block;}，对于块级元素：需添加{display:inline;zoom:1;}
      - 对于横向排列东西来说，我更倾向与使用 inline-block 来布局，因为这样清晰，也不用再像浮动那样清除浮动，害怕布局混乱等等,对于浮动布局就用于需要文字环绕的时候，毕竟这才是浮动真正的用武之地，水平排列的是就交给 inline-block 了。

- css 样式导入时，link 和@import 的区别？

  1.  link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS，定义 rel 链接属性等作用。

  2.  页面加载时，link 会被同时加载，而@import 引用的 css 需要等到页面加载完毕才会被加载。

  3.  @import 有兼容问题，IE5 以上才能被识别，而 link 标签没有兼容问题。

  4.  link 支持使用 js 控制 DOM 去改变样式，而@import 不支持。

- 浏览器内核的理解

  1.  浏览器内核主要分成两部分：渲染引擎和 js 引擎。渲染引擎主要负责取得网页 html、css、图像等信息，计算网页的显示方式，然后输出到显示器等。浏览器内核不同对于网页的语法解释也会不同，所以渲染效果也会不同。所以显示网络内容的应用程序都需要内核。Js 引擎主要解析和执行 js 语句，实现网页交互。

  2.  最开始渲染引擎和 js 引擎没有明确区别，后来 js 引擎独立，内核就倾向于指渲染引擎。

- 常见的浏览器内核

  1.  Trident 内核： IE、360、搜狗等浏览器

  2.  Gecko 内核：Netspace6 及以上版本，FireFox 等浏览器

  3.  Presto 内核：Opera7 及以上，现为 Blink 内核

  4.  Webkit 内核： Safari、Chrome 等，Chrome 现在的 Blink 内核为 webkit 的分支。

- Html5 有哪些新特性、如何处理 Html5 新标签的兼容问题、如何区分 Html 和 Html5？

  - 新增特性

    1. 新增绘画 canvas、视频 video、音频 audio 标签
    2. 本地离线存储 loaclStorage 长期存储数据，浏览器关闭数据不会丢失。sessionStoragee 的数据在浏览器关闭后会自动删除
    3. 语义化标签：header、footer、nav、section、article、aside
    4. 表单控件属性：date、time、url、search、email、calendar
    5. 新的技术：webworker, websocket, Geolocation

  - 兼容

    1.  IE6/7/8 可以通过 documet.createElement 创建新标签，使用该特性让这些浏览器支持，需要添加默认样式。
    2.  使用框架 html5shim
        `<!--[if lt IE 9]> <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"> </script> <![endif]--> `

  - 区分

    1.  在文档声明上，baihtml 有很长的一段代码，并且很难 du 记住这段代码，都是 zhi 靠工具直接生 dao 成，而 html5 却是不同，只有简简单单的声明，也方便人们的记忆，更加精简。

- Html 语义化的优点

  1.  结构清晰，便于理解，代码更简洁
  2.  移动设备支持度更好
  3.  便于浏览器、搜索引擎解析，可根据标签语义确定上下文和权重。
  4.  代码可读性好，便于维护。
  5.  缺失 css 样式时也能让页面呈现清晰的结构。

- 描述 cookies、sessionStorage、localStorage 的区别

  1.  cookie 是网站标识用户身份而存储在本地的客户端的加密数据，会在同源的 http 请求中自动携带，即会自动在客户端和服务器端来回传递。
  2.  sessionStorage 和 localStorage 仅仅存储在本地不会发送给服务器。
  3.  cookie 大小不能超过 4k，sessionStorage 和 localStorage 大小可以达到 5M。
  4.  localStorage 浏览器关闭后数据不丢失除非主动删除数据；sessionStorage 数据在当前浏览器窗口关闭后自动删除；cookie 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

- iframe 有哪些缺点

  1.  iframe 会阻塞主页面的 Onload 事件
  2.  搜索引擎的检索程序无法解读这种页面，不利于 SEO
  3.  iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载

- label 的作用是什么，怎么使用

  1.  作用： 用来定义与表单控件的关系，当点击 label 时，会自动聚焦到与之关联的表单控件。
  2.  使用： `<label for="Name">Number:</label><input type=“text“name="Name" id="Name"/> <label>Date:<input type="text" name="B"/></label>`

- Html5 的 form 如何关闭自动完成功能？

  1.  给不想要提示的 form 或者 input 标签设置 autocomplete=off 属性

- 如何实现浏览器内多个标签页之间的通信?

  1.  WebSocket、SharedWorker
  2.  调用 localstorge、cookies 等本地存储方式
  3.  localstorge 另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信；

- 页面可见性可以有哪些用途

  1.  通过 visibilityState 值可以检测当前页面是否可见，以及打开网页的时间等，在切换页面时，自动暂停视频、音频播放。

  ```javascript
  document.addEventListener("visibilitychange", function () {
    console.log(document.visibilityState);
    // Modify behavior...
  });
  ```

- 如何在页面上实现一个圆形可点击区域。

  1.  svg 图
  2.  border-radius
  3.  使用 js 判断点击位置在不在圆上。

- 网页验证码是干嘛的，是为解决什么安全问题。

  1.  用于区分是计算机还是人在操作。可以防止恶意破解密码、刷票等，有效防止黑客对某一特定注册用户使用程序暴力方式不断尝试登录。

- title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别

  1.  title 是标签属性，规定元素的额外信息，鼠标移动到元素上显示一段文本，h1 是一个元素标签。
  2.  strong 是明确重点内容，读重音加强语气，b 是强调展示内容。
  3.  i 内容展示为斜体，em 表示强调文本信息。
  4.  b、i 为自然标签，strong、em 为语义化标签。

## CSS 篇

---

- 浏览器标准模式和怪异模式的区别

  - 由来介绍

    1. 从 IE6 开始，引入了 Standards 模式，在 IE6 之前 CSS 还不够成熟，所以 IE5 等之前的浏览器对 CSS 的支持很差， IE6 将对 CSS 提供更好的支持，然而这时的问题就来了，因为有很多页面是基于旧的布局方式写的，而如果 IE6 支持 CSS 则将令这些页面显示不正常，如何在即保证不破坏现有页面，又提供新的渲染机制呢？IE6 将 DTD（文档类型定义）作为区分是否使用旧功能的参数，（DTD 是为英文\*Document Type Definition，中文意思为“文档类定义”）。如果写了 DTD，就意味着这个页面将采用对 CSS 支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是 Quirks 模式（怪癖模式，诡异模式，怪异模式）。

  - 区别

    1. 元素宽度

    - 标准模式中：元素宽度 = content。
    - 怪异模式中：元素宽度 = content+padding+border

    2. 行内元素的宽高设置：

    - 标准模式下，给 span 等行内元素设置 width 和 height 都不会生效。
    - 怪异模式下，则会生效

    3. 百分比高度设置

    - 标准模式：元素高度由内容决定，如果父元素没有设置高度，子元素设置一个百分比的高度则无效。
    - 怪异模式：百分比高度被正确应用。

    4. margin: 0 auto 设置水平居中

    - 标准模式： 可以实现水平居中
    - 怪异模式：会失效
    - 怪异模式解决办法使用 text-align 属性。`body{text-align:center};#content{text-align:left}`

    5. 怪异模式下设置图片 padding 会失效；Table 元素中字体属性不能继承上层设置；white-space：pre 会失效

    6. 对于 inline 元素和 table-cell 元素：标准模式下 vertical-align 属性默认取值为 baseline，因此在图片底部会有及像素的空间；在怪异模式下，table 单元格中的图片的 vertical-align 属性默认取值为 bottom，不会出现底部留白。

    7. 元素溢出处理：标准模式下，overflow 取默认值 visible，在怪异模式下，该溢出会被当做扩展 box 来对待，即元素的大小由其内容决定，溢出不会裁减，元素框自动调整，包含溢出内容。

- 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

  `<div style="height:1px;overflow:hidden;background:red"></div>`

- CSS 选择器有哪些？哪些属性可以继承？

  1.  id 选择器（#id）
  2.  类选择器（.class）
  3.  标签选择器（div p h1）
  4.  相邻选择器（h1 + p、.a ~ div）
  5.  子代选择器（ul > li）
  6.  后代选择器（li a）
  7.  通配符选择器（\*）
  8.  属性选择器（a[ref="external"]）
  9.  伪类选择器（a:hover,li:nth-child）

  - 可继承样式： font-size、font-family、color
  - 不可继承样式： border、height、width、padding、margin

## Javascript 篇

---

## NodeJs 篇

---

## Webpack 篇

---

## 性能优化 篇

---

```

```
