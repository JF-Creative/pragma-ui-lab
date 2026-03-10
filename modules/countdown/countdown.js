export const countdownTimer = (deadTime)=>{
    const date = new Date(deadTime);
    const current = new Date();
    const remain = date - current;
    return(
      {
        Meses: Math.floor(remain / (1000 * 60 * 60 * 24 * 30)),
         Días: Math.floor(remain / (1000 * 60 * 60 * 24)) % 30,
         Hrs : Math.floor(remain / (1000 * 60 * 60)) % 24,
         Min : Math.floor(remain / (1000 * 60)) % 60,
         Segs: Math.floor(remain / 1000) % 60
      }
    )
  }