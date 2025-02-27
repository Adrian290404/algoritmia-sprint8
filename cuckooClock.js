function cuckooClock(inputTime, chimes) {
    let [hour, minute] = inputTime.split(':').map(Number);
    let count = 0;
    
    function getChimeCount(h, m) {
        if (m === 0) {
            return h === 12 ? 12 : h;
        }
        if (m === 15 || m === 30 || m === 45) {
            return 1;
        }
        return 0;
    }
    
    let currentChimes = getChimeCount(hour, minute);
    if (currentChimes > 0) {
        count += currentChimes;
        if (count >= chimes) {
            return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        }
    }
    
    while (count < chimes) {
        minute++;
        if (minute === 60) {
                minute = 0;
                hour++;
                if (hour > 12) { 
                    hour = 1;
                }
        }
      
        let eventChimes = getChimeCount(hour, minute);
        if (eventChimes > 0) {
            count += eventChimes;
            if (count >= chimes) {
                return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            }
        }
    }
    
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}  