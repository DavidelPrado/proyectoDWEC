//Ejercicio 1
/*
let palabra;
var aPalabras=Array();
let i=0;
do{
    palabra=prompt("Inserte una palabra: ");
    aPalabras[i]=palabra;
    i++;
}while(palabra!=null)


document.write("1. Ver primera palabra insertada<br>");
document.write("2. Ver última palabra insertada<br>");
document.write("3. Ver todas las palabras<br>");
document.write("4. Ver la palabra más larga<br>");
document.write("5. Ver la palabra más corta<br>");
document.write("6. Número de palabras insertadas<br>");
document.write("7. Buscar una palabra<br>");
document.write("8. Borrar duplicados<br>");
document.write("9. Salir<br>");

let num=0;
while(num!=9){
    num=parseInt(prompt("Opcion: "));

    switch(num){
        case 1:
            document.write("<br>");
            document.write("Primera palabra insertada: "+aPalabras[0]);
            break;

        case 2:
            document.write("<br>");
            document.write("Ultima palabra insertada: "+(aPalabras[aPalabras.length-2]));
            break;

        case 3:
            document.write("<br>");
            document.write("Todas las palabras: "+aPalabras);
            break;

        case 4:
            document.write("<br>");
            let longitud=aPalabras[0];
            let max=longitud.length;
            let indice=0;

            for (let i=1;i<aPalabras.length-1;i++) {
                longitud=aPalabras[i];
                if(longitud.length>max){
                    max=longitud.length;
                    indice=i;
                }
            }
            document.write("La palabra mas larga es: "+aPalabras[indice]);
            break;

        case 5:
            document.write("<br>");
            let long=aPalabras[0];
            let min=long.length;
            let indice2=0;

            for (let j=1;i<aPalabras.length-1;i++) {
                long=aPalabras[i];

                if(long.length<min){
                    min=long.length;
                    indice2=i;
                }
            }
            document.write("La palabra mas corta es: "+aPalabras[indice2]);
            break;
        
        case 6:
            document.write("<br>");
            document.write("Numero de palabras insertadas: "+(aPalabras.length-1));
            break;

        case 7:
            document.write("<br>");
            let buscar=prompt("Palabra a buscar: ");
            if(aPalabras.indexOf(buscar)>=0){
                document.write("La palabra esta en la posicion: "+aPalabras.indexOf(buscar));
            }else{
                document.write("Palabra no encontrada");
            }
            break;

        case 8:
            var aux=new Array();
            for (let pal of aPalabras){
                let duplicado=false;
                for(let palaux of aux){
                    if(palaux==pal){
                        duplicado=true;
                    }
                }
                if(!duplicado){
                    aux.push(pal);
                }
            }
            aPalabras=aux;
            document.write("<br>");
            document.write("Duplicados eliminados");
            break;

        case 9:
            document.write("<br>");
            document.write("Adios");
            break;
            
        default:
            break;
    }
}
*/

//Ejercicio 2
const filas=10;
const columnas=10;

const tPortaviones=4;
const nPortaviones=2;
const tAcorazados=3;
const nAcorazados=3;
const tDestructores=2;
const nDestructores=3;
const tFragatas=1;
const nFragatas=2;

let cont;
let fila;
let col;

var tablero=new Array(filas);

for (let i=0;i<filas;i++) {
    tablero[i]=new Array(columnas);
    for (let j=0;j<columnas;j++) {
        tablero[i][j]=false;
    }
}

//Portaaviones
let barcos=0;
while(barcos<nPortaviones){
    let direccion=parseInt(Math.random()*2);

    if(direccion==0){
        fila=parseInt(Math.random()*10);
        col=parseInt(Math.random()*7);

        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tPortaviones){
            if(tablero[fila][col+cont]){
                ocupada=true;
            }
            if(fila>0 && tablero[fila-1][col+cont]){
                ocupada=true;
            }
            if(fila<9 && tablero[fila+1][col+cont]){
                ocupada=true;
            }
            cont++;
        }

            //Izquierda
        if(ocupada==false){
            if(col>0){
                if(tablero[fila][col-1]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col-1]){
                    ocupada=true;
                }
            }
        }
            //Derecha
        if(ocupada==false){
            if(col+tPortaviones<columnas){
                if(tablero[fila][col+tPortaviones]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col+tPortaviones]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col+tPortaviones]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tPortaviones;i++) {
                tablero[fila][col+i]=true;
            }
            barcos++;
        }
    }else{
        col=parseInt(Math.random()*10);
        fila=parseInt(Math.random()*7);
    
        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tPortaviones){
            if(tablero[fila+cont][col]){
                ocupada=true;
            }
            if(col>0 && tablero[fila+cont][col-1]){
                ocupada=true;
            }
            if(col<9 && tablero[fila+cont][col+1]){
                ocupada=true;
            }
            cont++;
        }

            //Arriba
        if(ocupada==false){
            if(fila>0){
                if(tablero[fila-1][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila-1][col+1]){
                    ocupada=true;
                }
            }
        }
            //Abajo
        if(ocupada==false){
            if(fila+tPortaviones<columnas){
                if(tablero[fila+tPortaviones][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila+tPortaviones][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila+tPortaviones][col+1]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tPortaviones;i++) {
                tablero[fila+i][col]=true;
            }
            barcos++;
        }
    }
}


//Acorazados
barcos=0;
while(barcos<nAcorazados){
    let direccion=parseInt(Math.random()*2);

    if(direccion==0){
        fila=parseInt(Math.random()*10);
        col=parseInt(Math.random()*8);

        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tAcorazados){
            if(tablero[fila][col+cont]){
                ocupada=true;
            }
            if(fila>0 && tablero[fila-1][col+cont]){
                ocupada=true;
            }
            if(fila<9 && tablero[fila+1][col+cont]){
                ocupada=true;
            }
            cont++;
        }

            //Izquierda
        if(ocupada==false){
            if(col>0){
                if(tablero[fila][col-1]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col-1]){
                    ocupada=true;
                }
            }
        }
            //Derecha
        if(ocupada==false){
            if(col+tAcorazados<columnas){
                if(tablero[fila][col+tAcorazados]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col+tAcorazados]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col+tAcorazados]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tAcorazados;i++) {
                tablero[fila][col+i]=true;
            }
            barcos++;
        }
    }else{
        col=parseInt(Math.random()*10);
        fila=parseInt(Math.random()*8);
    
        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tAcorazados){
            if(tablero[fila+cont][col]){
                ocupada=true;
            }
            if(col>0 && tablero[fila+cont][col-1]){
                ocupada=true;
            }
            if(col<9 && tablero[fila+cont][col+1]){
                ocupada=true;
            }
            cont++;
        }

            //Arriba
        if(ocupada==false){
            if(fila>0){
                if(tablero[fila-1][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila-1][col+1]){
                    ocupada=true;
                }
            }
        }
            //Abajo
        if(ocupada==false){
            if(fila+tAcorazados<columnas){
                if(tablero[fila+tAcorazados][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila+tAcorazados][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila+tAcorazados][col+1]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tAcorazados;i++) {
                tablero[fila+i][col]=true;
            }
            barcos++;
        }
    }
}

//Destructores
barcos=0;
while(barcos<nDestructores){
    let direccion=parseInt(Math.random()*2);

    if(direccion==0){
        fila=parseInt(Math.random()*10);
        col=parseInt(Math.random()*9);

        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tDestructores){
            if(tablero[fila][col+cont]){
                ocupada=true;
            }
            if(fila>0 && tablero[fila-1][col+cont]){
                ocupada=true;
            }
            if(fila<9 && tablero[fila+1][col+cont]){
                ocupada=true;
            }
            cont++;
        }

            //Izquierda
        if(ocupada==false){
            if(col>0){
                if(tablero[fila][col-1]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col-1]){
                    ocupada=true;
                }
            }
        }
            //Derecha
        if(ocupada==false){
            if(col+tDestructores<columnas){
                if(tablero[fila][col+tDestructores]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col+tDestructores]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col+tDestructores]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tDestructores;i++) {
                tablero[fila][col+i]=true;
            }
            barcos++;
        }
    }else{
        col=parseInt(Math.random()*10);
        fila=parseInt(Math.random()*9);
    
        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tDestructores){
            if(tablero[fila+cont][col]){
                ocupada=true;
            }
            if(col>0 && tablero[fila+cont][col-1]){
                ocupada=true;
            }
            if(col<9 && tablero[fila+cont][col+1]){
                ocupada=true;
            }
            cont++;
        }

            //Arriba
        if(ocupada==false){
            if(fila>0){
                if(tablero[fila-1][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila-1][col+1]){
                    ocupada=true;
                }
            }
        }
            //Abajo
        if(ocupada==false){
            if(fila+tDestructores<columnas){
                if(tablero[fila+tDestructores][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila+tDestructores][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila+tDestructores][col+1]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tDestructores;i++) {
                tablero[fila+i][col]=true;
            }
            barcos++;
        }
    }
}

//Fragatas
barcos=0;
while(barcos<nFragatas){
    let direccion=parseInt(Math.random()*2);

    if(direccion==0){
        fila=parseInt(Math.random()*10);
        col=parseInt(Math.random()*10);

        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tFragatas){
            if(tablero[fila][col+cont]){
                ocupada=true;
            }
            if(fila>0 && tablero[fila-1][col+cont]){
                ocupada=true;
            }
            if(fila<9 && tablero[fila+1][col+cont]){
                ocupada=true;
            }
            cont++;
        }

            //Izquierda
        if(ocupada==false){
            if(col>0){
                if(tablero[fila][col-1]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col-1]){
                    ocupada=true;
                }
            }
        }
            //Derecha
        if(ocupada==false){
            if(col+tFragatas<columnas){
                if(tablero[fila][col+tFragatas]){
                    ocupada=true;
                }
                if(fila>0 && tablero[fila-1][col+tFragatas]){
                    ocupada=true;
                }
                if(fila<9 && tablero[fila+1][col+tFragatas]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tFragatas;i++) {
                tablero[fila][col+i]=true;
            }
            barcos++;
        }
    }else{
        col=parseInt(Math.random()*10);
        fila=parseInt(Math.random()*10);
    
        let ocupada=false;
        cont=0;
        
        while(ocupada==false && cont<tFragatas){
            if(tablero[fila+cont][col]){
                ocupada=true;
            }
            if(col>0 && tablero[fila+cont][col-1]){
                ocupada=true;
            }
            if(col<9 && tablero[fila+cont][col+1]){
                ocupada=true;
            }
            cont++;
        }

            //Arriba
        if(ocupada==false){
            if(fila>0){
                if(tablero[fila-1][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila-1][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila-1][col+1]){
                    ocupada=true;
                }
            }
        }
            //Abajo
        if(ocupada==false){
            if(fila+tFragatas<columnas){
                if(tablero[fila+tFragatas][col]){
                    ocupada=true;
                }
                if(col>0 && tablero[fila+tFragatas][col-1]){
                    ocupada=true;
                }
                if(col<9 && tablero[fila+tFragatas][col+1]){
                    ocupada=true;
                }
            }
        }   
        
        //Pintar el barco
        if(ocupada==false){
            for (let i=0;i<tFragatas;i++) {
                tablero[fila+i][col]=true;
            }
            barcos++;
        }
    }
}

//Imprimir tablero
document.write("<table>");
for (let i=0;i<tablero.length;i++) {
    document.write("<tr>");
    for (let j=0;j<tablero.length;j++) {
        document.write("<td style=");
        if(tablero[i][j]){
            document.write("background-color:cyan;>");
        }else{
            document.write(">");
        }
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
