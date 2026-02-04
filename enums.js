var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Status;
(function (Status) {
    Status["Pending"] = "Pending";
    Status["Approved"] = "Approved";
    Status["Rejected"] = "Rejected";
})(Status || (Status = {}));
console.log(Color.Blue);
console.log(Status.Rejected);
var Task = { name: 'Learning', duration: 23, status: Status.Approved };
console.log(Task);
