<template>
  <header>
    <div class="logo espacio"></div>
    <div class="iconos">
      <button id="bell-button" onclick="muestraDatos(this)"><i class="fa-solid fa-bell fa-2x"></i></button>
      <button id="bars-button" onclick="muestraDatos(this)"><i class="fa-solid fa-bars fa-2x"></i></button>
    </div>
  </header>
  <main class="cuerpo">
    <div class="nav" id="id-nav">
      <div class="options-nav">
        <div class="cabeza-nav">
          <div class="person-circle"></div>
            <p class="Bienvenida" id="id-bienvenida"></p>
            <p class="rol">Entrevistador</p>
          </div>
        </div>
        <div class="botones">
          <div>
            <button id="id-candidatos" onclick="muestraDatos(this)"><span>Lista de candidatos</span></button>
            <button id="id-opciones" onclick="muestraDatos(this)"><span>Opciones</span></button>
          </div>
          <div>
            <button id="salir" onclick="muestraDatos(this)"><span>Cerrar Sesion</span> <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
          </div>
        </div>
      </div>
      <section id="id-contenido">
        <div class="titulo" id="id-titulo">
          <h1>Candidatos</h1>
          <div class="buscar">
            <div class="icono-lupa"></div>
            <input type="search" id="search" placeholder="Buscar candidato...">
          </div>
        </div>
        <div class="tabla" id="id-tabla"></div>
      </section>
    <div class="" id="id-cortina"></div>
  </main>
</template>

<script>
export default {

}
</script>
  
<style>
  body {
 margin: 0;
	padding: 0;
	font-family: 'Droid Sans';
	font-size: 1em;
	line-height: 1.5em;
    max-width: 100%;
    max-height: 100%;
}
header{
    background: #006ec1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    width: auto;
}

section{
    width: 100%;
    height: max-content;
    align-items: center;
    margin: 0 50px;
}

.titulo {
    width: 100%;
    height: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.espacio{
  margin-left: 40px;
}

.tabla{
    overflow: scroll;
    height: 450px;  
}
.tabla table{
  width: 100%; 
  border-collapse: collapse;
  border-spacing: 2px;
}

.tituloAgregar {
 border: 0;
 font-size: inherit;
 color: #000000;
 font-style: bold;
}

.opcion{
    align-items: center;
    justify-content: center;
    text-align: center;
}

tbody tr{
    background-color: #EEEEEE  ;
    height: 50px;
    font-size: 300;
}

tbody td{
    border-width: 0;
    border-bottom: solid white;
}

th {
    text-align: start;
}

td button{
    border-radius: 25px;
    text-align: center;
    width: 142px;
    height: 29px;
    font-size: 14px;
    font-weight: 300;
}

.buscar{
  display: flex;
  background-color: #DADADA;
  border-radius: 20px;
  width: 421px;
  height: 36px;
  align-items: center;
}
.buscar input {
  border: 0;
  background-color: #DADADA;
  width: 255px;
}

.img-logo{
    padding-left: 34px;
}

#bell-button{
    border: 0;
    background-color: #006ec1;
    height: 38px;
    width: 35px;
    margin: 25px;
}

.fa-bell{
    color: white;
}

main{
    display: flex;
    height: 91.2vh;
}

.nav{
    display: flex;
    flex-direction: column;
    background: #2C93E0;
    width: 15em;
    height: 100%;
    float: left;
    color: white; 
}

.botones {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.cabeza-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    flex-direction: column;
    align-content: center;
}
#user-pic{
    width: 40%;
    align-items: center;
}
.Bienvenida {
    display: flex;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 1px;
    margin-left: 15px;
  }
.rol{
    margin-top: unset;
    font-size: 14px;
}

button {
    background-color: #2C93E0;
    color: white;
    font-weight: 700;
    border: 0;
    width: 100%;
    height: 4em;
    cursor: pointer;
    text-align: start;
}


#bars-button{
    display: none;
}

button span {
    padding-left: 24px;
}

button:hover{
    background-color: #0F74BE; 
}
 
/* estilos del formulario */
.option {
 display: flex;
 flex-direction: column;
 width: 688px;
 height: 81px;
}
.option input, select{
 height: 50%;
}

.formulario {
 width: 688px;
}

.btn-subir{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 30px;
}

.radio{
 padding-top: 10px;
}

#subir{
    display: inline-block;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: white;
    background-color: #006ec1;
    border: solid #006ec1;
}

.showNav{
 display: flex;
 flex-direction: column;
 background: #2C93E0;
 width: 15em;
 height: 100%;
 color: white; 
 position: absolute;
 right: 0;
}

.mostrar {
 opacity: .5;
}

.muestraCortina {
  position: fixed;
  right: 240px;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
}

@media (max-width:1000px) {
 .tabla{
   width: auto;
   overflow-x: auto;
   white-space: nowrap;
  }
  .nav {
   display: none;
  }

  .iconos{
   display: flex;
  }
  #bars-button{
   display: block;
   background-color: #006ec1;
   height: 38px;
   width: 35px;
   margin: 25px;
  }
  
  .formulario{
   width: auto;
  }
  .option {
   width: auto;
  }
}

@media (max-width:600px) {
    main{
        margin: 0 15px;
    }
    .nav{
        display: none;
    }
    .iconos{
        display: flex;
    }
    #bars-button{
        display: block;
        background-color: #006ec1;
        height: 38px;
        width: 35px;
        margin: 25px;
    }
    .titulo{
        display: block;
    }
    .buscar{
        align-items: center;
        width: auto;
        height: 40px;
    }
    section{
        margin: 0 0;
    }
    header{
        text-align: start;
    }
    .tabla{
        width: auto;
        overflow-x: auto;
        white-space: nowrap;
    }
  .formulario{
   width: auto;
  }
  .option{
   width: auto;
  }
}
</style>