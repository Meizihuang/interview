# 前端面试总结

---

## HTML 总结篇

---

- <!DOCTYPE html>的作用？标准模式和兼容模式有什么区别

1. <!DOCTYPE> 声明位于HTML文档第一行，告知浏览器按何种标准解析该文档。不写或者格式不正确文档将会以建融模式呈现。
2. 标准模式：排版和 JS 将会按照浏览器当前最高标准运行。兼容模式：浏览器以向后的兼容模式显示，模拟老版浏览器行为。

- 行内元素有哪些？块级元素有哪些？行内块元素有哪些？行内元素和块级元素有什么区别？空元素有哪些？

前提: CSS 规范规定，每个元素都有 display 属性，确定该元素类型。块级元素 display 属性为“block”, 行内元素 display 属性为“inline”,行内块元素 display 属性为“inline-block”。

1. 块级元素： div ul ol li p h1 h2...

   - 独占一行，宽度默认填满父级元素的宽度。
   - 能够设置 width、height 属性。
   - 可以设置 padding、margin 的属性值，top、left、bottom、right 都产生边距效应。

2. 行内元素： span a select strong b i ...

   - 不会独占一行, 不能设置 width、height 属性值，宽高由内容撑开。
   - 可以使用 padding 上下左右都有效果，但是 margin 只有 left 和 right 有效果，top 和 bottom 都不产生效果。

3. 行内块元素： img input

   - 结合了 block 和 inline 的特点，即：不会独占一行, 能够设置 width、height 属性,可以设置 padding、margin 的属性值

4. inline-block 布局 vs float 布局

   - 不同之处：inline-block 不会脱离文本流，而 float 回脱离文本流且父元素会高度坍塌。
   - inline-blick 布局元素之间会因为回车符产生空白符而出现 4px 的间隙。
   - float 布局元素换行时会因为前面的元素高度不同出现参差不齐的情况，而 inline-blick 不会。
   - 去除 inline-blick 元素之间间隙的方法，在父元素上添加{font-size： 0}，即字体大小设置为 0。
   - inline-block 在 ie6/ie7 浏览器下的兼容性：对于行内元素直接使用{dislplay:inline-block;}，对于块级元素：需添加{display:inline;zoom:1;}
   - 对于横向排列东西来说，我更倾向与使用 inline-block 来布局，因为这样清晰，也不用再像浮动那样清除浮动，害怕布局混乱等等,对于浮动布局就用于需要文字环绕的时候，毕竟这才是浮动真正的用武之地，水平排列的是就交给 inline-block 了。
