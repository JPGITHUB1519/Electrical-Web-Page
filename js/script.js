function mensaje_agradecimiento()
{
	alert("Gracias por Comunicarse con nosotros");

}

function mensaje_error_campos()
{
	alert("Debe llenar todos los campos!");
}


function validar()
{

	var nombre = document.getElementByName("nombre").value;
	var email = document.getElementByName("email").value;
	var telephone = document.getElementByName("telephone").value;


	if((nombre == null) || (email == null) || (telephone == null))
	{
		mensaje_error_campos();
	} 
	else
	{
		mensaje_agradecimiento();
	}

}