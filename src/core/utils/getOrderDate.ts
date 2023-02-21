export const getOrderDate = (orderDate: number): string => {
    const date = new Date(orderDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month} às ${hour}:${minutes}`;
}