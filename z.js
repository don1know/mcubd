if (!("Notification" in window)) {
    alert('no noti in windowk')
}
else if(Notification.permission === "granted"){
    const notification = new Notification("Hi there!");
}