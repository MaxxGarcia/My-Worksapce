/*window.onload = function(e) {
    // console.log(document.getElementById("body"))
    // document.getElementById("body").addEventListener("submit", function(e){
    //     debugger;
    //     console.log("tes");
    //     var a = 5 * goombaScore.goombaInput.value;
    //     console.log(a);
    //     var b = 7 * bobOmbScore.bomOmbInput.value;
    //     var c = 11 * dcheepCheepScore.cheepCheepInput.value;
    //     var result = Number(a) + Number(b) + Number(c);
    //     console.log(result);
    //     document.getElementById("bank").getElementById("owed").innerHTML =  result;  
    
    // });

    const addBtn = document.getElementById('add');
    const goombaInput = document.getElementById('goomba-input');
    const bobInput = document.getElementById('bob-omb-input');
    const cheepInput = document.getElementById('cheep-input');
    addBtn.addEventListener('click', e => {
        const goombaCost = parseInt(goombaInput.value || 0) * 5;
        const bobCost = parseInt(bobInput.value || 0) * 7;
        const cheepCost = parseInt(cheepInput.value || 0) * 11;
        debugger;
        const total = goombaCost + bobCost + cheepCost;
    });
}
*/

const addBtn = document.getElementById('add');
const go = document.getElementById('goomba-input');
const bo = document.getElementById('bob-omb-input');
const ch = document.getElementById('cheep-input');
const owed = document.getElementById("owed");
addBtn.addEventListener('click', e => {
    const goValue = +go.value;
    const boValue = +bo.value;
    const chValue = +ch.value;
    const total = goValue * 5 + (boValue * 7) + (chValue * 11);
    owed.innerHTML =  total;  
    console.log(total);
})