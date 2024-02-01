
export  function findLongestWord(words) {
    let wArray = words;
  
    let wordsWithLength = wArray.map((m) => ({
      mot: m,
      longueur: m.length,
    }));
  
    let longestWord = wordsWithLength.reduce((a, b) => {
      if (b.longueur > a.longueur) {
        return b;
      }
      return a;
    });
  
    return { mot: longestWord.mot, longueur: longestWord.longueur };
  }
 export  function countOccurrences(input) {
    let flatArray = input.flat();
  
    // Count the occurrences of each unique string
    let results = flatArray.reduce((acc, curr, i) => {
      if (i === 0 || curr !== flatArray[i - 1]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
  
      return acc;
    }, {});
  
    return results;
  }
  export function calculateTotalScore(scores) {
    // Applique un bonus de 15pt <50
    let notesAvecBonus = scores.map((note) => {
      if (note < 50) {
        return note + 15;
      } else {
        return note;
      }
    });
  
    // Filtre les notes >50
    let notesSuperieures = notesAvecBonus.filter((note) => note >= 50);
    // Calcule le total des notes> 50
    let totalScore = notesSuperieures.reduce((acc, note) => acc + note, 0);
  
    return totalScore;
  }
//    function cal(students){
//  return students.map(student=>(student.marks>50?))
//    }




//qui prend en paramètre un tableau de mots
//retourner le mot le plus long du tableau, ainsi que sa longueur
