const korean = 50;
const english = 92;

if(korean >= 90 && english >= 90) {
  console.log('a학점')
} else if (korean + english >= 170) {
  console.log('b학점')
} else if (korean >= 90 || english >=90) {
  console.log('c학점')
} else {
  console.log('나머지는 모두 d학점')
}