export const getQuryString=(obj)=>{
    const params = new URLSearchParams(obj);
      console.log(params.toString());
      //Prints "var1=value&var2=value2&arr=foo"
      return params.toString();
}
