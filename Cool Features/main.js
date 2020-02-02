const planetas = document.querySelectorAll('.planeta')
console.log(planetas)

planetas.forEach((planeta) =>{
    let isClosed = true
    planeta.onclick = function exibirPlaneta(){
        let filho = planeta.firstElementChild
        filho.style.position = 'relative'
        
        if(isClosed == true){
            filho.style.animation = 'abrirPlaneta 0.5s'
            filho.style.animationFillMode = 'forwards'
            
            filho.firstElementChild.style.animation = 'verConteudo 0.8s'
            filho.firstElementChild.style.animationFillMode = 'forwards'
            isClosed = false
            return
        }
        if(isClosed == false){
            filho.style.animation = 'fecharPlaneta 0.5s'

            filho.firstElementChild.style.animation = 'desverConteudo 0.8s'
            filho.firstElementChild.style.animationFillMode = 'forwards'
            isClosed = true
            return
        }
    
    }
})