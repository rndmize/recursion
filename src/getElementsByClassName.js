// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var body = document.body;
  return traverseTree(className, body);
};

var traverseTree = function (className, currentNode) {
  var targets = [];

  for (var i = 0; i < currentNode.classList.length; i++) {
    if (currentNode.classList[i] === className)
      targets.push(currentNode);
  }

  if (currentNode.firstElementChild !== null)
    targets = targets.concat(traverseTree(className, currentNode.firstElementChild));

  if (currentNode.nextElementSibling !== null)
    targets = targets.concat(traverseTree(className, currentNode.nextElementSibling));

  return targets;
}