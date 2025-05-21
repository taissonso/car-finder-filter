const fs = require('fs');
const path = require('path');

// Cria o arquivo .nojekyll para GitHub Pages
fs.writeFileSync(path.join(__dirname, '../out/.nojekyll'), '');

// Encontra todos os arquivos HTML gerados pelo build
const htmlFiles = getAllFiles(path.join(__dirname, '../out'), '.html');

console.log(`Processando ${htmlFiles.length} arquivos HTML...`);

// Processa cada arquivo HTML
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Corrige caminhos para CSS
  let modified = content.replace(
    /(href=["'])(\/_next\/static\/css\/[^"']+["'])/g, 
    '$1/car-finder-filter$2'
  );
  
  // Corrige caminhos para JavaScript
  modified = modified.replace(
    /(src=["'])(\/_next\/static\/[^"']+["'])/g, 
    '$1/car-finder-filter$2'
  );
  
  // Corrige outros caminhos estáticos se necessário
  modified = modified.replace(
    /(src=["'])(\/images\/[^"']+["'])/g, 
    '$1/car-finder-filter$2'
  );
  
  // Salva o arquivo apenas se foi modificado
  if (content !== modified) {
    fs.writeFileSync(file, modified);
    console.log(`✅ Corrigido: ${file}`);
  }
});

console.log('Processo finalizado!');

// Função para obter todos os arquivos com determinada extensão
function getAllFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    
    if (stat && stat.isDirectory()) {
      // Recursão para subdiretórios
      results = results.concat(getAllFiles(file, ext));
    } else if (file.endsWith(ext)) {
      results.push(file);
    }
  });
  
  return results;
}