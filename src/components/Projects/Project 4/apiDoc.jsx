// DocumentationPage.js
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import apiDoc from "../Project 4/apisDoc.json"

const DocumentationPage = () => {
 return (
    <div>
      <SwaggerUI
        spec={apiDoc} // Your API documentation
        docExpansion="list"
        defaultModelsExpandDepth={-1}
      />
    </div>
 );
};

export default DocumentationPage;