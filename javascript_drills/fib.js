// Wyoming Telford
// Fibonacci nth number

var fib = function(n) {
	console.log("calculating", n);
  if (n <= 1) {return n;}
  console.log("calculating up", n)
  return fib(n-1) + fib(n-2);
}
console.log(fib(9));