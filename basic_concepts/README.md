## 语言基础概念

---

- 编程语言
  是用来定义计算机程序的形式语言。它是一种被标准化的交流技巧，用来向计算机发出指令。

- 高级语言&低级语言

  1. 高级语言：是高度封装了的编程语言，与低级语言相对。它是以人类的日常语言为基础的一种编程语言，使用一般人易于接受的文字来表示，有较高的可读性，以方便对电脑认知较浅的人亦可以大概明白其内容。

  2. 低级语言：是计算机科学相关的术语，指的是一类电脑编程语言。该类编程语言之所以被称为低端，是因为它很少提供或不提供计算机的指令集体系结构——也就是语言映射中与处理器指令紧密相关的命令或函数。“低级”一词是指其和机器语言之间很少或根本不存在一定程度的抽象，因此低级语言有时被描述为“接近硬件”。用低级语言编写的程序往往是相对不可移植的。低级语言一般指机器代码或汇编语言。但是低端与高端其实只是相对的概念，比如 Java 对比 C 语言可以被认为是一种相对高端的编程语言。低级语言可以在没有编译器或解释器的情况下转换为机器码，第二代编程语言使用称为汇编器的简单处理器——并且生成的代码直接在处理器上运行。使用低级语言编写的程序可以运行速度非常快，而占用的内存较少。相应的，高级语言中的等效程序可能效率较低并使用更多内存。低级语言尽管在代码层面上很简单，但由于程序员必须记住许多技术细节，因而难以使用。相比之下，高级编程语言将计算机体系结构的执行语义与程序规范隔离开来，这简化了开发。

- 语言的强弱类型:

  这两个术语并没有非常明确的定义，但主要用以描述编程语言对于混入不同资料类型的值进行运算时的处理方式。强类型的语言遇到函数引数类型和实际调用类型不符合的情况经常会直接出错或者编译失败；而弱类型的语言常常会实行隐式转换，或者产生难以意料的结果。

- 编程语言类型

  1. 解释型语言：这种类型的编程语言，会将代码一句一句直接运行，不需要像编译语言一样，经过编译器先行编译为机器代码，之后再运行。这种编程语言需要利用解释器，在运行期，动态将代码逐句解释（interpret）为机器代码，或是已经预先编译为机器代码的子程序，之后再运行。

  2. 编译语言：通过编译器来实现。它不像解释型语言一样，由解释器将代码一句一句运行，而是以编译器，先将代码编译为机器代码，再加以运行。

  3. 优点与缺点：一般而言，用编译语言写成的程序，在运行期的运行速度，通常比用解释型语言写的程序快。因为程序在编译期，已经被预先编译成机器代码，可以直接运行，不用像解释型语言一样，还要多一道直译程序。但是要先进行编译，之后才能运行程序，这也造成了编译语言的缺点。一般而言，编译语言的程序开发速度，以及调试时间，都是比较长的。因为它不像解释型语言可以写完一行，或一小段程序之后，马上运行，马上调试。解释型语言通常让程序开发的整体时间变少，在开发过程中，程序师也可以更弹性、快速的测试自己的想法。

  4. 即时编译：为了改善编译语言的效率而发展出的即时编译技术，已经缩小了这两种语言间的差距。这种技术混合了编译语言与解释型语言的优点，它像编译语言一样，先把程序源代码编译成字节码。到运行期时，再将字节码直译，之后运行。Java 与 LLVM 是这种技术的代表产物。