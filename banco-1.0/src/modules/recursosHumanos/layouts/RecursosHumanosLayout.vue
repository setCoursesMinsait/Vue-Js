<template>
  <header>
        <div class="logo espacio"></div>
        <div class="iconos">
            <button id="bell-button" onclick="muestraDatos(this)"><i class="fa-solid fa-bell fa-2x"></i></button>
            <button id="bars-button" onclick="muestraDatos(this)"><i class="fa-solid fa-bars fa-2x"></i></button>
        </div>
    </header>
    <main>
        <div class="nav" id="id-nav">
            <div class="options-nav">
                <div class="cabeza-nav">
                    <div class="person-circle"></div>
                    <p class="Bienvenida" id="id-bienvenida"></p>
                    <p class="rol">Recursos Humanos</p>
                </div>
            </div>
            <button id="id-candidatosRH" onclick="muestraDatos(this)"><span>Lista de candidatos</span></button>
            <button id="id-agregarRH" onclick="muestraDatos(this)"><span>Agregar Candidato</span></button>
        </div>
        <section id="work-env">
            <div class="titulo" id="id-titulo">
                <h1>Candidatos</h1>
                <div class="buscar">
                    <div class="icono-lupa"></div>
                    <button type="submit" onchange="filtraDatos(this)" id="id-buscar" placeholder="Buscar candidato..."></button>
                </div>
            </div>
            
            <div class="tabla" id="id-tabla"></div>
        </section>
        <div class="" id="id-cortina"></div>
        <div>

        </div>
    </main>
</template>
<script>
export default {
  
}
</script>

<style>
  html,body {
    margin: 0px;
    padding: 0;
    font-family:  'Arial Narrow', Arial, sans-serif; 
    font-size: 1em;
    line-height: 1.5em;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: #fff;
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
      align-items: center;
      margin-left: 15em;
      
  }

  .espacio{
    margin-left: 40px;
  }
  .ocultar{
    display: none;
  }

  .titulo {
      width: 100%;
      height: 115px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  tbody tr{
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
    text-align: center;
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
      
  }

  .nav{
      display: flex;
      flex-direction: column;
      background: #2C93E0;
      width: 15em;
      height: 100%;
      float: left;
      margin-left: -.5%;
      color: white;
      position: absolute;
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
  .Bienvenida{
      display: flex;
      font-size: 19px;
      margin-bottom: 1px;
  }
  .rol{
      margin-top: unset;
      font-size: 14px;
  }

  td button {
      background-color: white;
      color: red;
      font-weight: 700;
      border: 0;
      width: 100%;
      height: 4em;
      cursor: pointer;
      text-align: start;
  }

  button {
      margin-top: 8px;
      background-color: #2C93E0;
      color: white;
      font-weight: 700;
      border: 0;
      width: 100%;
      height: 4em;
      cursor: pointer;
      text-align: start;
  }

  button:hover{
    background-color: #0F74BE;
  }

  #bars-button{
      display: none;
  }

  button span {
      padding-left: 24px;
  }

  td button:hover{
      background-color: white;
      color: red; 
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

#formRH{
    font-family:  'Arial Narrow', Arial, sans-serif; 
    display: flex;
    flex-direction: column;
    left: 15em;
}

.option{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 1%;
}

  .botones{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .buttons-ops{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 15px;
    background: #006EC1;
    color: white;
    border: 1px solid #006EC1;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-subir{
    margin-top: 20px;
  }
  .btn-guardar{
    margin-top: 20px;
  }

.carga-cv{ 
 width: fit-content;
 height: 50px;
}

@media (max-width:600px){
    form{
        align-items: center;
        /*display: none;*/
    }
    section{
        margin: 0;
        width: 100%;
    }
    nav{
        display: none;
    }
}

  @media (max-width:923px) {
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
  }
</style>