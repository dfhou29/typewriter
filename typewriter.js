const sentence = "hello there from lighthouse labs";

let delay = 50;


const typeWriter = (sentence) => {
  for (let index = 0; index < sentence.length; index++) {
    if (index === sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write(sentence[index]);
        process.stdout.write('\n');
      }, delay);
    } else {
      setTimeout(() => {
        process.stdout.write(sentence[index]);
      }, delay);
      delay += 50;
    }
  }
}

typeWriter(sentence);