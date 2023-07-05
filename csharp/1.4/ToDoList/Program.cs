using System;
namespace ToDoList
{
    class Program
    {
        public static void Main()
        {
            List<string> tasks = new List<string>();
            bool running = true;

            while (running)
            {
                Console.WriteLine("Escolha um opção");
                Console.WriteLine("1. Nova tarefa");
                Console.WriteLine("2. Ver Tarefas");
                Console.WriteLine("3. Deletar Tarefa");
                Console.WriteLine("4. Sair");

                int option = int.Parse(Console.ReadLine());
                Console.Clear();

                switch (option)
                {
                    case 1:
                        AddTask(tasks);
                        break;
                    case 2:

                        ViewTask(tasks);
                        break;
                    case 3:
                        DeleteTask(tasks);
                        break;
                    case 4:
                        running = false;
                        break;
                }
            }
        }

        static void AddTask(List<string> tasks)
        {
            Console.WriteLine("Digite sua tarefa:");
            string? task = Console.ReadLine();
            tasks.Add(task);
        }
        static void ViewTask(List<string> tasks)
        {
            Console.WriteLine("Lista de Tarefas:");
            foreach (string element in tasks)
            {
                Console.WriteLine(element);
            }
        }

        static void DeleteTask(List<string> tasks)
        {
            Console.WriteLine("Digite a tarefa a ser removida:");
            string? task = Console.ReadLine();
            bool removed = tasks.Remove(task);
            if (!removed) Console.WriteLine("Não encontrado");
        }
    }
}