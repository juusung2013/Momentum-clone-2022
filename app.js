//const, let, var 차이점

//const
//재선언 금지
const a = b;
const a = c;
//(X)

//재할당 금지
const a = b;
a = c;
//(X)

//let
//재선언 금지
let a = b;
let a = c;
//(X)

//재할당 가능
let a = b;
a = c;
//(O)

//var
//재선언, 재할당 가능
var a = b;
var a = c;
a = d;
//(O)
//코드가 길어지면 헷갈리기에 var 사용 안함

//기본은 무조건 const 사용, 변수 수정 필요할 때 let 사용, var는 사용 금지
