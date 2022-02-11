let b = $('.aaa')[0].scrollHeight
console.log(b)
// let c = $('.aaa')[0].offsetHeight
// console.log(c)
function fun(e) {
  console.log((e.target.scrollTop / b) * 100)
  // let a = $('#ace').offset()
  // if (e.target.scrollTop >= a.top - 11 && e.target.scrollTop < 186 - 11) {
  //   console.log('滑动到333了')
  // }
}
function fun2(e) {
  // console.log(e)
  console.log((e.target.offsetTop / b) * 100)
}
// let a = document.getElementById('ace')
// console.log(a.target)
// let a = $('#ace').offset()
// console.log(a)
