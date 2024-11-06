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
    } else {
      currentElement === "E"
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
  const regex = /e/gi // Regex, um alle "e" und "E" zu finden
  const matches = input.match(regex)

  // Gibt die Anzahl der gefundenen Vorkommen an
  return matches ? matches.length : 0
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args // Erstelle eine Zählervariable in der Eingabe
 let count = 0
 for (let i = 0; i < input.length; i++) {}
 const (currentElement) = input[i]
 if (currentElement === " ") {
  count=count+1
 }
 // Gib count +1 zurück, weil es ein Wort mehr gibt wie Leerzeichen
 return count + 1
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args.
  if (currentElement === "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {

  }
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args.trim() // Mit ".Trim" entfernen wir alle führenden und nachfolgenden Leerzeichen der Variable.
  return /[+"@%/)(=?^'!£$-_,;.:äöüé&]/.test(input) // Überprüft, ob mindestens ein Sonderzeichen vorhanden ist
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args.toLowerCase() // Konvertiere den Text in Kleinbuchstaben
  return input.includes("und") // Mit Variable.includes("und") kann getestet werden, ob die Zeichenkette "und" in der Variable vorkommt.
}

linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args.replace(/e/g, "3") // ersetze alle "e" mit "3"
  return input
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args.trim() // Mit ".Trim" entfernen wir alle führenden und nachfolgenden Leerzeichen der Variable.
  return input.length === 6 // Testet, ob die Eingabe genau 6 Zeichen lang ist
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const regex = /^#[0-9A-F]{6}$/i // Regex to test for a valid RGB Hex code
  return regex.test(args)
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

// TODO:Gib den ASCII code eines einzelnen Buchstabens an.
