
export default function countRegNumber(regNo){
    if(regNo == ''){
        return 0;
    }
    var array = regNo.split(',');
    return array.length;
  }