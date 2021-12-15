# useImperativeHandle e Refs

Um dos seus casos de uso, é expor métodos de um componente filho, para o componente pai 
utilizando de Refs para que isso seja possível.
Este é um pequeno trecho de código que exemplifica onde isto pode ser aplicado, no caso, foi
utilizado para gerenciar uma janela modal.

## Refs

Refs como o próprio nome sugere, são referências que podemos fazer a elementos html, geralmente
são utilizadas para gerenciar ações imperativamente, que não seria possível fazer de forma declarativa
utilizando React, ou quando queremos realizar uma ação que não provoque uma renderização custosa ao 
componente, casos comuns de uso são para focar inputs, ou obter seus valores sem que isto precise ser 
armazenado em um estado.

Quando utilizamos uma Ref, podemos fazer mudanças diretamente no elemento dentro da DOM do html, assim como é 
feito utilizando javascript puro.
