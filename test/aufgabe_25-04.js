const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut

let arr = data.split(" ");

for (let i = 0; i <= arr.length; i++) {
    if (i % 3 == 0) {
        console.log(arr[i])
    }
}