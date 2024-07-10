function generate_random_numbers (num_arr, max, min){
    casual_numbers = [];
    
    while (casual_numbers.length < num_arr) {
        let generated_numbers = Math.floor(Math.random() * max) + min;
        if (!casual_numbers.includes(generated_numbers)) {
            casual_numbers.push(generated_numbers);
        }
    }

    return casual_numbers
}
const random = generate_random_numbers (5, 100, 1);

function start () {
    random.innerHTML = ''

    let user_numbers = []

    for (let i = 0; i < random.length; i++) {
        let ask_num = parseInt(prompt(`inserisci il numero ${i + 1} `))
        if (!isNaN(ask_num)) {
            user_numbers.push(ask_num)
        }
    }

    const compared_numbers = []
        
    for (let i = 0; i < compared_numbers.length; i++) {
        let final_numbers = casual_numbers[i]
        if (user_numbers.includes(final_numbers)) {
            compared_numbers.push(final_numbers)
        }
    }

    if (compared_numbers.length === 1) {
        result.innerHTML = `Al pelo! Hai indovinato ${compared_numbers.length} numeri! (${compared_numbers}) `
    }
        
}



let show_num = document.getElementById('numbers');
let result = document.getElementById('final_message');

show_num.innerHTML = random.join(' ')


