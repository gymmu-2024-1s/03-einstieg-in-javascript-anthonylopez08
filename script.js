import { $, linkupExerciseHandler } from "./utils"

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
    if (currentElement === "e") {
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
      // Hier sind zwei Leerzeichen hintereinander, wir ignorieren das Erste.
    } else {
      result2.push(currentElement)
    }
  }
  // Jetzt könne wir die Leerzeichen zählen.
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (result2[i] === " ") {
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
  return /["!?&%().:,;-_=]/.test(args)
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
  const result = []

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args // Erstelle eine Variable um den ASCII Wert zu speichern
  let asciiCode = 0
  // Speichere ASCII Wert vom ersten Buchstaben
  asciiCode = input.charCodeAt(0)

  if (input.length > 1) {
    // Bedingung um zu prüfen ob mehr als ein Zeichen vor vorhanden ist.
    return 0 // Sollte falls keine Eingabe vorhanden ist "0" rausgeben
  } else if (input.length === 0) {
    return 0
  }
  // Gibt den  ASCII-Wert zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  return input.indexOf("e") // Gib die Position des ersten "e" in einem Text an.
} // Die variable "indexOf" wird benutzt um nach einem bestimmten Zeichen zu suchen. Das bedeutet das die gesamte Zeile, nach dem ersten Vorkommen des gewünschten Zeichens. Die Positionsmessung beginnt bei 0. Das bedeutet, dass wenn das "e" an zweiter Stelle steht, wird 1 zurückgegeben als Antwort. Falls das gewünschte Zeichen nicht vorhanden ist, wird mit -1 geantwortet.
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  return input.lastIndexOf("e") // Gib die Position des letzten "e" in einem Text an.
}
// Die variable "lastIndexOf" wird benutzt um nach der letzten Position eines bestimmten Zeichen zu suchen. Das bedeutet das die gesamte Zeile, nach dem letzten Vorkommen des gewünschten Zeichens. Die Positionsmessung beginnt bei 0. Das bedeutet, dass wenn das "e" an zweiter Stelle steht, wird 1 zurückgegeben als Antwort. Falls das gewünschte Zeichen nicht vorhanden ist, wird mit -1 geantwortet.
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
  const index = input.indexOf("$")
  if (index === -1) {
    return [input, ""]
  }
  return [input.substring(0, index), input.substring(index + 1)]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn wir auf ein Leerzeichen treffen, dann schreiben alles was wir bis jetzt haben in die totalList.

    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }

  // Wir schreiben alles was wir bis zum Ende gelesen haben, in die Liste
  totalList.push(currentList.join(""))

  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe19(args) {
  const input = args // Variable verdoppelt jedes Zeichen in der Eingabe
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  return input.split(".").every((part) => part === "" || part.startsWith(" "))
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  return input.split("").reverse().join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  let result = ""
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "k") {
      result += input.substring(i)
      break
    }
    result += "_"
  }
  return result
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const firstChar = input[0]
  return firstChar + input + firstChar
}
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const firstChar = input[0]
  const lastChar = input[input.length - 1]
  return lastChar + input.substring(1, input.length - 1) + firstChar
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)
//Das erste und das letzte Zeichen der Eingabe sollen vertauscht werden. Beschreibe was jede variable macht.

export function aufgabe25(args) {
  const input = args
  const middleIndex = Math.floor(input.length / 2)
  return input.substring(0, middleIndex) + input.substring(middleIndex + 1)
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  if (input[0] > input[1]) {
    return input[1] + input[0] + input.substring(2)
  } else {
    return input
  }
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  return !isNaN(input)
} // Das "isNaN" ist eine Variable, die überprüft ob "Input" eine Zahl ist. Das bedeutet wenn "Input" eine Zahl ist, wird mit "true" geantwortet. Sie steht für "is Not a Number". Wenn "Input" keine Zahl ist, wird mit "false" geantwortet. Dazu ist das Ausrufezeichen dafür da, um die Antwort wie umzukehren. Das bedeutet, wenn kein Ausrufezeichen da wäre, würde es bei einer Zahl mit "false" antworten. Anders gesagt, ist es ein Negationszeichen, welches den Wahrweitswert einer Bedingung umkehrt.
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const [num1, num2] = args.split(" ")
  if (!isNaN(num1) && !isNaN(num2)) {
    return Number(num1) + Number(num2)
  } else {
    return "Fehlermeldung"
  }
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)
