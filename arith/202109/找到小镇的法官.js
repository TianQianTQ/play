/*
在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。

如果小镇的法官真的存在，那么：


小镇的法官不相信任何人。

每个人（除了小镇法官外）都信任小镇的法官。

只有一个人同时满足属性 1 和属性 2 。
给定数组 trust ，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。

如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1 。
输入：N = 2, trust = [[1,2]] 1->2
输出：2
输入：N = 3, trust = [[1,3],[2,3]]  1->3 2->3
输出：3
输入：N = 3, trust = [[1,3],[2,3],[3,1]] 1->3 2->3 3->1
输出：-1
输入：N = 3, trust = [[1,2],[2,3]] 1->2 2->3
输出：-1
输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] 
输出：3
*/
// 解析:入度为n-1 出度为0
let findJudge = function(N, trust) {
    let graph = Array.from({length: N+1}, () => ({in:0, out: 0 }));
    trust.forEach(([a, b]) => {
        graph[a].out++;
        graph[b].in++;
    })
    return graph.findIndex(item => (item.in === N-1) && (item.out === 0));
};
findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]] );

// 正解 区别:剔除0
let findJudge = function(N, trust) {
    //构造0-N个节点的图
    let graph = Array.from({length:N+1}, () => ({outDegree:0, inDegree:0}))
    trust.forEach(([a, b]) => {
      graph[a].outDegree++
      graph[b].inDegree++
    })
    return graph.findIndex(({outDegree, inDegree}, index) => {
      //剔除0
      return index != 0 && outDegree === 0 && inDegree === N-1 
    })
  };