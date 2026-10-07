importScripts('parser.js?v=2');
self.onmessage=async event=>{
 let raw;
 try{const file=event.data;raw=JSON.parse((await file.text()).replace(/^\uFEFF/,''));const result=TimelineParser.parse(raw);self.postMessage({ok:true,result})}
 catch(error){self.postMessage({ok:false,message:error instanceof SyntaxError?'JSONとして読み込めませんでした。書き出したファイルを確認してください。':error.message,diagnostic:raw===undefined?null:TimelineParser.shape(raw)})}
};
