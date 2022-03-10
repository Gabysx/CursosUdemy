// See https://aka.ms/new-console-template for more information
using System.Globalization;

string produto = " Computador ";
string produto2 = "Mesa de Escritório";

byte idade = 30;
int codigo = 5290;
char genero = 'M';

double preco1 = 2100.0;
double preco2 = 650.50;
double medida = 53.2345567;

Console.WriteLine("Produtos: ");
Console.WriteLine($"{produto}, cujo preço é R$ {preco1:F2}");
Console.WriteLine("{0}, cujo preço é R$ {1:F2}", produto2, preco2);
Console.WriteLine("     ");
Console.WriteLine("Registro: {0} anos de idade, código {1} e gênero: {2}", idade, codigo, genero);
Console.WriteLine("     ");
Console.WriteLine("Medida com oito casa decimais: {0:F8}", medida);
Console.WriteLine($"Arredondamento (3 casa decimais): {medida:F3}");
Console.WriteLine("Separador decimal invariant culture: " + medida.ToString("F3", CultureInfo.InvariantCulture ));
