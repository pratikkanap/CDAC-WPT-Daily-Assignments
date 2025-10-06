import { useCallback, useState } from "react";

const funcSet = new Set();

const DemoCallBack = ()=>{
        const [cnt , setCnt] = useState(0);
        const [num , setNum] = useState(0);

        const incCnt = useCallback(
            ()=> setCnt((prevcnt) => prevcnt+1),[]);
        const incCnt1 = useCallback(
            ()=> setCnt(cnt+1),[cnt]);
        const decCnt = useCallback(
            ()=> setCnt(cnt-1),[cnt]);
        const incNum = useCallback(
            ()=> setNum(num+1), [num]);
        
    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);

    return(
        <div>
            <h2>Without useCallback hook</h2>
            <button onClick={incCnt} id="btn">Increase Counter</button>&nbsp;
            <button onClick={decCnt} id="btn">Decrease Counter</button>&nbsp;
            <button onClick={incNum} id="btn">Increase Number</button>&nbsp;

            <h1>Count :{cnt}</h1>
            <h1>Number :{num}</h1>
            <h1>SetSize :{funcSet.size}</h1>
        </div>
    );
};
export default DemoCallBack;