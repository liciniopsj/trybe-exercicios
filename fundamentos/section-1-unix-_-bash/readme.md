# Princípios de Unix & Bash

Os arquivos nesta pasta foram criados durante exercícios usando o terminal Linux.

## Comandos utilizados:

- `ls`     <sup> -l -a</sup>                                <!--listar arquivos e diretorios-->
- `cd`     <sup>. .. ~ /</sup>                              <!--navegar por diretorios-->
- `mkdir`                                                   <!--criar diretorios-->
- `touch`                                                   <!--criar arquivos-->
- `cp`                                                      <!--copiar arquivos-->
- `mv`                                                      <!--mover e renomear arquivos-->
- `rm`                                                      <!--remover arquivos-->
- `rmdir`  <sup>-r</sup>                                    <!--remover diretorios-->
- `cat`                                                     <!--exibir arquivos e editar de forma simples-->
- `less`   <sup>/"palavra" ^F ^W ! &"palavra"</sup>         <!--exibir partes de um arquivo-->
- `head`   <sup>-n</sup>                                    <!--exibir as primeiras linhas de um arquivo-->
- `sort`   <sup>-r</sup>                                    <!--organizar o conteudo de um arquivo-->
- `tail`   <sup>-n</sup>                                    <!--exibir as ultimas linhas de um arquivo-->
- `grep`   <sup>-v -c</sup>                                 <!--procura por palavras em um arquivo-->
- `wc`     <sup>-c -m -l</sup>                              <!--conta linhas,caracteres e palavras em um arquivo-->
- `man`                                                     <!--exibe o manual de um comando-->
- `chmod`  <sup>-R</sup>                                    <!--edita as permições de um arquivo-->
- `jobs`                                                    <!--lista processos suspensos ou que estao em segundo plano-->
- `ps`                                                      <!--lista processos-->
- `kill`   <sup>-9</sup>                                    <!--encerra processos-->
- `bg`                                                      <!--retorna processo suspenso para o background-->
- `fg`                                                      <!--reotnra processo suspenso para o foreground-->

### Outros comandos que interagem com comandos também foram utilizados, como:

- `>`              <!--redireciona output para um arquivo-->
- `<`              <!--redireciona input de um arquivo-->
- `>>`             <!--anexa o output para um arquivo-->
- `|`              <!--"canaliza" o output de um comando para o outro-->
- `^C` / Ctrl + c  <!--elimina trabalho em execução em primeiro plano-->
- `^Z` / Ctrl + z  <!--suspende trabalho em execução em segundo plano-->
- `&`              <!--sinaliza um trabalho para ser executado em segundo plano-->

<hr/>

### Desafios propostos

- Criar Diretorios pelo terminal usando o comando `mkdir`;
- Criar arquivos vazios usando o comando `Touch`;
- Copiar arquivos com o comando `cp`;
- Renomear e mover arquivos com o comando `mv`
- Apagar arquivos e diretorios com os comandos `rm`e `rmdir`;
- Exibir e inserir conteudo em arquivos com os comandos `cat` `>` `<` `>>`;
- Buscar dentro de arquivos com o comando `less` e utilizar suas opções para encontrar termos, exibir tudo menos um termo, contar vezes que padrão aparece, encontrar palavras onde padrão não aparece.
- Contar numeros de palavras, linhas e caracteres em arquivos usando o comando `wc`;
- Listar todos os arquivos com a mesma extenção com o comando `ls`e suas opções `-l``-a``*`
- Acessar o manual de comandos usando o comando `man`;
- Inserir a saida de comandos em outros comandos usando o `|`;
- Editar permissões com `chmod`
- Usar `head` e `tails` para inserir quantidades diferentes de linhas a partir do começo ou fim do arquivo em outros arquivos ou outros comandos. Utilizando os comandos e opções `|` `>` `-n` `>>` `<`;
- Listar processos e encontrar PIDS com o comando `ps`
- Iniciar tarefas em background, visualizar tais tarefas, suspende-las ou encerrar tarefas usando os comandos `kill` `jobs` `'tarefa' &` 


###### *Verifique o Source blob deste readme para mais informações. ;)
