module.exports={
    domain:"100bt.com",
    uuidcookieExpireDay:30,
    path:"/",
    getDomain(){
        let a=location.host.split(".");
        let b=a.slice(1);
        if(a.length>1){
            return b.join(".");
        }else{
            return a.join(".");
        }
    }
}