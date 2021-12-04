function solution(n) {
 
    let saat = 0;
    let dakika = 0;
    saat = Math.floor(n / 60) ;
    dakika = n % 60 ;
    
    let sonuc_saat = 0 ;
    sonuc_saat = Math.floor(saat/10) + ( saat % 10) ;
    
    let sonuc_dkk = 0 ;
    sonuc_dkk = Math.floor(dakika/10) + ( dakika % 10) ;
    
    
    return sonuc_saat + sonuc_dkk;
    
    

}
