/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

function Question() { // Estado para armazenar as respostas do usuário
    const [respostas, setRespostas] = useState([]);
    // Estado para armazenar o número da questão atual
    const [questaoAtual, setQuestaoAtual] = useState(0);
    // Estado para armazenar o tempo gasto em cada questão
    const [tempoGasto, setTempoGasto] = useState(0);
    // Estado para armazenar o tempo gasto na questão atual
    const [tempoGastoQuestaoAtual, setTempoGastoQuestaoAtual] = useState(0);
  
    // Mockup de dados de atividades (perguntas e alternativas)
    const atividade = [
      {
        pergunta: 'Pergunta 1?',
        alternativas: ['Opção A', 'Opção B', 'Opção C', 'Opção D', 'Opção E'],
        respostaCorreta: 0 // Índice da alternativa correta
      },
      {
        pergunta: 'Pergunta 2?',
        alternativas: ['Opção A', 'Opção B', 'Opção C', 'Opção D', 'Opção E'],
        respostaCorreta: 1
      },
      // Adicione mais perguntas conforme necessário
    ];
  
    // Função para selecionar uma resposta
    const selecionarResposta = (indiceResposta, tempoGasto) => {
      const novasRespostas: any = [...respostas];
      novasRespostas[questaoAtual] = indiceResposta;
      setRespostas(novasRespostas);
      setTempoGastoQuestaoAtual(tempoGasto)
    };
  
    // Função para alternar entre as questões
    const alternarQuestao = (novaQuestao) => {
      // Grava o tempo gasto na questão atual
      setTempoGastoQuestaoAtual(tempoGasto);
      // Reinicia o contador de tempo
      setTempoGasto(0);
      // Altera para a próxima questão
      setQuestaoAtual(novaQuestao);
    };
  
    // Função para atualizar o tempo gasto em cada questão
    useEffect(() => {
      const timer = setTimeout(() => {
        setTempoGasto(tempoGasto + 1);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [tempoGasto]);
  
    return (
      <div className="App">
        <div>
          <h1>Questão {questaoAtual + 1}</h1>
          <p>{atividade[questaoAtual].pergunta}</p>
          <div>
            {atividade[questaoAtual].alternativas.map((alternativa, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`questao${questaoAtual}-alternativa${index}`}
                  name={`questao${questaoAtual}-resposta`}
                  checked={respostas[questaoAtual] === index}
                  onChange={() => selecionarResposta(index, tempoGasto)}
                />
                <label htmlFor={`questao${questaoAtual}-alternativa${index}`}>
                  {alternativa}
                </label>
              </div>
            ))}
          </div>
          <div>
            {atividade.map((_, index) => (
              <button key={index} onClick={() => alternarQuestao(index)}>
                Questão {index + 1}
              </button>
            ))}
          </div>
          <p>Tempo gasto na questão atual: {tempoGastoQuestaoAtual} segundos</p>
        </div>
      </div>
    );
  }

export default Question;
