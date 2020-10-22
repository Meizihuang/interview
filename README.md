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

  3.  常见空元素：`<br/> <input/> <img/> <hr/> <meta/> <link/>`

  4.  行内块元素： img input

      - 结合了 block 和 inline 的特点，即：不会独占一行, 能够设置 width、height 属性,可以设置 padding、margin 的属性值

  5.  inline-block 布局 vs float 布局

      - 不同之处：inline-block 不会脱离文本流，而 float 回脱离文本流且父元素会高度坍塌。
      - inline-blick 布局元素之间会因为回车符产生空白符而出现 4px 的间隙。
      - float 布局元素换行时会因为前面的元素高度不同出现参差不齐的情况，而 inline-blick 不会。
      - 去除 inline-blick 元素之间间隙的方法，在父元素上添加{font-size： 0}，即字体大小设置为 0。
      - inline-block 在 ie6/ie7 浏览器下的兼容性：对于行内元素直接使用{dislplay:inline-block;}，对于块级元素：需添加{display:inline-block;zoom:1;}
      - 对于横向排列东西来说，我更倾向与使用 inline-block 来布局，因为这样清晰，也不用再像浮动那样清除浮动，害怕布局混乱等等,对于浮动布局就用于需要文字环绕的时候，毕竟这才是浮动真正的用武之地，水平排列的是就交给 inline-block 了。

- css 样式导入时，link 和@import 的区别？

  1.  link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS，定义 rel 链接属性等作用。

  2.  页面加载时，link 会被同时加载，而@import 引用的 css 需要等到页面加载完毕才会被加载。

  3.  @import 有兼容问题，IE5 以上才能被识别，而 link 标签没有兼容问题。

  4.  link 支持使用 js 控制 DOM 去改变样式，而@import 不支持。

- 浏览器内核的理解

  1.  浏览器内核主要分成两部分：渲染引擎和 js 引擎。渲染引擎主要负责取得网页 html、css、图像等信息，计算网页的显示方式，然后输出到显示器等。浏览器内核不同对于网页的语法解释也会不同，所以渲染效果也会不同。所以显示网络内容的应用程序都需要内核。Js 引擎主要解析和执行 js 语句，实现网页交互。

  2.  最开始渲染引擎和 js 引擎没有明确区别，后来 js 引擎独立，内核就倾向于指渲染引擎。

- 常见的浏览器内核 Tri

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

- CSS 优先级如何计算？

  1.  优先级就近原则，同权重的情况下样式定义最近这为准；
  2.  载入样式以最后载入的为准；
  3.  优先级：
      - 同权重：内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）
      - ！important > 内联样式 > id > class > 标签 > 通配符 > 继承 > 默认

- CSS3 新增伪类有哪些？

  - :first-of-type 选择父元素下的第一个元素
  - :last-of-type 选择父元素下的最后一个元素
  - :nth-child(n) 选择父元素下的第 n 个元素
  - ::after 向元素之后添加内容，可以用来清除浮动
  - ::before 向元素之前添加内容
  - :disabled 控制表单控件的禁用状态
  - :checked 单选框或者复选框被选中

- 如何居中 div？

  - 水平居中：给 div 设置宽度，然后添加 margin: 0 auto

  ```css
  div {
    width: 200px;
    margin: 0 auto;
  }
  ```

  - 绝对定位的 div 居中

  ```css
  div {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 0;
    right: 0;
    top: 0;
    left: 0;
    margin: auto;
  }
  ```

  - 水平垂直居中一

  ```css
  div {
    /* 已知宽高 */
    position: absolute; /* 相对定位或者绝对定位都行 */
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
  }
  ```

  - 水平垂直居中二

  ```css
  div {
    /* 已知宽高 */
    position: absolute; /* 相对定位或者绝对定位都行 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ```

  -水平居中三

  ```css
  div .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

- transform 与 position 的恩怨情仇

  - transform 会提升元素的垂直地位

    1. 正常情况下两个相邻元素，后一个做 margin-left: -100px 会覆盖前一个元素，但是如果前一个元素使用了 transform 属性，则结果相反。

  - transform 限制 position: fixed 的跟随效果。

    1. 正常情况下元素设置 fixed 不会跟随滚动条滚动。但是如果父元素使用了 transform 属性会导致 fixed 失效变为跟随滚条滚动。（在 chrome 和 firefo 下）

  - transform 改变 overflow 对 absolute 元素的限制

    1.  正常情况下父元素使用 overflow: hidden 子元素使用 position: absolute , 如果子元素溢出，父元素的 overflow: hidden 是不能裁剪的。但是如果给父元素或者父子之间的嵌套一层使用 transform 则 overflow: hidden 将会起作用。

  - transform 限制 absolute 的 100%宽度大小

    1. 正常情况下设置了 absolute 的子元素的宽度 100%会根据第一个非 static 值得 position 祖先元素计算，没有就 window，但是如果容器设置了 transform 属性，则 100%宽度都是相对设置了 transform 得容器计算。

  - 补充说明
    1. 在 mac safari 浏览器下，使用 transform: translate3d(0,0,0) 可以避免文字在其他元素 transition 或 animation 时候，粗细渲染跟着变化的问题。

- display 有哪些值?

  - block 块元素
  - none 元素不显示，并从文档流中移除
  - inline 行内元素
  - inline-block 同行显示，可以设置宽高
  - table 此元素会作为块级表格显示
  - list-item 象块类型元素一样显示，并添加样式列表标记
  - inherit 规定应该从父元素继承 display 属性的值

- position 的值 relative absolute fixed 的定位参照

  - relative 生成相对定位元素，相对于其正常位置定位
  - absolute 生成绝对定位元素，相对第一个 position 值不为 static 的父元素定位
  - fixed 生成绝对定位，相对于浏览器窗口定位
  - static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）
  - inherit 规定从父元素继承 position 属性的值

- CSS3 有哪些新特性？

  - 新增了各种 CSS 选择器,如：

    | 选择器         |      事例       |                                          说明 |
    | -------------- | :-------------: | --------------------------------------------: |
    | :not()         |     :not(p)     |                     选择每个并非 p 元素的元素 |
    | :empty         |     p:empty     | 选择每个没有任何子级的 p 元素（包括文本节点） |
    | :disabled      | input:disabled  |                      选择每一个禁用的输入元素 |
    | :nth-child(n)  | p:nth-child(2)  |         选择每个 p 元素是其父级的第二个子元素 |
    | :first-of-type | p:first-of-type |        选择每个 p 元素是其父级的第一个 p 元素 |

  - 边框

    | 属性          |                   事例                    |          说明 |
    | ------------- | :---------------------------------------: | ------------: |
    | border-radius |            border-radius:25px;            |     CSS3 圆角 |
    | border-image  | border-image:url(border.png) 30 30 round; | CSS3 边界图片 |
    | box-shadow    |    box-shadow: 10px 10px 5px #888888;     |   CSS3 盒阴影 |

  - 背景

    - background-image: CSS3 中可以通过 background-image 属性添加背景图片。不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。
    - background-size: background-size 指定背景图像的大小
    - background-origin: background-origin 属性指定了背景图像的位置区域。
    - background-clip: CSS3 中 background-clip 背景剪裁属性是从指定位置开始绘制。

  - 文本效果

    | 属性        |                事例                |                             说明 |
    | ----------- | :--------------------------------: | -------------------------------: |
    | text-shadow | text-shadow: 5px 5px 5px #FF0000;  | text-shadow 属性适用于文本阴影。 |
    | box-shadow  | box-shadow: 10px 10px 5px #888888; |  box-shadow 属性适用于盒子阴影。 |

  - transform 转换

    | 属性        |                                                     说明                                                     |
    | ----------- | :----------------------------------------------------------------------------------------------------------: |
    | translate() |                translate()方法，根据左(X 轴)和顶部(Y 轴)位置给定的参数，从当前元素位置移动。                 |
    | rotate()    |              rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。              |
    | skew()      | 包含两个参数值，分别表示 X 轴和 Y 轴倾斜的角度，如果第二个参数为空，则默认为 0，参数为负表示向相反方向倾斜。 |
    | scale()     |                scale()方法，该元素增加或减少的大小，取决于宽度（X 轴）和高度（Y 轴）的参数：                 |

  - transition 过渡

    - 重要：实现过渡效果必须满足两个条件

      1. 指定要添加效果的 CSS 属性
      2. 指定效果的持续时间。

    | 属性                       |                     描述                     |
    | -------------------------- | :------------------------------------------: |
    | transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 |
    | transition-property        | 简写属性，用于在一个属性中设置四个过渡属性。 |
    | transition-duration        |      定义过渡效果花费的时间。默认是 0。      |
    | transition-timing-function |   规定过渡效果的时间曲线。默认是 "ease"。    |
    | transition-delay           |       规定过渡效果何时开始。默认是 0。       |

  - animation 动画

    - @keyframes 规则

      1. @keyframes 规则是创建动画。
      2. @keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式

    - 重要：当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。指定至少这两个 CSS3 的动画属性绑定向一个选择器。

      1. 规定动画的名称
      2. 规定动画的时长

    | 姓名                      |                                           技能                                           |
    | ------------------------- | :--------------------------------------------------------------------------------------: |
    | @keyframes                |                                        规定动画。                                        |
    | animation                 |                                 所有动画属性的简写属性。                                 |
    | animation-name            |                               规定 @keyframes 动画的名称。                               |
    | animation-duration        |                     规定动画完成一个周期所花费的秒或毫秒。默认是 0。                     |
    | animation-timing-function |                           规定动画的速度曲线。默认是 "ease"。                            |
    | animation-fill-mode       | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
    | animation-delay           |                               规定动画何时开始。默认是 0。                               |
    | animation-iteration-count |                             规定动画被播放的次数。默认是 1。                             |
    | animation-direction       |                   规定动画是否在下一周期逆向地播放。默认是 "normal"。                    |
    | animation-play-state      |                      规定动画是否正在运行或暂停。默认是 "running"。                      |

- 经常遇到的浏览器兼容性问题，原因，解决办法以及常用 hack 技巧

  - png24 位的图片在 IE6 浏览器不透明，解决方案改用 png8
  - 浏览器默认元素的 margin 和 padding 不同。解决方案是加一个全局的\*{margin:0;padding:0;}来统一
  - Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
  - 超链接访问过后 hover 样式就不出现了 被点击访问过的超链接样式不在具有 hover 和 active 了解决方法是改变 CSS 属性的排列顺序:L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}
  - 使用 meta 标签来调节浏览器的渲染方式，告诉浏览器用哪种内核渲染，360 双核浏览器就是在 ie 和 chrome 之间来回切换，现在使用 meta 标签来强制使用最新的内核渲染页面
    `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
  - rgba 不支持 IE8 解决：用 opacity
  - CSS3 前缀
    ```css
      -webkit- webkit渲染引擎
    ```

## Javascript 篇

---

- Javascript 介绍

  1. Javascript 是一种高级的、解释型编程语言。是一门基于原型、函数先行的语言，是一门多范式语言，支持面向对象程序设计，命令式编程，以及函数式编程。不支持 I/O,比如网络、存储合图形等，但这些都可以由它的宿主环境支持。它已经由 ECMA（欧洲电脑制造商协会）通过 ECMAScript 实现语言的标准化。

  2. 在客户端，JavaScript 在传统意义上被实现为一种解释语言，但在最近，它已经可以被即时编译（JIT）执行。随着最新的 HTML5 和 CSS3 语言标准的推行它还可用于游戏、桌面和移动应用程序的开发和在服务器端网络环境运行，如 Node.js。

  3. 一般来说，完整的 JavaScript 包括以下几个部分：

  - ECMAScript，描述了该语言的语法和基本对象
  - 文档对象模型（DOM），描述处理网页内容的方法和接口
  - 浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口

- Javascript 运行机制

  - 语言特性

    Javascript 是单线程，天生异步，适合 I/O 密集型，不适合 CPU 密集型。

  - 基础概念

    1. 进程&线程

    - 什么是进程

      CPU 是计算机核心，承担所有计算任务。进程是 CPU 资源分配的最小单位，即正在运行的程序，一个可以独立运行且拥有自己的资源空间的任务程序。
      进程包含运行中的程序和程序所使用的内存和系统资源。
      CPU 可以有很多进程，没打开一个软件就会产生一个或者多个进程，电脑运行软件多会卡，是因为 CPU 给每个进程分配独立的资源空间，但一个 CPU 一共就那么多资源,分出去的越多,就会越卡,每个进程之间是相互独立的,CPU 在运行一个进程的时候,其他进程出于非非运行状态,CPU 使用时间片轮转调度算法来实现同时运行多个进程.

    - 什么是线程

      线程是 CPU 调度的最小单位
      线程是建立在进程基础上的一次程序运行单位,一个线程就是程序中的一个执行流,一个进程可以有多个线程.
      一个进程只有一个执行流的称作单线程,即程序在执行时,所走的程序路劲按照连续顺序排下来,前面必须处理好,才会继续执行后面.前面未处理好,后面需要等待(即阻塞)
      一个进程有多个执行流称为多线程,即在一个程序中可以同时运行多个线程来执行不同的任务,也就是允许单个程序创建多个并行执行的线程来完成各自的任务.

    - 进程与线程的区别

      进程时操作系统分配资源的最小单位,线程是程序执行的最小单位
      一个进程可以由一个或者多个线程,线程可以理解为是一个进程中代码的不同执行路线
      进程时间相互独立,但同一进程下的线程可以共享程序的内存空间(包括代码段,数据集,堆内存等)以及一些进程级的资源(如打开文件和信号)

    - 多进程&多线程

      多进程：多进程指的是在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态(多处理器和多核以及 SMT 技术,单核同一时间只能运行一个)。多进程带来的好处是明显的，比如大家可以在网易云听歌的同时打开编辑器敲代码，编辑器和网易云的进程之间不会相互干扰.

      多线程：多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务

    2. 同步&异步

    一般操作分为两个步骤: 1. 发起调用; 2. 得到结果.

    同步: 发起调用后立马可以得到执行结果的是为同步

    异步: 发起调用后无法立即得到记过,需要额外操作才能得到结果的是为异步

  - 浏览器

    1. 简介

    浏览器的主要功能是向服务器发送请求以及在窗口中展示目标网络资源，Javascript 是作为浏览器的附属工具诞生的，最初主要是为了做浏览器端的简单校验。
    浏览器是多进程的，每打开一个 Tab 页面就会产生一个进程，打开页面越多占据 CPU 资源越多，也就越卡。

    2. 浏览器包含哪些进程

    - Browser 进程：浏览器的主进程，唯一。负责创建和销毁其他进程、网络资源下载与管理、浏览器界面的展示、前进后退等，将渲染进程得到的内存中 Bitmap（位图），绘制到用户界面。
    - GPU 进程：用于 3D 绘之，该进程也只有一个
    - 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建。
    - 渲染进程（浏览器内核）：内部是多线程的，每打开一个新的网页就会创建一个渲染进程，各渲染进程互不影响，主要用于页面渲染、脚本执行、事件处理等

    3. 渲染进程（浏览器内核）详解

    | 内核    |        Js 引擎        |                                                       浏览器 |
    | ------- | :-------------------: | -----------------------------------------------------------: |
    | Trident | JScript，chakra(ie9+) |                                                   IE4 - IE11 |
    | Gecko   |     SpiderMonkey      |                                                      Firefox |
    | Webkit  |    JavascriptCore     | Safari,Chromium,Chrome(-2013) ,Android 浏览器,ChromeOS,WebOS |
    | Blink   |          V8           |                                                Chrome, Opera |
    | Edge    |        Chakra         |                                                         Edge |

    国内浏览器都是多核，想要兼容国内银行系统切换到 Trident 内核，想要访问速度就切换到 Webkit 内核，Blink 发布后，就把 Webkit 切换成 Blink
    QQ 浏览器 Trident+Webkit (Blink)
    360 安全浏览器 Trident+Webkit (Blink)
    猎豹浏览器 Trident+Webkit (Blink)
    世界之窗 Trident+Webkit (Blink)
    搜狗高速浏览器 Trident+Webkit (Blink)
    UC 浏览器 Trident+Webkit (Blink)

    渲染进程是多线程的，主要包含以下一些主要线程

    - GUI 渲染线程（渲染引擎）

      - 负责渲染浏览器界面，解析 HTML、CSS，构建 DOM Tree 和 RenderObject Tree，布局和绘制等。

        - 解析 Html 代码（Html 代码本质是字符串）转化为浏览器认识的节点，生成 DOM 树。
        - 解析 css,生成 CSSOM（CSS 规则树）
        - 把 DOM Tree 和 CSSOM 结合，生成 Rendering Tree（渲染树）

      - 当我修改元素颜色，背景色，页面就会重绘（Repaint）。
      - 当修改元素尺寸，页面就会回流（Reflow）
      - 当页面需要需要 Repaing 和 Reflow 时，GUI 渲染线程执行，绘制页面
      - 回流比重绘的成本要高，要尽量避免 Reflow 和 Repaint
      - 通常所说的浏览器内核倾向于指渲染引擎，即侠义的浏览器内核，常见渲染引擎：
        - Webkit (safari、老版本的 Chrome)
        - Trident(IE)
        - Gecko(firefox)
        - Blink(新版本的 Chrome)
        - Edge （Edge）

    - JS 引擎线程

      - Javascript 是解释型语言，在代码运行之前不会进行编译工作，将源码转换成字节码等中间代码或者是机器码，而是在执行过程中实时编译，边编译边执行。
        因此需要一个功能模块来编译转换工作，JS 引擎就是来做这些事的。
        总结来说就是：运行过程中解析 JS 源码并将其转换成可执行的机器码并执行。
      - JS 引擎一直等待着任务队列中任务的到来，然后加以处理
        - 浏览器同一时间只能有一个 JS 引擎运行 JS 程序，所以 js 是单线程的
        - 一个 Tab 页面（renderer 进程）中无论什么时候都只能有一个 JS 引擎在运行 JS 程序
      - 常见的 JS 引擎
        - Chrome V8 引擎（Chrome、NodeJs、Opera）
        - SpiderMonkey （Firefox）
        - Nitro (Safari）
        - Chakra （Edge）

    - 事件触发线程

      - 用来控制浏览器事件循环，并且管理着一个事件队列（消息队列、回调队列），注意这不归 js 引擎线程管。当事件被触发时，该线程会把回调添加到待处理队列的队尾，等待 js 引擎的处理。
      - 当 js 执行碰到事件绑定和一些异步操作（如 setTimeout,鼠标点击，Ajax 异步请求等），会走事件触发线程将对应的事件添加到对应的线程中（如定时器操作，便把定时器事件添加到定时器线程），等异步事件有了结果，便把它们的回调添加到消息队列，等待 js 引擎线程空闲时来处理
      - 因为 js 是单线程，所以这些等待处理队列中的事件都得排队等待 JS 引擎线程处理

    - 定时器触发线程

      - setInterval 和 setTimeout 所在线程
      - 浏览器定时器计数器不是由 js 引擎计数的（js 引擎是单线程的，如果处于阻塞线程状态就会影响计时器的准确性）
      - 通过单独线程来计时并触发定时（计时完毕后，添加到事件触发线程的事件队列中，等待 js 引擎空闲后执行）,这个线程就是定时器触发线程，也叫定时器线程
      - W3C 在 HTML 标准中规定，setTimeout 中低于 4ms 的时间间隔算 4ms

    - 异步 http 请求线程

      - 在 XMLHttpRequest 链接后通过浏览器新开一个线程请求，将检测到状态变化时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入到事件队列中，再由 JS 引擎线程执行。
      - 简单说就是当执行到一个 http 请求时，就把异步请求事件添加到异步请求线程，等收到响应（http 状态变化），再把几结果作为回调函数的参数并添加到消息队列，等待，等待 js 引擎线程来执行。

    - 注意：
      GUI 渲染线程与 JS 引擎线程是互斥的，JS 引擎线程运行会阻塞 GUI 渲染线程，当 JS 引擎执行时 GUI 渲染线程会被挂起（相当于被冻结），GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行；所以如果 JS 执行时间过长，就会造成页面渲染不连贯，导致页面渲染加载阻塞。例如：浏览器渲染的时候遇到"script" 标签,就会停止 GUI 渲染，然后 js 引擎开始工作，执行里面的 js 代码，等 js 执行完毕，js 引擎线程停止工作，GUI 渲染线程继续渲染下面的工作，所以如果 js 执行时间太长就会造成页面卡顿的情况。

    **4. 运行时 Runtime**

    web 开发中，通常不直接使用 javascript 引擎。javascript 引擎是工作在一个环境（容器）内的，这个环境提供了一些额外的功能（API），代码在执行过程中可能会使用这些特性。
    js 运行在一个宿主环境中（一个可以识别并且执行 JS 代码的程序），这个容器需要做两件事：

            - 解析js源码，转换成可执行的机器码并执行
            - 暴露一些额外的对象（API），可以与js代码做交互

    js 引擎：解析 js 源码，转换成可执行的机器码并执行
    js Runtime: 暴露一些额外的对象（API），可以与 js 代码做交互
    因此，可以理解为 js Runtime 就是 js 宿主环境创建的一个 scope，在这个 scope 中 js 可以访问宿主环境提供的一系列特性
    常见 js 宿主环境：

          - web 浏览器
          - node.js

    两种环境下，对应的 js 引擎和 Runtime

    | 宿主环境 | js 引擎 |                                                                                     Runtime |
    | -------: | :-----: | ------------------------------------------------------------------------------------------: |
    |   浏览器 | v8 引擎 | DOM、window 对象、用户事件、Timers、Ajax、事件循环（event loop）、事件队列（event queue）等 |
    |  node.js | v8 引擎 |                                                     require 对象、 Buffer、Processes、fs 等 |

    相同的 js 引擎，在不同的环境下提供了不同的 Runtime

    **5. js 引擎线程详解**

    通常认为 js 引擎主要分为两部分

    - 内存堆：引用类型实际值、内存分配的地方
    - 调用栈：基本类型存储、引用类型地址名存储、代码逻辑执行的地方。是一种 LIFO(last in first out 后进先出)的数据结构。

    源代码进入 js 引擎后，顺序读取代码，解析源码，转换为可执行的机器码，按照变量声明、函数执行等不同规则，分配到堆或者栈内。

    **内存堆**

    存储引用类型数据的地方，系统分配的内存
    js 的引用类型数据，实际值是零散的存在堆里面的
    引用类型的存储分两部分存储

        - 真实值存储在内存中，系统根据自身情况，内存区哪里有合适的位置，就分配到哪里，没有严格的执行顺序，因此是零散的
        - 真实值所在的物理内存地址，这个值是以基本类型值的形式存储在栈内的

    平时代码中的引用类型赋值，就是仅仅把栈内存储的内存地址赋给新变量，就相当于是告诉新变量该值在内存中的位置，需要的时候去取就行，并不是把真正的值传递过去，内存中该值是只有一份的。这也是引起引用问题的原因

    **执行栈**

    执行栈，是代码中实际逻辑语句执行的地方，同时基本类型值和引用类型的物理内存地址也存在这里
    引擎会把代码分成一个个可执行单元，然后一次进入执行栈执行。

    - 可执行单元是什么

      可执行单元，标准说法是执行上下文
      js 中执行上下文可以是以下几种：

      - Global code ----->全局执行上下文
      - Function code ----->函数执行上下文
      - Eval code ------>eval 函数执行上下文

    - 共同特点：

      全局代码可看作是一个 IIFE（立即执行函数）
      函数就是函数
      eval 是可以把传入字符串按代码片段执行的函数

  - Javascript 为什么是单线程

  - 消息队列

  - Event Loop

- web worker

- 事件机制

- 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

## 性能优化 篇

---

## Javascript 框架篇

---

### React 篇

- 什么是 JSX ? 为什么要使用 JSX ?

  - JSX 是一个 JavaScript 的语法扩展，仅仅只是 React.createElement(component,props,...childrens)函数的语法糖。
  - 可以让我们在 javascript 中，使用类 HTML 模板语法，进行页面描述，它拥有 Javascript 的全部功能。

- 如何在 Ract 中创建组件？

  - 函数组件：纯 Javascript 函数，接受 props 对象作为第一个参数并返回 React 元素

    ```javascript
    function Greeting({ messages }) {
      return <h1>{`Hello ${message}`}</h1>;
    }
    ```

  - 类组件：改写上面组件

    ```javascript
    class Greeting extends React.component {
      constructor(props) {
        super(props);
      }
      render() {
        return <h1>{`Hello, ${this.props.message}`}</h1>;
      }
    }
    ```

  - 上述两个组件在使用上没有差别

    ```javascript
    <Greeting message="semlinker" />
    ```

    但在 React 内部是差别的

    ```javascript
    // 函数组件
    const result = Greeting(props); // <p>Hello</p>

    // 类组件 React需要先使用new 操作符将其实例化，然后调用事例的render方法
    const instance = new Greeting(props); // Greeting {}
    const result = instance.render(); // <p>Hello</p>
    ```

- 何时使用类组件和函数组件

  1. 当需要使用 getSnapshotBeforeUpdate，getDerivedStateFromError 和 componentDidCatch 生命周期的时候。
  2. 一些第三方的库可能还暂时无法兼容 Hook。

- 组件通信

- Context 组件间共享数据

  - React.createContext()
  - Context.Provider
  - Class.contextType
  - Context.Consumer
  - Context.displayName

  ```javascript
    // 创建 Context
    const myContext = React.createContext("default value");

    // 父组件提供需要传递的数据
    <myContext.Privider value="object"></myContext.Privider>

    // class 组件获取到 this.context
    myClass.contextType = myContext

    // 函数组件使用context
    <MyContext.Consumer>
      {value => /* 基于 context 值进行渲染*/}
    </MyContext.Consumer>
  ```

- Refs 转发

  - 允许访问 DOM 节点或者在 render 方法中创建 React 元素。将 ref 自动通过组件传递到其子组件的技巧。
  - 使用范围
    - 管理焦点、文本选择或者媒体播放
    - 触发强制动画
    - 集成第三方 DOM 库

  ```javascript
  const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));

  // 你可以直接获取 DOM button 的 ref：
  const ref = React.createRef();
  <FancyButton ref={ref}>Click me!</FancyButton>;
  ```

- Refs & DOM

- 高阶组件

  - 高阶组件是参数为组件，返回值为新组件的函数。

- Render Props

- 组件的生命周期

  - class 组件才有生命周期

  - 挂载阶段: 当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下

    - constrctor()

      说明：如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。在 React 挂载之前会调用构造函数，在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。

      构造函数仅用于以下两种情况：

      1. 通过给 this.state 赋值对象来初始化内部 state。
      2. 为事件处理函数绑定实例

      注意：

      1. 在 constructor() 函数中不要调用 setState() 方法。
      2. 只能在构造函数中直接为 this.state 赋值。
      3. 要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。
      4. 避免将 props 的值复制给 state！

    - static getDerivedStateFromProps()

    - render()

      说明：render() 方法是 class 组件中唯一必须实现的方法,render()函数为纯函数。当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一

      1. React 元素。通常通过 JSX 创建。
      2. 数组或 fragments。 使得 render 方法可以返回多个元素。
      3. Portals。可以渲染子节点到不同的 DOM 子树中。
      4. 字符串或数值类型。它们在 DOM 中会被渲染为文本节点。
      5. 布尔类型或 null。什么都不渲染。

    - componentDidMount()

      说明：componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。可以在此处调用 setState(),将重新调用 render()渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。

  - 更新阶段：当组件的 props 或者 state 发生变化时会触发更新。生命周期调用如下

    - static getDerivedStateFromProps()

      说明：getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。

    - shouldComponentUpdate(nextProps, nextState)

      说明：根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法，如果 shouldComponetUpdate()方法返回 false,则不会调用其后面的生命周期方法。

    - render()

    - getSnapshotBeforeUpdate()

      说明：getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。

    - componentDidUpdate(prevProps, prevState, snapshot)

      说明：componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。当组件更新后，可以在此处对 DOM 进行操作。你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，否则会导致死循环。如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。

      ```javascript
        componentDidUpdate(prevProps) {
          // 典型用法（不要忘记比较 props）：
          if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
          }
        }
      ```

  - 卸载阶段：当组件从 DOM 中移除时调用

    - componentWillUnmount()

      说明：componentWillUnmount() 会在组件卸载及销毁之前直接调用。不应调用 setState()，因为该组件将永远不会重新渲染。

  - 错误处理

    - static getDerivedStateFromError()

      说明：此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state

    - componentDidCatch()

      说明：此生命周期在后代组件抛出错误后被调用。 它接收两个参数：、

      1. error —— 抛出的错误。
      2. info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。

  - 强制更新

    - forceUpdate()

      说明：默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染。调用 forceUpdate() 将致使组件调用 render() 方法，此操作会跳过该组件的 shouldComponentUpdate()。但其子组件会触发正常的生命周期方法，包括 shouldComponentUpdate() 方法。如果标记发生变化，React 仍将只更新 DOM。

- 事件合成

  - event.preventDefault event.stopPropagation

- HOOK

  - 什么是 Hook:
    Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。

  - Hook 规则
    只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
    只能在 React 的函数组件中调用 Hook。

  - State Hook

    - 为函数组件引入 state ，state 中变量会被 Reat 保留
    - useState()函数它返回一个有两个值的数组，第一个值当前 state 和第二个值更新 state 的函数
    - state 更新区别：调用 class 的 this.setState() 的时候 React 会把提供的对象浅合并到当前对象，而 useState Hook 则是替换。

  - Effect Hook

    可以让函数组件执行副作用操作，如获取数据、设置订阅、手动操作 DOM 等。可以看成 class 生命周期 componentDidmount componentDidUpdate componentWillunmount 的组合
    使用 return function 清除 effect，每次重新渲染都会执行一次清除
    比 class 组件生命周期更灵活，可以将相关的逻辑代码按用途分离到不同的 useEffect()中

    执行规则：

    1. 重新渲染时，每次都会生成新的 effect
    2. 首次加载时执行一次 effect，即 componentDidmount，清除 effect 被保存
    3. 当 props 或 state 更新，重新渲染时先执行清除 effect，即清除首次加载的 effect,在运行当前生成的 effect
    4. 后续以此类推，避免了在 class 组件中因为没有处理更新逻辑而导致常见的 bug。

  - 自定义 Hook
    在组件之间共享一些状态逻辑，目前主流方案使用高阶组件（HOC）和 render props。自定义 Hook 可以在不增加组件的情况下达到同样目的。
    如果函数名以“use”开头并调用其他 Hook，就是自定义 Hook。

  - useReducer

    ```javascript
    const [state, dispatch] = useReducer(reducer, initialArg, init);
    ```

    在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。

## Redux 篇

- Action

- Reducer

- Store

```javascript
// reducer.js 整合于与store结构对应的redecer,返回一个新的state更新上一个state，类似 Object.assign()
import { combineReducers } from "redux";
const Test = combineReducers({
  A,
  B,
});

export default Test;

// store.js
import { createStore } from "redux";
import doTest from "reducer.js";
const store = createStore(doTest, initState);
store.getState(); // 获取state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(action);
unsubscribe();

// react component 关联React组件和Redux
import { connet } from "react-redux";

function Game(props) {
  return (
    <div onclick={() => props.onClickHandeler(id)}>
      {props.a}
    </div>
  )
}

// 先映射 state dispatch 到组建的 props 中
const mapStateToProps = (state) => {
  return {
    a: state.a,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandeler: (id) {
      dispatch(action)
    },
  };
};

const XXX = connect(mapStateToProps,mapDispatchToProps)(Game)
export XXX

// index.js
import store from "store.js"
import {Provider} from "react-redux"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

```

## NodeJs 篇

---

### 基础篇

- 介绍：Node.js 是一个开源的跨平台的 javascript 运行时环境，在浏览器外运行 V8 javascript 引擎。Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。这使 Node.js 可以在一台服务器上处理数千个并发连接，而无需引入管理线程并发的负担，使用 CommonJs 规范。

- 环境变量

  Node.js 的 process 核心提供 env 属性，该属性承载了在启动进程时设置的所有的环境变量。

  ```javascript
  process.env.NODE_ENV; // NODE_ENV 环境变量默认被设置为 "development"
  ```

- REPL

  REPL 是一种编程语言环境（主要是控制台窗口），它使用单个表达式作为用户输入，并在执行后将结果返回到控制台。
  在终端输入 node 进入该模式

- 接收参数

  执行 node app.js 或 node app.js name=joe

  接收参数使用 process,它对外提供 argv 属性，该属性是一个包含所有命令行调用参数的数组

  1. 第一个参数是 node 命令的完整路径
  2. 第二个参数是正在被执行文件的完整路径
  3. 所有其他的参数从第三个位置开始

  ```javascript
  // 可以使用循环迭代所有的参数（包括 node 路径和文件路径）
  process.argv.forEach((val, index) => {});
  // 也可以通过创建一个排除了前两个参数的新数组来仅获取其他的参数：
  const args = process.argv.slice(2);
  // 如果参数没有索引名称，例如：node app.js joe
  const args = process.argv.slice(2);
  args[0];
  // 如果是这种情况：node app.js name=joe
  // 则 args[0] 是 name=joe，需要对其进行解析。 最好的方法是使用 minimist 库，该库有助于处理参数：
  const args = require("minimist")(process.argv.slice(2));
  args["name"]; //joe
  // 但是需要在每个参数名称之前使用双破折号：node app.js --name=joe
  ```

- 输出到命令行

  - 控制台模块基础输出

    Node.js 提供 console 模块，与浏览器中的 console 对象相同

    ```javascript
      console.log('我的%s已经%d岁', '猫', 2)

      * %s 会格式化变量为字符串
      * %d 会格式化变量为数字
      * %i 会格式化变量为其整数部分
      * %o 会格式化变量为对象
    ```

  - 清空控制台
    console.clear() 会清除控制台（其行为可能取决于所使用的控制台）。

  - console.count() 是一个便利的方法

    ```javascript
    const x = 1;
    const y = 2;
    const z = 3;
    console.count("x 的值为 " + x + " 且已经检查了几次？");
    console.count("x 的值为 " + x + " 且已经检查了几次？");
    console.count("y 的值为 " + y + " 且已经检查了几次？");
    ```

  - 计算耗时
    可以使用 time() 和 timeEnd() 轻松地计算函数运行所需的时间：

    ```javascript
    const doSomething = () => console.log("测试");
    const measureDoingSomething = () => {
      console.time("doSomething()");
      //做点事，并测量所需的时间。
      doSomething();
      console.timeEnd("doSomething()");
    };
    measureDoingSomething();
    ```

  - 创建进度条
    Progress 是一个很棒的软件包，可在控制台中创建进度条。 使用 npm install progress 进行安装。

  ```javascript
  // 以下代码段会创建一个 10 步的进度条，每 100 毫秒完成一步。 当进度条结束时，则清除定时器：
  const ProgressBar = require("progress");
  const bar = new ProgressBar(":bar", { total: 10 });
  const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
      clearInterval(timer);
    }
  }, 100);
  ```

  - exports 抛出模块
    第一种方式是将对象赋值给 module.exports（这是模块系统提供的对象），这会使文件只导出该对象：

    ```javascript
    const car = {
      brand: "Ford",
      model: "Fiesta",
    };

    module.exports = car;

    //在另一个文件中

    const car = require("./car");
    ```

    第二种方式是将要导出的对象添加为 exports 的属性。这种方式可以导出多个对象、函数或数据：

    ```javascript
    const car = {
      brand: "Ford",
      model: "Fiesta",
    };

    exports.car = car;

    // 或者

    exports.car = {
      brand: "Ford",
      model: "Fiesta",
    };

    // 在另一个文件中，则通过引用导入的属性来使用它：
    const items = require("./items");
    items.car;
    // or
    const car = require("./items").car;
    ```

    module.exports 和 export 之间有什么区别？
    前者公开了它指向的对象。 后者公开了它指向的对象的属性。

  - Node.js 事件循环

    - 前提须知

      Node.js 事件循环与浏览器事件循环不同，需要区分开来

    - 什么是 Node.js 事件循环

      事件循环让 Node.js 可以通过将操作转移到系统内核中来执行异步且具有非阻塞的 I/O（尽管 Javascript 是单线程的），但是由于内核都是多线程的，因此它们可以处理在后台执行的多个操作。当其中一个操作完成时，内核会告诉 Node.js，以便 Node.js 可以将相应的回调添加到轮询队列中以最终执行。当 Node.js 启动时会初始化 event loop，每一个 enent loop 都会包含按如下顺序六个循环阶段：

      1. timers 阶段：这个阶段执行 setTimeout(callback)和 setInterval(callback) 预定的 callback；
      2. I/O callbacks 阶段：此阶段执行某些系统操作的回调，例如 TCP 错误类型。
      3. idle, prepare 阶段：仅 node 内部使用；
      4. poll 阶段：获取新 I/O 事件，例如操作读取文件等等，适当的条件下 node 将阻塞在这里；
      5. check 阶段：执行 setImmediate() 设定的 callbacks；
      6. close callbacks 阶段：例如 socket.on("close",callback)的 callback 会在这个阶段执行；

      [掘金](https://juejin.im/post/6844903999506923528#heading-5)

      - setTimeout()、setImmediate()、nextTick()、promise 区别？

        1. nextTick(),当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数，不属于事件循环的一部分。当要确保在下一个事件循环迭代中代码已被执行，则使用 nextTick()。
        2. setTimeout(() => {}, 0) 会在下一个滴答结束时执行该函数，比使用 nextTick()（其会优先执行该调用并在下一个滴答开始之前执行该函数）晚得多。
        3. 作为 setImmediate() 参数传入的任何函数都是在事件循环的下一个迭代中执行的回调。
        4.
        5. 比较：传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。

    - 调用堆栈

      调用堆栈是一个 LIFO 队列（后进先出）。
      事件循环不断检查调用堆栈，以查看是否需要运行任何函数。执行时将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数。

    - 消息队列

      当调用 setTimeout()时，浏览器或者 Node.js 会启动定时器。当定时器到期时，则回调函数被放入消息队列。
      在消息队列中，用户出发的事件（如单机或键盘事件、或获取响应）也会在此排队，然后代码才会有机会对其做出反应。类似 onload 这样的 DOM 事件也如此。
      事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中没有任何东西，便开始处理消息队列中的东西。
      我们不必等待诸如 setTimeout、fetch、或其他的函数来完成它们自身的工作，因为它们是由浏览器提供的，并且位于它们自身的线程中。 例如，如果将 setTimeout 的超时设置为 2 秒，但不必等待 2 秒，等待发生在其他地方。

    - ES6 作业队列

      ECMAScript 2015 引入了作业队列的概念，Promise 使用了该队列。这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。
      在当前函数结束之前 resolve 的 Promise 会在当前函数之后被立即执行。

      ```javascript
      const bar = () => console.log("bar");

      const baz = () => console.log("baz");

      const foo = () => {
        console.log("foo");
        setTimeout(bar, 0);
        new Promise((resolve, reject) =>
          resolve("应该在 baz 之后、bar 之前")
        ).then((resolve) => console.log(resolve));
        baz();
      };

      foo();

      // 打印输出
      // foo
      // baz
      // 应该在 baz 之后、bar 之前
      // bar
      ```

### API 篇

## Webpack 篇

---
