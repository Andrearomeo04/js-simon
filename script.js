function generate_random_numbers (num_arr, max, min){
    casual_numbers = [];
    
    while (casual_numbers.lenght < num_arr) {
        let generated_numbers = Math.floor(Math.random() * max) + min;
        if (!casual_numbers.includes(generated_numbers)) {
            casual_numbers.push(generated_numbers);
        }
    }

    return casual_numbers
}

const random = generate_random_numbers (5, 100, 1);
let show_num = document.getElementById('numbers');
let result = document.getElementById('final_message');