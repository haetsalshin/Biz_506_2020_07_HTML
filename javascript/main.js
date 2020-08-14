var div_list = document.getElementsByTagName("div");
// 스크립트를 외부에 부착하는 방법
// 아무런 태그가 들어가지 않는다.
// 그리고 내가 import하고 싶은 html위에 script로 해당 주소값을 적어준다.
for(var i = 0 ; i < div_list.length ; i ++){
    var red = Math.floor(Math.random()* 256); // 0~ 255
    var green = Math.floor(Math.random()* 256); // 0~ 255
    var blue = Math.floor(Math.random()* 256); // 0~ 255

    // 10진수를 16진수 문자열로 바꾸기

    // background-color
    // backgroundColor 이렇게 Camel식으로 바꾸면 쓸 수 있다.

    // 백틱( ` : 숫자키 1번 왼쪽에 있는 문자)
    // 백틱 ES2015이상에서만 사용가능한 연산자
    var s = "rgb(" + red + "," + green + ","+ blue + ")"
    var color_string = `rgb( ${red}, ${green}, ${blue} )`
    div_list[i].style.backgroundColor = color_string
    div_list[i].innerHTML = color_string
}