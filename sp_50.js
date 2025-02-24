// 21. Merge Two Sorted Lists
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);  // Dummy node to build result list
    let current = dummy; 

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes from non-empty list
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
};

let list1 = [1,2,4] 
let list2 = [1,3,4]

console.log(mergeTwoLists(list1 , list2))