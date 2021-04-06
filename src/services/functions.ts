
export function calculate_age(date: string) { 
    var dateForm = new Date(date)
    var diff_ms = Date.now() - dateForm.getTime();
    var age_dt = new Date(diff_ms); 

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export function transformToDate(date: string){
    let dateStg = new Date(date as string)
    return dateStg.toISOString().split('T')[0]
}

