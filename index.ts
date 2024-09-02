//1. Find rectangle
let _length: number=4;
let _width: number=3
let _rectangle_area=_length*_width;

console.log("Area Rectangle = "+ _rectangle_area)

//2. Find perimeter of rectangle
let _perimeter=2*_length+2*_width;
console.log("Perimeter of Rectangle = "+ ( String(_perimeter));

//3. Find diameter, circumference and area of a circle
const _phi: number=3.14;
let _radius: number=5;
let _diameter=2*_radius;
let _circumferebce=2*_phi*_radius;
let _cicle_area=_phi*_radius*_radius;
console.log(_diameter, _circumferebce,_cicle_area );

//4.  Find angles of triangle if two angles are given
let _sudutA: number=50;
let _sudutB: number=90;
let _sudutC=180-(_sudutA+_sudutB);

console.log(_sudutC);

//5. convert days to years, months and days
let _amountD: number=400;
let _year=_amountD/365;
let _mounth=_amountD/30;
let _day: number;
let _vmodulo: number;

if (_amountD<30) {
    let _day=_amountD;
    console.log(_day+ "Hari");
} else if (_amountD>=30 && _amountD<365) {
    if(_amountD%30==0)
        {
        console.log(_amountD/30+ " Bulan");
    }
    else {        
        
        _day= _amountD%30;
        _mounth=_amountD/30;
        console.log(_mounth.toFixed()+ " Bulan, "+ _day+ " Hari");    
                
    }  
}
else if (_amountD>=365) {
    
    _year=_amountD/365;
    _vmodulo=_amountD%365;

    if (_vmodulo==0){
        _mounth=0;
       
    } else if (_vmodulo>0 && _vmodulo<30) {
        _day = _vmodulo;
        _mounth=0;
    } else if (_vmodulo>=30 && _vmodulo<365) {
        if (_vmodulo%30==0){
            _day=0;
        }else {
            _mounth=_vmodulo/30;
            _day=_vmodulo%30;

            console.log(_year.toFixed()+ " Tahun, "+_mounth.toFixed()+ " Bulan, "+_day +" Hari");
        }

    }

        


    console.log(_year.toFixed()+ " Tahun");        

}






