const mergeSort = (array) => {
    if (array.length < 2) return array;
    else {
      let half = Math.ceil(array.length / 2);
      let firstHalf = array.slice(0, half);
      let secondHalf = array.slice(half);
      return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
};
  