
    var valores = [true, 5, false, "hola", "adios", 2];

    // Comparación de cadenas
    var resultado = valores[3] > valores[4];
    document.write(resultado + "<br>");

    // Combinar valores booleanos
    var valor1 = valores[0];
    var valor2 = valores[2];

    var resultado1 = valor1 || valor2;
    document.write(resultado1 + "<br>");

    var resultado2 = valor1 && valor2;
    document.write(resultado2 + "<br>");

    // Operaciones matemáticas
    var num1 = valores[1];
    var num2 = valores[5];

    var suma = num1 + num2;
    document.write(suma + "<br>");

    var resta = num1 - num2;
    document.write(resta + "<br>");

    var multiplicacion = num1 * num2;
    document.write(multiplicacion + "<br>");

    var division = num1 / num2;
    document.write(division + "<br>");

    var modulo = num1 % num2;
    document.write(modulo);
