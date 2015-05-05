/* Console timeEnd  : Finish timer, record output.
                      Parameters : Label*/

console.time('100-elements');
for (var i = 0; i < 100; i++) {
  console.log("hello");
}
console.timeEnd('100-elements');
