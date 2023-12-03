const data = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "The only thing we have to fear is fear itself.",
    "In the end, we only regret the chances we did not take."
];

  function concordance(data) {
    let wordFrequency = {};
    data.forEach((currentString, stringIndex) => {
      // console.log("Processing string:", currentString);
      // console.log("String index:", stringIndex);
      const words = currentString.toLowerCase().replace(/[!,;.?]/g, '').split(" ");
      // console.log("Words:", words);
  
      words.forEach((word) => {
        // console.log(`Checking word: '${word}'`);
        if (wordFrequency[word]) {
          if (!wordFrequency[word].includes(stringIndex)) {
            // console.log(`Adding index ${stringIndex} to existing word '${word}'`);
            wordFrequency[word].push(stringIndex);
          }
        } else {
          // console.log(`Creating new entry for word '${word}' with index ${stringIndex}`);
          wordFrequency[word] = [stringIndex];
        }
        // console.log("Current state of wordFrequency:", JSON.stringify(wordFrequency));
      });
    });
    // console.log("dataSet2:", wordFrequency);
    return wordFrequency;
  }


// PROMBLEM 2: SEARCHLINES

const concordanceData = concordance(data);
console.log(concordanceData)

//-------------------------------------------------------
// This part is given to you to use( USE THE asArray helper function from it )

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(arr = []) {
    this.head = null;
    this.tail = null;

    for (const item of arr) {
      this.append(item);
    }
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  asArray() {
    const values = [];
    let node = this.head;
    while (node) {
      values.push(node.data);
      node = node.next;
    }
    return values;
  }

  printList() {
    let currentNode = this.head;
    const elements = [];

    while (currentNode) {
      elements.push(currentNode.data);
      currentNode = currentNode.next;
    }

    // console.log(elements.join(" -> "));
  }
}

// Initialize a LinkedList with an array of words
const words = new LinkedList(["quick", "journey", "only"]);
words.printList();
console.log("WORDS",words)

//-------------------------------------------------------

function searchLines(words, concordance, data) {
  const removeDuplicates = new Set();
  const wordslist = words.asArray();
  wordslist.forEach((word) => {
    if (concordance[word]) {
      concordance[word].forEach((value) => {
        removeDuplicates.add(value);
      });
    }
  });
  const toArray = Array.from(removeDuplicates).map((index) =>  data[index]);
  return toArray
}

  console.log(searchLines(words, concordanceData, data))