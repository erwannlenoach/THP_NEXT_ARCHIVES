import './style/index.scss';
import myFunction from './file2';
import {myObject, anotherFunction} from './file3';
myFunction();
anotherFunction(myObject);

console.log("Hello Parcel world!");

import dayjs from 'dayjs';

console.log(dayjs().format('MMMM DD YYYY')); // January 18 2021
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY')); // 08/01/2021