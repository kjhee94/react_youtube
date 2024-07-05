export function countFormat(count) {
    if(count/100000000 > 1){
        if(Math.round(count/100000000) < 10){
            return (Math.round(count/10000000) / 10)+"억"
        }
        return Math.round(count/100000000)+"억"
    }else if(count/10000 > 1){
        if(Math.round(count/10000) < 10){
            return (Math.round(count/1000) / 10)+"만"
        }
        return Math.round(count/10000)+"만"
    }else if(count/1000 > 1){
        if(Math.round(count/1000) < 10){
            return (Math.round(count/100) / 10)+"천"
        }
        return Math.round(count/1000)+"천"
    }else{
        return count
    }
}