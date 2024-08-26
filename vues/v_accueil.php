<div class="container-accueil">
    <p id="countryName">Paris</p>
    <div class="circle">
        <div class="top" id="top">
            <h1 id="temp"></h1>
        </div>
        <div class="bottom">
            <img src="" alt="" id="icon">
            <p id="tempState">Cold</p>
        </div>
    </div>
    <div class="searchBar">
        <input type="search" name="searchBar" id="searchBar" placeholder="Rechercher">
        <button id="btnSearch"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>
    </div>
    
</div>
<style>
    .container-accueil{
        gap: 50px;
    }
    .container-accueil p:nth-child(1){
        color: black;
        font-size: 1.5rem;
        font-weight: 800;
    }
    .container-accueil .circle{
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: white;
        justify-content: center;
        align-items: center;
    }
    .container-accueil .circle h1{
        display: flex;
        flex-direction: row;
        font-size: 6rem;
    }
    .container-accueil .top{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .container-accueil .top p{
        font-weight: 800;
    }
    .container-accueil .bottom p{
        font-weight: 700;
    }
    .container-accueil .bottom{
        display: flex;
        flex-direction: row;
        align-items: end;
        height: 30px;
        gap: 10px;
    }
    .container-accueil .bottom img{
        width: 30px;
        height: 30px;
    }
    .container-accueil input{
        display: flex;
        background-color: transparent;
        border: none;
        text-align: center;
        border-bottom: 2px solid #1E1E1E;
        width: 170px;
        font-size: 15px;
        font-weight: 500;
        color: #1E1E1E;
        &::placeholder{
            color: #1E1E1E;
            opacity: 0.5;
        }
        &:focus{
         outline: none;
        }
    }
    .searchBar{
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .searchBar button{
        width: 50px;
        height: 50px;
        background-color: #1E1E1E;
        border: none;
        cursor: pointer;
        &:hover{
            background-color: #3d3d3d;
        }
    }
</style>