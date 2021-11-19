import { FormGroup } from "@angular/forms";


export function passwordValidator(g: FormGroup) {
  /*const password = g.get("Password")?.value;
  const confirmarPassword = g.get("Rpassword").value;*/

    return g.get('password')?.value === g.get('confirmationPassword')?.value
      ?  null: {noSoninguales: true}

    /*Links de interes de validación personalizada en angular
    https://juliescript.dev/validacion-personalizada-angular/
    https://www.angulartip.com/recetas/valida-repite-tu-clave*/
}
