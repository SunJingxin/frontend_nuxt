

export  default  function (win) {
  // qs url参数
  var qs_reg = new RegExp("([^?=&]+)(=([^&]*))?", "g");
  var qs = {};
  var query_str = decodeURIComponent(win.location.search);
  if(query_str){
    query_str.replace(
      qs_reg,
      ($0, $1, $2, $3) => {
        qs[$1] = $3 || '';  // 防止 ?a=4&b  ==>  b:undefined
      }
    );
  }

  return {
    qs
  }
}
