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
    show_num.innerHTML = ''

    let user_numbers = []

    setTimeout(() => {
        for (let i = 0; i < random.length; i++) {
            let ask_num = parseInt(prompt(`inserisci il numero ${i + 1} `))
            if (!isNaN(ask_num)) {
                user_numbers.push(ask_num)
            }
        }
    
        const compared_numbers = []
            
        for (let i = 0; i < random.length; i++) {
            let final_numbers = random[i]
            if (user_numbers.includes(final_numbers)) {
                compared_numbers.push(final_numbers)
            }
        }
    
        let result = document.getElementById('final_message');
    
    
    
        if (compared_numbers.length === 1) {
            result.innerHTML = `Al pelo! Hai indovinato ${compared_numbers.length} numeri u 5! (${compared_numbers}) `
        } else if (compared_numbers.length === 2 || compared_numbers.length === 3 ) {
            result.innerHTML = `Poteva andare meglio... Hai indovinato ${compared_numbers.length} numeri su 5! (${compared_numbers}) `
        } else if (compared_numbers.length === 4) {
            result.innerHTML = `Ci sei andato vicinissimo! Hai indovinato ${compared_numbers.length} numeri su 5! (${compared_numbers}) `
        } else if (compared_numbers.length === 5) {
            result.innerHTML = `Complimenti! Ma come hai fatto? Hai indovinato ${compared_numbers.length} numeri su 5! (${compared_numbers}) `
        } 
    }, 100);     
}

let show_num = document.getElementById('numbers');

show_num.innerHTML = random.join(' ')


setTimeout(start, 30000)


