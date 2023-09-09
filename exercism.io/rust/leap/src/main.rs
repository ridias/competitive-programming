fn main() {
    println!("{}", is_leap_year(1996u64));
    println!("{}", is_leap_year(3000u64));
    println!("{}", is_leap_year(2000u64));
    println!("{}", is_leap_year(1992u64));
    println!("{}", is_leap_year(1998u64));
}

pub fn is_leap_year(year: u64) -> bool {
    let mut is_leap: bool = false;
    if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0){
        is_leap = true;
    } 

    is_leap
}

// cargo build para compilar
// cargo para ejecutar