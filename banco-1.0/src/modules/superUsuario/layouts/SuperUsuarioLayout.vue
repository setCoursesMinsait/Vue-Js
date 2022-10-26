<template>
  <header>
      <div class="logo espacio"></div>
      <div class="iconos">
        <div class="notificacion espacio-der"></div>
        <div class="hamburguesa ocultar"></div>
      </div>
    </header>
    <main>
      <div class="nav" id="id-nav">
        <div class="options-nav" >
          <div class="cabeza-nav">
            <div class="person-circle"></div>
            <p class="Bienvenida" id="id-bienvenida"></p>
            <p class="rol">Administrador</p>
          </div>
        </div>
        <div class="botones">
          <div>
            <ul class="menu-opciones">
              <li class="menu1"><div class="menu-admin"><div class="icono-admin"></div><span class="texto-admin">ADMIN</span></div>
                <ul>
                  <li><button id="id-dashboard" class="opcion-menu" onclick="muestraDatos(this)"><div class="icono-dashboard"></div><span>Dashboard</span></button></li>
                  <li><button id="id-graficos" class="opcion-menu" onclick="muestraDatos(this)"><div class="icono-grafico"></div><span>Gráficos</span></button></li>
                </ul>
              </li>
              <li class="menu1"><div class="menu-admin"><div class="icono-admin"></div><span class="texto-admin">RH</span></div>
                <ul>
                  <li><button id="id-candidatos" class="opcion-menu" onclick="muestraDatos(this)"><div class="icono-dashboard"></div><span>Candidatos</span></button></li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <button id="salir" class="cerrar-sesion" onclick="muestraDatos(this)"><span>Cerrar Sesion</span> <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
          </div>
        </div>
      </div>
      <section id="id-contenido">
        <div class="" id="id-titulo">
          <div style="text-align:center;"><h1>Vista General</h1></div>
          <div class="titulo">
            <h2>Candidatos</h2>
            <div class="buscar">
              <div class="icono-lupa"></div>
              <input type="text" onchange="filtraDatos(this)" id="id-buscar" placeholder="Buscar candidato...">
            </div>
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

<style scoped>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Droid Sans';
    font-size: 18px;
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
  .espacio{
    margin-left: 40px;
  }
  .ocultar{
    display: none;
  }
  .espacio-der{
    margin-right: 10px;
  }
  .menu-admin{
    display: flex;
    align-items: center;
    background-color: #006EC1;
    height: 60px;
  }
  .opcion-menu{
    display: flex;
    align-items: center;
  }
  .texto-admin{
    font-size: 19px;
    font-weight: bold;
  }
  .showNav{
    display: flex;
    flex-direction: column;
    background: #2C93E0;
    width: 17em;
    height: 100%;
    color: white; 
    position: absolute;
    right: 0;
    z-index: 5;
   }
  ul.menu-opciones {
    list-style: none;
    width: 100%;
    font-size: 18px;
    padding-inline-start: 0;
  }
  ul.menu-opciones li {
    list-style: none;
  }
  ul.menu-opciones li ul {
    max-height: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    transition: .3s all ease-in;
  }
  ul.menu-opciones li:hover ul {
    max-height: 300px;
    transition: .3s all ease-in;
  }
  #opciones{
    background-color: #2C93E0;
    border-radius: 25px;
    width: 100%;
    color: #fff;
    font-size: 16px;
  }
  option{
    border-radius: 25px;
  }
  section{
    width: 100%;
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
  .tabla{
    overflow: scroll;
    height: 80%;
  }
  .tabla table{
    width: 100%;
  }
  .tabla-2 table{
    width: 100%;
  }
  tbody tr{
    height: 50px;
  }
  th {
    text-align: start;
  }
  td button{
    text-align: center;
    border-radius: 20px;
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
    margin-left: -.5%;
    color: white;
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
  .botones {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .cerrar-sesion{
    background-color: #278CD9;
  }
  #menu-graficos{
    background: #2C93E0;
  }
  .rol{
    margin-top: unset;
    font-size: 14px;
  }
  button {
    background-color: #52BCEC;
    color: white;
    font-weight: 700;
    border: 0;
    width: 100%;
    height: 4em;
    cursor: pointer;
    text-align: start;
  }
  #btn-perfil{
    border-radius: 25px;
    width: 100%;
  }
  #bars-button{
    display: none;
  }
  button span {
    padding-left: 15px;
    width: 100%;
  }
  button:hover{
    background-color: #52BCEC;
    mix-blend-mode: hard-light;
    width: 100%;
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
  }
  .canvasjs-chart-credit{
    display: none;
  }
  .graphs{
    margin-top: 5%;
  }
</style>