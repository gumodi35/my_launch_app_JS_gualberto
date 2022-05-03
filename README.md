## CREA UN NUEVO PROYECTO DE JS

1. Crea un directorio vacío llamado my_launchx_app.
2. Dentro de este directorio vacío ejecuta el comando npm init. Este ejecutara un cliente que te preguntará algunos datos de tu proyecto. Es indiferente esta información de momento, puedes darle enter hasta que termine. Al finalizar te creará el archivo package.json. A partir de ahora nuestro directorio es un proyecto de JS. (Así se crea desde cero.) Recuerda siempre *VERSIONAR* tus apps.

## AGREGAR DEPENDENCIAS

1. Vamos a agregar pruebas de unidad a nuestro proyecto recién creado. Para ello es necesario rectificar que tenemos ya el archivo package.json.
2. Para agregar una dependencia, se necesita indicar directamente en el package.json, este archivo es el corazón de cualquier app de js. Podemos hacer uso de un comando de npm para agregar la última versión de cualquier dependencia: npm install --save-dev jest. (Esto indica que se agrega la dependencia jest, y que se agrega para el ambiente de desarrollo --save-dev).
3. Verifica que después del punto anterior, se haya creado un directorio node_modules, este contiene todos los scripts de js de las dependencias. IMPORTANTE NUNCA VERSIONAR ESTO. Para no versionar esta carpeta, crea en la RAÍZ de tu proyecto un archivo llamado .gitignore y agrega la siguiente línea: **/node_modules , con esto vamos a decirle a git que excluya este directorio.