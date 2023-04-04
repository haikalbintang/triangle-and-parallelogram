/* var a = document.getElementById("BC-length");
var b = document.getElementById("CA-length");
var c = document.getElementById("AB-length");
var result = a + b + c
 */
/* function trianglePerimeter(a, b, c){
    console.log(a + b + c);
}

trianglePerimeter(a, b, c) */

/* console.log(result) */


/* function hitungTrianglePerimeter(){
    let a = document.forms["form-tri-peri"]["triangular-a"].value;
    let b = document.forms["form-tri-peri"]["triangular-b"].value;
    let c = document.forms["form-tri-peri"]["triangular-c"].value;
    if (result = a + b + c){
        document.getElementById("triangle-perimeter-result").innerHTML = result
        return false
    }
} */
/* hitungTrianglePerimeter() */


function hitungTrianglePerimeter(){
    let a = document.forms["form-tri-peri"]["triangular-a"].value;
    let b = document.forms["form-tri-peri"]["triangular-b"].value;
    let c = document.forms["form-tri-peri"]["triangular-c"].value;
    var result = a + b + c
    document.getElementById("triangle-perimeter-result").innerHTML = result
    return false
}
