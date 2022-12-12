// var hasCycle = function (head) {
//   let cache = new Set();
//   while (head) {
//     if (cache.has(head)) {
//       return true;
//     } else {
//       cache.add(head);
//       head = head.next;
//     }
//   }
//   return false;
// };

// 双指针
var hasCycle = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
      head = head.next;
    }
  }
  return false;
};
