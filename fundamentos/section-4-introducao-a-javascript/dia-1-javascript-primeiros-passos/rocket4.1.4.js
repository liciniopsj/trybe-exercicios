let ang1 = 80, ang2 = 50, ang3 = 50, angSum = 0;

angSum = ang1 + ang2 + ang3;

if (ang1 > 0 && ang2 > 0 && ang3 > 0){

    if (angSum === 180){
        console.log(true);
        ang1 == 90 || ang2 == 90 || ang3 == 90 ? console.log('triangulo retangulo'):console.log();
        return true;
    }else {
        console.log(false);
        return false;
    }

}else {
    console.log('Angulo invalido');
}
