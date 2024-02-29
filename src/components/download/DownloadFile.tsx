
import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

function DownloadFile() {
  const handleDownload = async () => {
    try {
      const headers = {
        'X-Token': '0ad3ff1ec3-81b4c1a177-1708110716',
      };
      const response = await axios.get('https://staging.datagateway.fractaltecnologia.com.br/api/v1/activities/2236/activity_file', {
        headers,
        responseType: 'blob' // Set responseType to blob
      });

      if (response.status === 200) {
        saveAs(response.data, 'nome_do_arquivo.docx');
      } else {
        console.error('Falha ao fazer a requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  const handleRequestDownloadFile = async () => {
    try {
      const headers = {
        'X-Token': '0ad3ff1ec3-81b4c1a177-1708110716',
      };
      const response = await axios.get('https://staging.datagateway.fractaltecnologia.com.br/api/v1/activities/2236/print_activity?resource=questions&file_type=docx', {
        headers,
      });

      if (response.status === 200) {
        console.log('OK');
      } else {
        console.error('Falha ao fazer a requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  return (
    <>
      <a href='/'>Voltar</a>
      <div>
        <h1>Solicitar download</h1>
        <button onClick={handleRequestDownloadFile}>
          Solicitar arquivo
        </button>
        <hr />
        <h1>Realizar download</h1>
        <button onClick={handleDownload}>
          Baixar Arquivo
        </button>
      </div>

    </>
  )
}

export default DownloadFile;
