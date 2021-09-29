var listeNB = [3,2,1,4];

var maxActuel = 0;

// bigger 

function Bigger(listeNB){
    listeNB.forEach(Biggertest)
}

function Biggertest(item){
    if(item>maxActuel){
        maxActuel = item;
    }
}


// PrimeNumbers


const isPrime = num =>{
    for (let i=2; i<num; i++){
        if(num % i===0) return false ;
    
    }
    return num > 1
}


// selection sort


function selectionSort(listeNB){
    for(var i = 0; i<listeNB.lenght; i++){
        var min = i;

        for(var j = i+1; j<listeNB.length; j++){
            if(listeNB[j] < listeNB[min]){
                min = j;
            }
        }
        // temp where i value is transferred to min
        var tmp = listeNB[i];
        listeNB[i] = listeNB[min];
        listeNB[min] = tmp;
    }
return listeNB;
}