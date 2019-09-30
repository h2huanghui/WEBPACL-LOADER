## 1. loader的加载
## 2. pitch
## 3. loader-runner
3.1 loader类型
 loader的叠加顺序 = post(后置)+inline(内联)+normal(正常)+pre(前缀)

 3.2特殊配置
 -! 不要前置和普通loader

 ! 不要普通loader

!! 不要前后置和普通loader,只要内联loader