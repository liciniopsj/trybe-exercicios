using ola_mundo;
using System.IO;
using Xunit;
using System;
using FluentAssertions;

namespace ola_mundo.Test;

public class OlaMundoTest
{
    [Trait("Category", "1. Retorne a string 'Olá, Mundo!'")]
    [Theory(DisplayName = "Deve retornar a string Olá, Mundo!")]
    [InlineData("Olá, Mundo!")]
    public void TestOlaMundo(string Expected)
    {
        String resultGreet = HelloWorld.Greet();
        Assert.Equal(Expected, resultGreet);
    }
}

public class OlaMundoTestReq2
{
    [Trait("Category", "2. Retorne a string 'Seja bem-vindo, Tryber!'")]
    [Theory(DisplayName = "Deve retornar a string Seja bem-vindo, Tryber!")]
    [InlineData("Seja bem-vindo, Tryber!")]
    public void TestGreetTryber(string Expected)
    {
        String resultGreet = HelloWorld.GreetTryber();
        Assert.Equal(Expected, resultGreet);
    }
}
