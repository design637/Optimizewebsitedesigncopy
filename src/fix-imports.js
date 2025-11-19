import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const UI_DIR = './components/ui';

async function fixImports() {
  try {
    const files = await readdir(UI_DIR);
    const tsxFiles = files.filter(f => f.endsWith('.tsx'));
    
    for (const file of tsxFiles) {
      const filePath = join(UI_DIR, file);
      let content = await readFile(filePath, 'utf-8');
      
      // Remove version numbers from all imports
      // Pattern: @version or package@version
      const fixedContent = content.replace(/@[\d.]+/g, '');
      
      if (content !== fixedContent) {
        await writeFile(filePath, fixedContent, 'utf-8');
        console.log(`Fixed: ${file}`);
      }
    }
    
    console.log('✅ All imports fixed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixImports();
