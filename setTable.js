function setTable(theDead) {
    const SEAT_COUNT = 12;
    let seats = new Array(SEAT_COUNT).fill("_____");
  
    function getTargetSeat(name) {
        const initial = name[0];
        if ("QUTHCRDMZ".includes(initial)) return 1;      
        if ("WEVOXING".includes(initial)) return 4;       
        if ("JFABKPLY".includes(initial)) return 7;        
        if ("S".includes(initial)) return 10;            
        return 1;
    }
  
    function getPreferenceOrder(target) {
        let order = [];
        order.push(target);
        for (let d = 1; d <= Math.floor(SEAT_COUNT / 2); d++) {
            let cc = (((target - 1 - d) + SEAT_COUNT) % SEAT_COUNT) + 1;
            if (d === SEAT_COUNT / 2) {
                order.push(cc);
            } 
            else {
                order.push(cc);
                let cw = (((target - 1 + d) % SEAT_COUNT)) + 1;
                order.push(cw);
            }
        }
        return order;
    }
  
    const toSeat = theDead.slice(0, SEAT_COUNT);
    for (let ghost of toSeat) {
        let target = getTargetSeat(ghost);
        let prefOrder = getPreferenceOrder(target);
        for (let seatNum of prefOrder) {
            if (seats[seatNum - 1] === "_____") {
                seats[seatNum - 1] = ghost;
                break;
            }
        }
    }
    return seats;
}