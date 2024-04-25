const formatDateToLocal = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1; // Los meses empiezan desde 0
    const year = formattedDate.getFullYear(); 
    return `${day}/${month}/${year}`;
}

export {
    formatDateToLocal
}