for (let ciclo = 1; ciclo <= 10; ciclo++){
    if (ciclo % 4 === 0 ){
        document.writeln("Chequeo de Seguridad");
    }else if (ciclo % 6 === 0){
        document.writeln("Alerta del sistema");
    }else if(ciclo % 4 === 0 && ciclo % 6 === 0){
        document.writeln("ALERTA CRITICA");
    }else if (ciclo === 9){
        document.writeln("Sistema bloqueado");
        break;
    }else {
        document.writeln(ciclo);
    }
}