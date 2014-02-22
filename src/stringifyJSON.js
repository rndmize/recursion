// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var str = "";
  if (typeof obj === "function") return;
  if (obj instanceof Array) {
    str += "[";
  	for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === "function") { // remove functions
        obj.shift();
        i--;
        continue;
      }
      if (i !== 0) str += ",";
  	  if (typeof obj[i] === "object") {
        str += stringifyJSON(obj[i]);
      }
      else {
        if (typeof obj[i] === "string") str += '"'; // wrap strings in quotes
        str += obj[i].toString(); 
        if (typeof obj[i] === "string") str += '"'; // close quotes
      }
  	}
    str += "]";
  }
  // "typeof null" returns object, so this case needs to be handled before I can deal with objects
  else if (obj === null) str += "null";
  else if (typeof obj === "object") {
    str += "{";
    var i = 0;

    for (var item in obj) {
      if ((typeof obj[item] === "function") || (typeof obj[item] === "undefined")) { // remove functions
        continue;
      }
      console.log(typeof obj[item]);
      if (i !== 0) str += ",";
      i++;

      str += '"' + item.toString() + '"' + ':';
      if (typeof obj[item] === "object") {
        str += stringifyJSON(obj[item]);
      }
      else {
        
        if (typeof obj[item] === "string") str += '"'; // wrap strings in quotes
        if (obj[item] === null) {
          str += "null";
          continue;
        }
        str += obj[item].toString();
        if (typeof obj[item] === "string") str += '"'; // close quotes
      }
    }
    str += "}";
  }
  else {
    if (typeof obj === "string") str += '"'; // wrap strings in quotes
    str += obj.toString();
    if (typeof obj === "string") str += '"'; // close quotes
  }
  
    // if key/value pair, convert to string
    // if object or array, return self
  // return string
  return str;
};

var stringifyJSON2 = function (obj) {
  // if key/value pair, convert to string
  // 	
}