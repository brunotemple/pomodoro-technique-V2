function taskStatus(statusId){
    switch(statusId){
        case 0:
            return "Iniciated";
            break;
        case 1:
            return "Running";
            break;
        case 2:
            return "Completed";
            break;
        case 3:
            return "Resting";
            break;
        case 99:
            return "Incomplete";
            break;
    }
}

function filterStatus(filterId){
    switch(filterId){
        case 'All':
            return 0;
            break;
        case 'Complete':
            return 1;
            break;
        case 'Incomplete':
            return 2;
            break;
    }
}