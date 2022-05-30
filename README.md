# Rentalx

## Sistema que gerencia uma rede de aluguel de veículos

### API desenvolvida na trilha Ignite da Rocketseat

**RF** => Requisitos Funcionais  
**RNF** => Requisitos Não Funcionais  
**RN** => Requisitos de Negócio

# Cadastro de carro

**RF**  
[X] Deve ser possível cadastrar um novo carro.

**RN**  
[X] Não deve ser possível cadastrar carros com placas já existentes.  
[X] Não deve ser possivel um carro ser cadastrado por um usuário não administrador.  
[X] O carro deve ser cadastrado com 'disponibilidade' por padrão.  
[X] O carro deve ser cadastrado por um usuário administrador.

# Listagem de carros

**RF**  
[X] Deve ser possível listar todos os carros disponíveis.  
[X] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.  
[X] Deve ser possível listar todos os carros disponíveis pelo nome da marca.  
[X] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**  
[X] Não deve ser necessário o usuário estar autenticado no sistema para realizar a listagem dos carros.

# Cadastro de Especificação do carro

**RF**  
[X] Deve ser possível cadastrar uma especificação para um carro.

**RN**  
[X] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.  
[X] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.  
[X] Não deve ser possivel cadastrar uma especificação por um usuário não administrador.

# Cadastro de imagens do carro

**RF**  
[X] Deve ser possível cadastrar a imagem do carro.  
[X] Deve ser possível listar todos os carros.

**RNF**  
[X] Utilizar o multer para o upload dos arquivos.

**RN**  
[X] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.  
[X] Não deve ser possivel cadastrar uma imagem por um usuário não administrador.

# Aluguel do carro

**RF**  
[X] Deve ser possível cadastrar um aluguel.

**RN**  
[X] O aluguel deve ter duração mínima de 24 horas.  
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.  
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
[X] O usuário deve estar logado na aplicação.  
[X] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução do carro

**RF**  
[X] Deve ser possível realizar a devolução de um carro

**RN**  
[x] Se o carro for devolvido com menos de 2 horas, deverá ser cobrado uma diária completa.  
[X] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.  
[X] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.  
[X] Ao realizar a devolução, deverá ser calculado o total do aluguel.  
[X] Caso o horário de devolução seja superior ao horário previsto da entrega, deverá ser cobrado multa proporcional aos dias de atraso.  
[X] Caso exista multa, deverá ser somado ao total do aluguel.  
[X] O usuário deve estar logado na aplicação.

# Listagem de Alugueis para usuário

**RF**  
[X] Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**  
[X] O usuário deve estar logado na aplicação.

# Recuperação de senha

**RF**  
[X] Deve ser possível o usuário recuperar a senha informando o email.  
[X] O usuário deve receber um email com o passo a passo para a recuperação da senha.  
[X] O usuário deve conseguir inserir uma nova senha.

**RN**  
[X] O usuário precisa informar uma nova senha.  
[X] O link enviado para a recuperação deve expirar em 3 horas.
