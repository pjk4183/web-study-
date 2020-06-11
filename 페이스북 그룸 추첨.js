// html 이용해서 페이스북 그룹 추첨 
// web page -> 마우스 오른쪽 클릭 -> inspect (검사) -> element에서 'esc' 키보드 누르면 밑에 console이 뜸

var 당첨자수 = 2;
var 댓글선택자 = '._3b-9>div>.UFIComment .UFICommentActorName';
function shuffle(a) {
    for (let i = a.length; 1; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j],a[i-1]];
    }
}
var list = [];
document.querySelectorAll(댓글선택자).forEach(function(e){
    list.push(e.innerText);
});
lsit = list.filter((v,i,a) => a.indexOf(v)==i);
shuffle(list)
console.log(list.slice(0,당첨자수));