

var operacao = prompt("Digite 'S' para somar, 'SUB' para subtrair, 'D' para dividir, 'M' para multiplicar, 'MN1' para maior entre dois números, 'MN2' para menor entre dois números, 'POT' para potência, 'PORC' para porcentagem, 'RAIZ' para raiz, 'MODN' para módulo : ");
if (operacao == 'RAIZ' || operacao == 'MODN'){
	var v1 = parseInt(prompt("Digite um número"));
}else {
	var v1= parseInt(prompt("Digite o primeiro número"));
	var v2= parseInt(prompt("Digite o número a ser operado"));
}

	
	
	
if (operacao == 'S') {
	var somar = v1+v2;
	alert(somar);
	document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+v1+"+"+v2+"="+"<br>"+somar);
}else{ 
	if (operacao == 'SUB') {
        var diminuir = v1-v2;
        alert(diminuir);
		document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+v1+"-"+v2+"="+"<br>"+diminuir);
	}else{ 
		if (operacao == 'D') {
			var dividir = v1/v2;
			alert(dividir);
			document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+v1+"/"+v2+"="+"<br>"+dividir);
		} else{
			if (operacao == 'M') {
				var multiplicar = v1*v2;
				alert(multiplicar);
				document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+v1+"x"+v2+"="+"<br>"+multiplicar);
			} else{
				if (operacao == 'MN1') {
					var retorno = Math.max(v1, v2);
					alert(retorno);
					document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+"Se, "+ v1 +" > "+ v2 + " teremos " + v1 + " como resultado, caso contrário teremos " + v2 + ".");
				} else{
					if (operacao == 'MN2') {
						var retorno2 = Math.min(v1, v2);
						alert(retorno2);
						document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+"Se, "+v1+" < "+ v2 +" teremos " + v1 + " como resultado, caso contrário teremos " + v2 + " .");
					} else{
						if (operacao == 'POT') {
							var potencia = v1**v2;
							alert(potencia);
							document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+v1+"^"+v2+"="+"<br>"+potencia);
						} else{
							if (operacao == 'PORC') {
								var porcentagem = (v1 / v2) * 100;
								alert(porcentagem);
								document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+"("+v1+"/"+v2+")"+"x100 = "+"<br>"+porcentagem);
							} else{
								if (operacao == 'RAIZ') {     
									var raiz = Math.sqrt(v1);
									alert(raiz);
									document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+"√"+v1+"="+"<br>"+ raiz);
								}else{
									if(operacao == 'MODN'){
										var resultadomodulo = Math.abs(v1);
										alert(resultadomodulo);
										document.write("A resolução da sua escolha foi a seguinte: "+"<br>"+"["+v1+"]"+"="+"<br>"+resultadomodulo);
									}
								} 
							}
						}
					}
				}
			}
		}
	}
}


