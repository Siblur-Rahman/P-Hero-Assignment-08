import { toast } from 'react-toastify';

const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-list');
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return []
}
const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return []
}

const saveReadList = id =>{
    const storedReadList = getStoredReadList();
    const exists = storedReadList.find(readId => readId === id);

    if(!exists){
        storedReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadList))
      return  toast('The book Added to Read List')
      
    }
    return  toast('You have Allready Read this Book')
}

const  saveWishList = id =>{
    const storedReadList = getStoredReadList();
    const storedWishList = getStoredWishList();
    const exists = storedReadList.find(readId => readId === id);

    if(!exists){
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList))
      return  toast('The book Added to Wish List')
      
    }
    return  toast('You have Allready Read this Book')
}

    var link = document.getElementsByClassName("link");
var linkCount;

for (linkCount = 0; linkCount < link.length; linkCount++) {
  link[linkCount].addEventListener("click", function() {
    for (linkCount = 0; linkCount < link.length; linkCount++) {
        link[linkCount].classList.remove("active")
    }
    this.classList.add("active");
  });
}
export {getStoredReadList, saveReadList, getStoredWishList, saveWishList}