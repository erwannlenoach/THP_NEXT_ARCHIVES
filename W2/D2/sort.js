const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    data = data.split(" ").map((data) => Number(data));
    console.log(data);

// Bubble sort 

bubbleSort = (data) => { 
    count = 0
    for (let i = 0; i < data.length; i++){
      
        for (let j = 0; j < data.length; j++){

            if (data[j] > data[j+1]){
                count++;
                [data[j],data[j+1]] = [data[j+1], data[j]]
            }
       
        }
   
    }
console.log(`Tri à bulle: ${count} comparaisons - [${data}]`)
}

// Insertion sort 

insertionSort = (data) => { 
   n = data.length;
   count = 0;

   for (let i = 0; i < data.length; i++){
     x = data[i];
     j = i;
     while (j > 0 && data[j-1] > x) {
         count++;
         data[j] = data[j-1];
         j = j - 1;
        } 
     data[j] = x
     }
     console.log(`Tri par insertion: ${count} comparaisons - [${data}]`)
    }

// Selection sort 

    selectionSort = (data) => { 
        let count = 0
        for(let i = 0; i < data.length; i++){
        let min = i;
      
            for (let j = i + 1; j < data.length; j++){
                count++;
                if(data[j] < data[min]) {
                min = j
            }
         }
        [data[i], data[min]] = [data[min], data[i]];
        }
        console.log(`Tri par sélection: ${count} comparaisons - [${data}]`)

    }

// quick Sort

    quickSort = (data) => { 
        count = 0

        if (data.length === 1) {
        return data;
        }

    const pivot = data[data.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < data.length -1; i++) {
    
        if (data[i] < pivot){
            leftArr.push(data[i]);
        } else {
            rightArr.push(data[i]);
        }
        count ++;

        console.log(count)
    }
  
  
    if (leftArr.length > 0 && rightArr.length > 0){
    
        dataSorted = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        return dataSorted
        } else if(leftArr.length > 0) {
        dataSorted = [...quickSort(leftArr), pivot];
        return dataSorted
        } else {
        dataSorted = [pivot,...quickSort(rightArr)]; 
        return dataSorted
        }
    

    }
  
let copy = data.slice();
console.log(bubbleSort(copy));
 copy = data.slice();
console.log(insertionSort(copy));
 copy = data.slice();
console.log(selectionSort(copy));
 copy = data.slice();
console.log(quickSort(copy))
});



