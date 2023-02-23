function insertNodeAtPosition(list, data, position){
    console.log(list)
    // .splice(where to start, how many to remove)
    // .splice(where to start, 0, what to add)
    list.splice(position, 0, 8)
    console.log(list)


}
insertNodeAtPosition([1, 2, 3], 7, 1)