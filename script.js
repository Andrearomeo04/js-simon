function generate_random_numbers (num_arr, max, min){
    casual_numbers = [];
    
    while (casual_numbers.lenght < num_arr) {
        let generated_numbers = Math.floor(Math.random() * max) + min;
        if (!casual_numbers.includes(generated_numbers)) {
            casual_numbers.push(generated_numbers);
        }
    }
}