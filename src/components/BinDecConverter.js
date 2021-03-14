export function convertBin(binval){
    var i=0;
    var res=0;
    var tempBin=binval;
    while(tempBin>0){
        res = res+ (tempBin % 10) * (2 ** i);
        tempBin = (tempBin - tempBin%10)/10;
        ++i;
    }
    return res;
}

export function convertDec(decval){
    var i=0;
    var res=0;
    var tempDec=decval;
    while(tempDec>0){
      res = res+ (tempDec % 2) * (10 ** i);
      tempDec = (tempDec - tempDec%2)/2;
      ++i;
    }
    return res;
}