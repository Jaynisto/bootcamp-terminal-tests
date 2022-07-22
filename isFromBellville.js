// Creating an isFromBellville function
export default function isFromBellville(origin){
    if(origin.startsWith("CY")){
        return true;
    }
    else {
        return false;
    }
    // return origin.startsWith("CY");
  }