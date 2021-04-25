
const retry = (fn,retryCount) => new Promise((resolve)=>{
const retryDelay = 100;
if (retryCount!==0)
 fn().then(resolve).catch(()=>{
    setTimeout(()=>{
        retry(fn,retryCount-1).then(resolve);
    },retryDelay);
})
});

export default retry;