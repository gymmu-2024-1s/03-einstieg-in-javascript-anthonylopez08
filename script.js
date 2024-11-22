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
    if (currentElement === "e") {
      count = count + 1
    }
  }
  return count
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args // Erstelle eine Zählervariable in der Eingabe
  let count = 0
  for (let i = 0; i < input.length; i++) {}
  const currentElement = input[i]
  if (currentElement === " ") {
    count = count + 1
  }
  // Gib count +1 zurück, weil es ein Wort mehr gibt wie Leerzeichen
  return count + 1
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) // Überprüft, ob mindestens ein Grossbuchstabe vorhanden ist. Alles was sich zwischen den Klammern befindet, wird geprüft. [] Erlaubt es nach einem bestimmten Zeichen oder einem Bereich von  Zeichen zu suchen.
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  return /[+"@%/)(=?^'!£$-_,;.:äöüé&]/.test(args) // Überprüft, ob mindestens ein Sonderzeichen vorhanden ist. Alles was sich zwischen den Klammern befindet, wird geprüft. [] Erlaubt es nach einem bestimmten Zeichen oder einem Bereich von  Zeichen zu suchen.
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const letterCapitalA = "A"
  const letterSmallA = letterCapitalA.toLowerCase()
}

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
}

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
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  return input.lastIndexOf("e") // Gib die Position des letzten "e" in einem Text an.
}
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
  return -1 // Return -1 if there is no third "e"
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const firstSpace = input.indexOf(" ")
  return firstSpace === -1 ? input : input.substring(0, firstSpace)
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
  return input.split(",")
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const [name, alter] = args.split(" ")
  return `Sie heissen ${name} und sind ${alter} Jahre alt`
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  return input
    .split("")
    .map((c) => c + c)
    .join("")
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
