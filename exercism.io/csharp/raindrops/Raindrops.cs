using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
        string result = "";
        if (number % 3 != 0 && number % 5 != 0 && number % 7 != 0) {
            result = "" + number;
        }
        else
        {
            if (number % 3 == 0) { result += "Pling"; }
            if (number % 5 == 0) { result += "Plang"; }
            if (number % 7 == 0) { result += "Plong"; }
        }
        return result;
    }
}