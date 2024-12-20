import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      //do nothing
    } else if (currentElement === "E") {
    } else {
      // auch E ignorieren
      result.push(currentElement)
    }
  }

  // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste

  // Läuft Zeichen für Zeichen über den ganzen text
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]

    // Hänge das aktuelle Zeichen doppelt an.
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      // Zählt e und E
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args // Erstelle eine Zählervariable in der Eingabe
  const result = []
  // Wir filtern die Eingabe, sodass nur noch Buchstaben und Leerzeichen übrig sind.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grossbuchstabe
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      //Kleinbuchstabe
      result.push(currentElement)
    } else if (ascii === 32) {
      //Leerzeichen
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern.
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // Hier  sind zwei Leerzeichen hintereinander, wir ignorieren das Erste.
    } else {
      result2.push(currentElement)
    }
  }
  // Jetzt könne wir die Leerzeichen zählen.
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein Wort mehr wie Leerzeichen gibt, geben wie Leerzeichen+1 zurück.
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) // Überprüft, ob mindestens ein Grossbuchstabe vorhanden ist.
} // Alles was sich zwischen den Schrägzeichen befindet wird geprüft.  "[]" ermöglicht es eine bestimmte Zeichenart zu suchen. Beispielsweise bei den Grossbuchstaben. Anstatt dass man "ABCDEF..." schreibt, kann man diese Klammern machen und dann mit "A-Z abkürzen". Die Variable "test", überprüft ob es ein Zeichen zwischen A-Z gibt. Dann gibt die gesamte Zeile "true"oder "false" zurück. "True" wenn es ein Grossbuchstaben gibt und "false" wenn es keine Grossbuchstaben gibt.

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  return /["!?&%().:,;-_= ]/.test(args)
} // Alles was sich zwischen den Schrägzeichen befindet wird geprüft. Die Variable "test", überprüft und gibt dann "true" oder "false" zurück.

linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  return input.includes("und")
} // Die Variable "input" ist die die Eingabe. Die Variable "includes" teste ob es im "Input" das Wort "und" gibt. Bei der Variable "include" wird der "Input" in diese Klammer geschrieben. Wenn es der Fall ist, dass es hier und im Input hat dann gibt die ganze Zeile (return input.includes("und") "true" zurück. Wenn dies nicht der Fall ist, wird "false" zurückgegeben.
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // mache nichts
      result.push(3) //Ersetzt e mit 3
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  return input.length === 6 // Testet, ob die Eingabe genau 6 Zeichen lang ist
} // Die Variable "input.length" gibt die Länge der Input an. Danach testet die Variable "=== 6" ob sie 6 Zeichen lang ist. Wenn dies der Fall ist, wird "true" zurückgegeben. Falls nicht, wird "false" zurückgegeben.

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  // Überprüft, ob "#" das erste Zeichen ist
  if (input[0] !== "#") {
    return "sollte kein korrekter RGB Hexcode sein" // Gibt das zurück, wenn das "#" nicht das erste Zeichen ist
  }

  // Überprüft, ob die Eingabe 7 Zeichen lang ist
  if (input.length !== 7) {
    return false
  }

  // Überprüft, ob die 6 Zeichen  Hexadezimalzeichen sind
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    // Überprüft, ob das Zeichen ein Hexadezimalzeichen ist
    if (
      !(
        (ascii >= 48 && ascii <= 57) || // 0-9
        (ascii >= 65 && ascii <= 70) || // A-F
        (ascii >= 97 && ascii <= 102)
      ) // a-f
    ) {
      return "sollte kein korrekter RGB Hexcode sein" // Wenn es falsch ist gibt es das zurück
    }
  }

  return "sollte ein korrekter RGB Hexcode sein" // Gibt das zurück wenn es richtig ist.
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args // Erstelle eine Variable um den ASCII Wert zu speichern
  let asciiCode = 0
  // Speichere ASCII Wert vom ersten Buchstaben
  asciiCode = input.charCodeAt(0)

  if (input.length > 1) {
    // Bedingung um zu prüfen ob mehr als ein Zeichen vor vorhanden ist.
    return null // Sollte falls keine Eingabe vorhanden ist "0" rausgeben
  } else if (input.length === 0) {
    return null
  }
  // Gibt den  ASCII-Wert zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  return input.indexOf("e") // Gib die Position des ersten "e" in einem Text an.
} // Die variable "indexOf" wird benutzt um nach einem bestimmten Zeichen zu suchen. Das bedeutet das die gesamte Zeile, nach dem ersten Vorkommen des gewünschten Zeichens. Die Positionsmessung beginnt bei 0. Das bedeutet, dass wenn das "e" an zweiter Stelle steht, wird 1 zurückgegeben als Antwort. Also muss man immer die zurückbekommene Position um 1 erhöhen. Falls das gewünschte Zeichen nicht vorhanden ist, wird mit -1 geantwortet.
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  return input.lastIndexOf("e") // Gib die Position des letzten "e" in einem Text an.
}
// Die variable "lastIndexOf" wird benutzt um nach der letzten Position eines bestimmten Zeichen zu suchen. Das bedeutet das die gesamte Zeile, nach dem letzten Vorkommen des gewünschten Zeichens. Die Positionsmessung beginnt bei 0. Das bedeutet, dass wenn das "e" an zweiter Stelle steht, wird 1 zurückgegeben als Antwort. Deswegen muss man die zurückbekommene Position um 1 erhöhen. Falls das gewünschte Zeichen nicht vorhanden ist, wird mit -1 geantwortet.
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
      if (count === 3) {
        return i
      }
    }
  }
  return -1 //Gib -1 zurück wenn es kein "e" gibt.
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      return result.join("")
    }
    result.push(currentElement)
  }
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  // Die Eingabe wird bis zum Zeichen '$' gelesen und als ersten Teil einer Liste zurückgegeben, und den Rest als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn wir auf ein Leerzeichen treffen, dann schreiben alles bis jetzt Vorhandene in die totalList.

    if (currentElement === ",") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }

  // Alles was bis zum Ende gelesen wurde, schreiben wir in die Liste
  totalList.push(currentList.join(""))

  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args

  //Wir können die Aufgabe 17 verwenden um eine Liste zu bekommen
  const nameAndAge = aufgabe17(input)

  //Wir generieren unsere Ausgabeliste
  const result = []

  result.push("Sie heissen")

  // Wir setzen die Liste dann so zusammen, dass der Name und das Alter an der richtgen Stelle eingefügt wird
  result.push(nameAndAge[0])
  result.push("und sind")
  result.push(nameAndAge[1])
  result.push(" Jahre alt")

  //Wie immer geben wir das Resultat als Text zurück
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args // Variable verdoppelt jedes Zeichen in der Eingabe
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement) //Hängt Element am Ende der Liste an
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []
  let allGood = true
  //prüfe ob nach jeden "." ein Leerschlag kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //prüft ob das nächste Zeichen ein Leerzeichen ist
      if (input[i + 1] === " ") {
        //Mache nichts
      } else {
        allGood = false
      }
    }
  }
  return allGood
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //Kehrt die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  let result = "" // Hier wird eine leere Zeichenkette erstellt, in der das Ergebnis später gespeichert werden kann.
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "k") {
      // Diese Zeile überprüft, ob ein es ein "k" im Input gibt.
      result += input.substring(i) //Wenn das Zeichen „k“ gefunden wird, fügt diese Zeile den restlichen Text ab diesem „k“ mit dieser Zeile hinzu.
      break // Bricht den Vorgang ab, nachdem das "k" gefunden wurde und der restliche Text hinzugefügt wurde.
    }
    result += "_" // Wenn kein "k" vorhanden ist wird bis zum Schluss des Input ein Unterstrich hinzugefügt.
  }
  return result // Gibt das Schlussergebnis zurück.
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)
// Das "Substring" schneidet den Text ab der gewünschten Stelle heraus und fügt ihn am Ende wieder ein.

export function aufgabe23(args) {
  const input = args
  const firstChar = input[0] // Speichert das erste Zeichen des Input.
  return firstChar + input + firstChar // Hängt das erste Zeichen am Anfang und am Ende des Input an.
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)
// Firstchar speichert hier das erste Zeichen des Inputs. Danach setzt es dann mit dem Befehl "return firstChar + input + firstChar" das erste Zeichen am Anfang und am Ende des Inputs an. Das bedeutet das firstchar ist zum Beispiel "e". Also gibt es das Input zurück, aber hängt noch das "e" am Anfang und am Schluss an.

export function aufgabe24(args) {
  //Das erste und das letzte Zeichen sollen vertauscht werden
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  const inputLength = input.length // Gibt die Länge des Inputs an
  const middleIndex = Math.floor(inputLength / 2) // rechnet anzahl der zeichen im Input durch 2

  for (let i = 0; i < inputLength; i++) {
    const currentElement = input[i]
    if (inputLength % 2 === 0) {
      if (i === middleIndex - 1 || i === middleIndex) {
        // Wenn es ein gerade Anzahl an Zeichen gibt, überspringe das mittlere Zeichen
        continue // Überspringt das mittlere Zeichen
      }
    } else {
      if (i === middleIndex) {
        // Wenn es eine ungerade Anzahl an Zeichen gibt, überspringt es das mittlere Zeichen
        continue // Überspringt das mittlere Zeichen
      }
    }
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)
// "const inputLength = input.length " gibt die Länge des Inputs an. "const middleIndex = Math.floor(inputLength / 2)" berechnet die Position des mittleren Zeichens im Input. Das macht es indem es die Anzahl Zeichen durch 2 teilt. Bei einer geraden Anzahl an Zeichen wird die ausgerechnete Stelle übersprungen. Wegen diesem Überspringen, gibt es zwei Zeichen zurück. Dies geschieht durch folgende Zeilen: if (inputLength % 2 === 0) & {if (i === middleIndex - 1 || i === middleIndex)Bei einer ungeraden Anzahl der Zeichen wird die Anzahl der zeichen durch 2 geteilt und dann aufgerundet. Das führt dazu dass das mittlere Zeichen nicht herausgegeben wird. Dies passiert durch: if (i === middleIndex). Dazu muss noch am Ende dieser Zeilen ein "continue" hin. Dieses macht die Aktion und sorgt dafür dass das/die mittlere/n Zeichen nicht zurückgegeben werden.

export function aufgabe26(args) {
  const input = args
  const result = []
  // Das erste und zweite Zeichen sollen verglichen und vertauscht werden

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[1])
    } else if (i === 1) {
      result.push(input[0])
    } else {
      //Mache nichts
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  return !isNaN(input)
} // Das "isNaN" ist eine Variable, die überprüft ob "Input" eine Zahl ist. Das bedeutet wenn "Input" eine Zahl ist, wird mit "true" geantwortet. Sie steht für "is Not a Number". Wenn "Input" keine Zahl ist, wird mit "false" geantwortet. Dazu ist das Ausrufezeichen dafür da, um die Antwort wie umzukehren. Das bedeutet, wenn kein Ausrufezeichen da wäre, würde es bei einer Zahl mit "false" antworten. Anders gesagt, ist es ein Negationszeichen, welches den Wahrweitswert einer Bedingung umkehrt.
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args.split(" ") // Teilt den Input anhand der Leerzeichen

  // Prüft, ob es genau 2 Teile gibt
  if (input.length === 2) {
    // Die Zeichen werden überprüft ob sie Zahlen sind und dann zusammengerechnet
    if (+input[0] == input[0] && +input[1] == input[1]) {
      return +input[0] + +input[1] // Rechnet zusammen und gibt die Summe zurück
    }
  }

  return "Fehlermeldung" // Falls der Input keine oder nur eine Zahl enthält, wird Fehlermedldung zurückgegeben
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe29(args) {
  const input = args
  return input.length === 3 // Testet, ob die Eingabe genau 3 Zeichen lang ist
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

export function aufgabe30(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      count++
      if (count === 3) {
        return i
      }
    }
  }
  return -1 //Gib -1 zurück wenn es kein "a" gibt.
}
linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  const input = args

  // Kehrt die Eingabe um
  const umgekehrtesWort = aufgabe21(input)

  // Vergleicht das ursprüngliche Wort mit dem umgekehrten Wort
  if (input === umgekehrtesWort) {
    return true // Es handelt sich um ein Palindrom
  } else {
    return false // Es handelt sich nicht um ein Palindrom
  }
}
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)
// Überprüft ob ein Wort ein Palindrom ist. Wenn nicht im Input steht, wird mit true geantwortet, weil nix umgekehrt ja auch nix ist.

export function Selectionsort(args) {
  const input = args.split("")
  const result = []
  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Wenn der Fall ist das die momentane Position stimmt, soll das kleinste Element nicht verschoben werden
    let min_idx = i

    // Durchsucht den Teil der nicht sortiert wurde, um das kleinste Zeichen zu finden
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Wenn das Zeichen kleiner ist, wird die Position des Zeichens verändert
        min_idx = j
      }
    }

    // Bewegt das kleinste Zeichen zur richtigen Position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }
  return input
}

linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Anhand dieser dieser Zeile wandeln wir den Text in eine Liste um, das wird benötigt wenn wir die Elemente vertauschen wollen.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Wenn die Reihenfolge nicht stimmt , müssen die Elemente getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // Beginne wieder am  Anfang wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")

  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)
