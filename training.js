var profile = [
    {
        key: "name", value: "jared"
    },
    {
        key: "age", value: "old",
    },
    {
        key: "food", value: "bacon"
    },
    {
        key: "food", value: "pizza"
    },
    {
        key: "food", value: "cubby's"
    },
    {
        key: "food", value: "wings"
    },
    {
        key: "food", value: "shakes"
    }
];

var finishedObject = profile.reduce(function(profileObject, row){
    if (row.key === "food"){
        if (profileObject.food === undefined) 
            profileObject.food = [];
        profileObject.food.push(row.value);
    }
    else
        profileObject[row.key] = row.value;
    return profileObject;
}, {});
finishedObject.kids = "gazillions";

console.log(finishedObject);
/*{
    {
    age: "old",
    kids: "gazillions",
    name: "jared",
    food: [
        "bacon",
        "pizza",
        "cubby's",
        "wings",
        "shakes"
    ]
}
}*/