// no idea

let deleteDuplicates = function(head){
    let cur = head
    //check current and next
    while(cur && cur.next){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next
        }
        else{
            cur = cur.next
        }
    }
    return head
}

