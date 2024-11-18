var restoreMatrix = function(rowSum, colSum) {
    const res = []

    for(let r=0; r < rowSum.length; r++){
        const nextArr = []
        for(let c=0; c < colSum.length; c++){
            const next = Math.min(rowSum[r], colSum[c])
            nextArr.push(next)
            rowSum[r]-=next
            colSum[c]-=next
        }
        res.push(nextArr)
    }
    return res
};