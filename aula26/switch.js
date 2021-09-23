function getDayText(weekDay) {
    let dayWeekText;
    switch(weekDay) {
        case 0:
            dayWeekText = 'Domingo';
            return dayWeekText;
        case 1:
            dayWeekText = 'Segunda-feira';
            return dayWeekText;
        case 2:
            dayWeekText = 'Terça-feira';
            return dayWeekText;
        case 3:
            dayWeekText = 'Quarta-feira';
            return dayWeekText;
        case 4:
            dayWeekText = 'Quinta-feira';
            return dayWeekText;
        case 5: 
        dayWeekText = 'Sexta-feira';
        return dayWeekText;
        case 6: 
        dayWeekText = 'Sábado';
        return dayWeekText;
        default:
            dayWeekText = 'Dia inválido';
            return dayWeekText;
    }
}

console.log(getDayText(5));
