
let count = 0;



// 1. store the count = 0
// 2. listen to number of clicks
// 3. onClick increment by 1
// 4. update the count
// 5. change html display to the updated value

let updatedCount = document.getElementById('count')

function increment(){
    count += 1
    updatedCount.innerText = count

}

function save(){
    document.getElementById('save').innerText = count;
    // console.log(count)
}