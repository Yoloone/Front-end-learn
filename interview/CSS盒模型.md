### CSS盒模型

- 基本概念：包括标准模型和IE模型，标准模型的width和height仅包含content的宽高，IE模型的宽高包括border和padding的宽高

- 设置两种模型的方法：CSS3的box-sizing : content-box (默认)，border-box;

- 获取盒模型对应的宽高

  1. dom.style.width/height，只能取到内联样式的宽高，不准确
  2. dom.currentStyle.width/height，即时渲染的结果，较为准确，仅支持IE
  3. window.getComputedStyle(dom).width/height，即时渲染的结果，较为准确，支持Chrome，firefox
  4. dom.getBoundingClientRect().width/height，获取元素大小和相对视口的位置信息

- 边距重叠

  - 相邻空白边（margin）会发生重叠，高度取较大者
  - 分类：父子元素，兄弟元素，空白元素边距重叠

- BFC（块级格式上下文，边距重叠解决方案）

  - 定义：Block Formatting Context，块级格式化化上下文，它是一个独立的渲染区域，只有块级元素参与，它规定了内部块级元素的布局，与外部区域无关

  - 原理/渲染规则
    1.  BFC是页面上隔离的独立容器，容器内部子元素不受外界干扰，且不影响外部元素
    2. 同一个BFC的内部子元素的垂直外边距会发生重叠。
    3. BFC区域不与float box重叠-》清除外部浮动
    4. 计算BFC的高度时，内部浮动元素也参与计算-》清除外部浮动
  - 如何创建BFC
    - 根元素
    - float 不为none
    - position 为absolute 或 fixed
    - overflow不为visible
    - display为 inline-box，table-cell，table-caption，flex，grid