// Importações / Referências as Bibliotecas
const { assert } = require("chai");
const supertest = require("supertest");
const asserts = require("chai").assert;

const petId = 948595846; // id do pet

describe("Petstore Swagger - Pet", () => {
    // Definir o caminho do serviço / API - Base URL
    const request = supertest("https://petstore.swagger.io/v2");

    // Função Post == Create == Incluir
    it("POST Pet ", () => {
        // Onde está o json com os dados do Pet
        // Configura 
        const jsonFile = require("../../vendors/pet1.json");
                
        return request         // chamada para a requisição
            .post("/pet")      // endpoint / função chamada
            // Executa
            .send(jsonFile)    // body / corpo da requisição
            // Valida
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // Comunicação ok
                assert.equal(resposta.body.id, petId);  // valida o id do pet
                assert.equal(resposta.body.name, "Hulk"); // nome  do pet
                assert.equal(resposta.body.status, "available"); // se está disponível
            });
    });

    // Função Get == reach / Read / Research == Consultar
    it("GET pet", () => {
        return request     // chama para a requisição
        .get("/pet/" + petId) // consulta pelo id do pet
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200); // Comunicação ok
            assert.equal(resposta.body.id, petId);  // valida o id do pet
            assert.equal(resposta.body.name, "Hulk"); // nome  do pet
            assert.equal(resposta.body.status, "available"); // se está disponível
        });
    }) // Final do Get
    // função do Put == update == Alterar
    it("PUT pet", () => {
        // apontamento para o json com apontameto
        const jsonFile = require("../../vendors/pet2.json");
        return request            // chamada para a requisição
        .put("/pet")              // endpoint
        .send(jsonFile)           // body com alteração desejada
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200); // Comunicação ok
            assert.equal(resposta.body.id, petId);  // valida o id do pet
            assert.equal(resposta.body.name, "Hulk"); // nome  do pet
            assert.equal(resposta.body.status, "solded"); // se está disponível
        })
    });

    // Função Delete == Excluir
    it("DELETE Pet", () => {
        return request
        .delete("/pet/" + petId)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200);

        })
    })
})
