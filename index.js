//https://learnersbucket.com/examples/interview/find-element-with-the-given-color-property/

//https://www.youtube.com/watch?v=EZnVU6D3XNQ

/*
Write a function to find all the elements with the given color. Here the color will be provided in any format like, 
plain text (white), 
HEXA value (#fff or #ffffff), or 
RGB value (RGB(255, 255, 255)).
 */

// Write Javascript code!
const appDiv = document.getElementById('root');
// appDiv.innerHTML = `<h1>Find element with the given color property</h1>`;

function getComputedStyle(inputColor) {
  //create new element
  const divEle = document.createElement('div');

  //get the color of the element
  divEle.style.color = inputColor;

  //add it to document
  document.body.appendChild(divEle);

  //get the computed style of the div
  const { color } = window.getComputedStyle(divEle);

  //remove it to document
  document.body.removeChild(divEle);

  return color;
}

/*Test Cases  Any color code to rgb format(computedStyle format)*/
// console.log(getComputedStyle('#ffffff'));//rgb(255, 255, 255)
// console.log(getComputedStyle('#fff'));//rgb(255, 255, 255)
// console.log(getComputedStyle('rgb(255, 255, 255)'));//rgb(255, 255, 255)
// console.log(getComputedStyle('white'));//rgb(255, 255, 255)

function findElementByColor(element, standardColor) {
  const computedColor = getComputedStyle(standardColor);

  let result = [];

  function traverse(curNode) {
    if (!curNode) return;

    let elemComputedColor = getComputedStyle(curNode.style.color);

    if (elemComputedColor == computedColor) {
      result.push(curNode);
    }

    for (let node of curNode.children) {
      traverse(node);
    }
  }
  traverse(element);

  return result;
}

console.log(findElementByColor(appDiv, 'white')); //4 elems
console.log(findElementByColor(appDiv, 'black')); //by default all elems is black color // 2 elems
console.log(findElementByColor(appDiv, 'red')); //[]
