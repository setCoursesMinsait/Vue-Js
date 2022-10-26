<template>
  <header id="id-encabezado-principal">
    <div id="id-logo-header" class="logo-encabezado">
      <div class="logo"></div>
      <img src="@/assets/bbva-logo.png" alt="logo">
    </div>
    <br>
  </header>
  <main id="id-contenido-principal">
    <div id="titulo">
      <h4 class="titulo-login">Login</h4>
    </div>    
    <div id="id-contenido" class="contenido">
      <div id="id-formulario" class="contenedor-formulario">
        <div id="id-logo_persona" class="logo-persona">
          <img src="@/assets/person_login.png" alt="personaLogueo">
        </div>
        <form id="id-formulario" class="formulario" onsubmit="ingresar(this)">
          <div class="item-formulario">
            <label class="texto">Email</label>
            <input id="id-usuario" class="form-control" type="text" placeholder="Email">
          </div>
          <div class="item-formulario">
            <label class="texto">Password</label>
            <input id="id-password" class="form-control" type="password" placeholder="Password">
          </div>
          <input type="submit" class="btn btn-primary" id="btn-ingresar" value="Ingresar">
        </form>
      </div>
      <div id="id-bienvenida">
        <img src="@/assets/imagen_login.png" alt="bienvenida">
      </div>
    </div>  
  </main>
</template>

<script>
export default {

}
</script>

<style>
  body{
    background-color: #006EC1;
    font-family: 'Droid Sans';
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
  }
  .titulo-login{
    color: white;
    font-family: 'Inika'!important;
    font-weight: bold;
    font-style: normal;
    margin: 0 auto;
    text-align: center;
    font-size: 64px;
  }
  .logo-encabezado{
    width: fit-content;
    height: fit-content;
    margin-top: 37px;
    margin-left: 66px;
  }
  .contenido{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contenedor-formulario{
    background-color: #00589A;
    width: 632px;
    height: 483px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 20px;
    margin-right: 10rem;
  }
  .logo-persona{
    margin-top: 12px;
  }
  .formulario{
    display: flex;
    height: inherit;
    width: 300px;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .item-formulario{
    display: flex;
    flex-direction: column;
  }
  .btn-primary:hover{
    background-color: #89D1F3!important;
    color: #000000!important;
  }
</style>