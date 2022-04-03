// let str = `
// 010-1234-5678
// these@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://
// 동해물과_백두산이 마르고 닳도록
// `

const str = `
010-1234-5678
these@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi') //g flag, i는 대소문자 구분없이 검색
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA')) //const로 선언하면 원본손상없음
// str = str.replace(regexp, 'AAA') // let로 선언하고 str을 재할당해주면 원본도 바뀜
// console.log(str)

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// const h = `  the hello  world  !  

// `
console.log(
  // str.match(/[0-9]{1,}/g),
  // str.match(/[가-힣]{1,}/g),
  // str.match(/\w/g),
  // str.match(/\bf\w{1,}\b/g),
  // str.match(/\d{1,}/g),
  // h.replace(/\s/g, ''),
  str.match(/.{1,}(?=@)/g),
  str.match(/(?<=@).{1,}/g)
)