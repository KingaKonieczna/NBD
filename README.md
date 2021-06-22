import scala.annotation.tailrec
import scala.collection.convert.ImplicitConversions.`seq AsJavaList`
import scala.util.control.Breaks.{break, breakable}

object Main {
  def main (args: Array[String]) = {
    // Zadanie 1
    val DniTygodnia = List("Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela")

    // podpunkt a
    println("> 1 a)")
    Zad1a(DniTygodnia)

    // podpunkt b
    println("> 1 b)")
    println(Zad1b(DniTygodnia))

    // podpunkt c
    println("> 1 c)")
    println(Zad1c(DniTygodnia))

    // Zadanie 2
    // a) 
    println("> 2 a)")
    println(Zad2a(DniTygodnia))
    // b) 
    println("> 2 b)")
    println(Zad2b(DniTygodnia))

    // Zadanie 3
    println("> 3")
    println(Zad3(DniTygodnia))

    // Zadanie 4
    // a) 
    println("> 4 a)")
    println(Zad4a(DniTygodnia))

    // b) 
    println("> 4 b)")
    println(Zad4b(DniTygodnia))

    // c) 
    println("> 4 c)")
    println(Zad4c(DniTygodnia))

    // Zadanie 5 
    println("> 5")
    val produkty = Map("Woda" -> 1.99, "Masło" -> 4.99, "Ryż" -> 2.99)
    val produktypoprzecenie = produkty map { case (key, value) => (key, value * 0.9) }
    println(produktypoprzecenie)

    // Zadanie 6 
    println("> 6")
    Zad6("tekst", 23, DniTygodnia)

    // Zadanie 7
    println("> 7")
    val Woda = produkty.get("Woda")
    println(Woda)
  

    // Zadanie 8
    println("> 8")
    val lista = List(6, 8, 0, 100, -37, 10, 22, 1, 0, 4)
    println(Zad8(lista))


    // Zadanie 9
    println("> 9")
    println(Zad9(lista))

    // Zadanie 10
    println("> 10")
    val lista2 = List(13, 2, 3, 4, -10, 100, -58, 0, 5, 99, -3, 55, 72, -13, -20, 444)
    println(Zad10(lista2))
  }

  def Zad1a(DniTygodnia: List[String]) = {
    var string = "";
    for (i <- 0 until DniTygodnia.length) {
      if (string != "")
        string += ", " + DniTygodnia.get(i)
      else
        string += DniTygodnia.get(i)
    }
    println(string)

  }

  def Zad1b(DniTygodnia: List[String]) = {
    var string = "";
    for (i <- 0 until DniTygodnia.length) {
      breakable {
        if (!DniTygodnia.get(i).startsWith("P")) break
        if (string != "")
          string += ", " + DniTygodnia.get(i)
        else
          string += DniTygodnia.get(i)
      }
    }
    string;
  }

  def Zad1c(DniTygodnia: List[String]) = {
    var string = ""
    var i = 0;
    while (i < DniTygodnia.length) {
      if (string != "")
        string += ", " + DniTygodnia.get(i)
      else
        string += DniTygodnia.get(i)

      i = i + 1;
    }

    string
  }

  def Zad2a(DniTygodnia: List[String]) = {
    def funkcjarek(i: Int): String = {
      if (i == DniTygodnia.length) return ""

      val aktualnydzien = if (i == DniTygodnia.length - 1) DniTygodnia.get(i) else DniTygodnia.get(i) + ", "

     aktualnydzien + funkcjarek(i + 1)
    }

   funkcjarek(0);
  }

  def Zad2b(DniTygodnia: List[String]): String = {
    def odkonca(i: Int): String = {
      if (i == -1) return ""

      val aktulanydzien = if (i == 0) DniTygodnia.get(i) else DniTygodnia.get(i) + ", "

      aktulanydzien + odkonca(i - 1)
    }

    odkonca(DniTygodnia.length - 1)
  }

  def Zad3(DniTygodnia: List[String]) = {
    @tailrec
    def nowafunkcja(i: Int, string: String) : String = {
      if (i == DniTygodnia.length) return string

      val aktualnydzien = if (i == DniTygodnia.length - 1) DniTygodnia.get(i) else DniTygodnia.get(i) + ", "

      nowafunkcja(i + 1, string + aktualnydzien)
    }
    nowafunkcja(0, "")
  }

  def Zad4a(DniTygodnia: List[String]) : String = {
    DniTygodnia.fold("") {(sum, curr) => {
      sum + curr + ", "
    }}.dropRight(2)
  }

  def Zad4b(DniTygodnia: List[String]) : String = {
    DniTygodnia.foldRight("") {(sum, curr) => {
      sum + ", " + curr
    }}.dropRight(2)
  }

  def Zad4c(DniTygodnia: List[String]) : String = {
    DniTygodnia.fold("") {(sum, curr) => {
     if (curr.startsWith("P"))
      sum + curr + ", "
     else sum

    }}.dropRight(2)
  }

  def Zad6(tup: (String, Int, Any)) = {
    println(tup._1)
    println(tup._2)
    println(tup._3)
  }

  def Zad8(lista: List[Int]): List[Int] = {
    def zero(i: Int, nowalista: List[Int]): List[Int] = {
      if (i >= nowalista.length) return nowalista;

      val (a, b) = nowalista.splitAt(i)

      if (nowalista.get(i) == 0)
        zero(i + 1, a ++ b.tail)
      else
        zero(i + 1, nowalista)
    }

    zero(0, lista)
  }

  def Zad9(lista: List[Int]): List[Int] = {
    lista map (num => num + 1)
  }

  def Zad10(lista: List[Int]): List[Int] = {
    val nowalista = lista filter (num => num >= -5 && num <= 12)

    nowalista map (num => num.abs)
  }
}
