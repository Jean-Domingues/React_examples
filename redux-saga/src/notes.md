# Redux Saga

## O que é ?

**redux-saga** é uma biblioteca que visa tornar os efeitos colaterais de uma aplicação (requisições assíncronas como busca de dados, e coisas impuras como acessar o cache do navegador) mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhor no tratamento de falhas.

Funciona basicamente como um middleware do redux, o que significa que esta thread pode ser iniciada, pausada e cancelada do aplicativo principal com ações redux normais, ele tem acesso ao estado do aplicativo redux completo e pode despachar ações redux também.

