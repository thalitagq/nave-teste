
export function calculate_age(date: string) { 
    var dateForm = new Date(date)
    var diff_ms = Date.now() - dateForm.getTime();
    var age_dt = new Date(diff_ms); 

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export function transformToDate(date: string){
    if(date.length > 10){
        let dateStg = new Date(date as string)
        return dateStg.toISOString().split('T')[0]
    }
    else{
       return date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) ? changeDateFormat(date) : date
    }
}

function changeDateFormat(date: string){
    return date.slice(6, 10)  + '-' + date.slice(3, 5) + '-' + date.slice(0, 2)
}

