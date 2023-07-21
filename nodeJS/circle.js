
const PI=3.141592;

function getArea(radius){
    return PI*radius *radius
}

function getCircumference(radius){
    return 2*PI*radius;
}

// console.log(getArea(3));

// 한번에 내보내기
// 이렇게 내보내면 다른 파일(모듈)에서 불러와 사용할 수 있다
export{PI, getArea, getCircumference};