function persistence(num) { // defines the function and names it input num into the function
  let counter = 0; // it tallys the count, the amount of times i multiple the digits

  while (String(num).length > 1) { //turns the number into a text so i can measure it 
    let digits = String(num).split(""); // it breaks the number into seperate digits so that and text written into the array becomes single characters
    let total = 1; // it starts the multiplier accumulator from 1 otherwise everything would be 0 

    for (let d of digits) { // goes through each digit and multiplies it in the total 
      total = total * d;
    }

    num = total; // this is the loop that makes sure the num shrinks 
    counter++; // goes up, the counter btw
  }

  return counter; // returns the anwer
}