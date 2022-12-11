// 正常循环模式
var removeElements = function (head, val) {
  let ele = {
    next: head,
  };
  let p = ele;
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return ele.next;
};

// 递归
var removeElements2 = function (head, val) {
  // 递归出口
  if (head === null) {
    return head;
  }
  head.next = removeElements2(head.next, val);
  return head.val === val ? head.next : head;
};
