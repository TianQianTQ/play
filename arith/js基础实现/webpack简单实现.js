/** webpack性能优化
 * 1、优化loader，设置文件搜索范围，编译过的文件设置缓存 loader:'babel-loader?cacheDirectory=true'
   2、HappyPack 可以将loader的同步执行转换为并行
   3、DllPlugin 将特定的类库提前打包引入
   4、代码压缩
   减少体积：
   1、按需加载
   2、scope hoisting
   3、tree shaking
 */

/* 1、引入babel相关工具以备转换es6
  2、readCode :实现babel转换代码
    读取文件，生成AST，寻找当前文件的依赖关系并存放在数组中，
    通过AST将代码转换为es5
  3、调用readCode函数,传入入口文件，分析依赖，并生成依赖文件的绝对路径，识别js和css
  4、把入口文件和所有依赖打包到一个单独的文件中
*/
/*关于DevServer：
 DevServer用于提供HTTP服务、监听文件变化并实时刷新页面、支持SourceMap以方便调试
*/
/*找出入口文件所有的依赖关系
 然后通过构建 CommonJS 代码来获取 exports 导出的内容

*/