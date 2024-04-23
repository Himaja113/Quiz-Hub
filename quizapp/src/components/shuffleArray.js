function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original
    const shuffledArray = [...array];
  
    // Loop through the array elements
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
  
      // Swap the current element with the randomly chosen element
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  export default shuffleArray;
  