var xhttp = new XMLHttpRequest();
xhttp.open("POST", 'https://fcm.googleapis.com/fcm/send', true);
xhttp.setRequestHeader('Content-Type', 'application/json')
xhttp.setRequestHeader('Authorization','key=AAAAh3rwJYY:APA91bG6BNcz-ommMEQEl7NdfGU3HtdoqBfBnPyPsNvb45q2rxuhFPnPAddXStJ4QuoKY2G0ygT_rzngv809hSkpT11rkCyHy_npJoHxzTca-GJZqpfltFQydL3U3St0KbfbfrcrjRH6')

xhttp.onload = function () {


    console.log(this.response)
}
xhttp.send({
    "to": "c_i0MyCGNSi3XDSZX9KPR7:APA91bEwhy-FzPpCWELWbCqHvxW2cRdpJHZ41RNrA9Riv-zzQRVPu_P0Mc30_oKun8Z-cHlSmyQ8PHKJDEjV4gVNisq2nM7pwDqKCupqhcwP6AkxmoXB0zQERQ9pCGpdDkW9mrH0WjIv",
    "notification": {
      "title": "Check this Mobile (title)",
      "body": "Rich Notification testing (body)",
      "mutable_content": true,
      "sound": "Tri-tone"
      },

   "data": {
    "url": "<url of media image>",
    "dl": "<deeplink action on tap of notification>"
      }
});