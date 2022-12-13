function doGet() 
{
  return HtmlService.createTemplateFromFile('carteraln').evaluate().setTitle('CARTERA DE SERVICIO');
}

function obtenerDatosHtml(nombre){

   return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}