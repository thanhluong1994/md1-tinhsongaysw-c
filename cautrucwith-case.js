function thongbao(){
    let thang = document.getElementById("thang").value;
    let result="";
    switch (thang){
        case "4":
        case "6":
        case "9":
        case "11":
            result= "30 ngày";
            break;
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            result= "31 ngày";
            break;
        case "2":
            result= "28 ngày hoac 29 ngày";
            break;
        default:
            result="Nhập sai dữ liệu"
    }
    document.write(result);

}