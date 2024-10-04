import React from 'react';

const DownloadLink = () => {
  return (
    <div>
      <a href="./santiagorecio.pdf" download="nombre_del_archivo.pdf">
        Descargar PDF
      </a>
    </div>
  );
};

export default DownloadLink;