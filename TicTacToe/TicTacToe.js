        let go='circle'
        // console.log(gameBoard)
        const main=document.querySelector('#main')
        const startCells=["","","","","","","","",""]
        const arr=[]

        function startGame(e){
            // console.log(e.parentElement)
            e.parentElement.innerHTML=''
            const div=document.createElement('div')
            div.id='gameBoard'
            main.append(div)
            const div2=document.createElement('div')
            div2.id='info'
            main.append(div2)
            const gameBoard=document.querySelector("#gameboard")
            const info=document.querySelector("#info")
            createBoard()
        }
        // createBoard()
        function createBoard(){
            gameBoard.innerHTML=''
            startCells.forEach((cell,idx)=>{
                const boxElement=document.createElement('div')
                boxElement.classList.add('box')
                boxElement.id=idx
                boxElement.onclick=add
                // console.log(boxElement)
                gameBoard.append(boxElement)
            })
        }
        function add(e){
            const display=document.createElement('div')
            display.classList.add(go)
            // e.append(display)
            e.target.append(display)
            go=(go==='circle')?'cross':'circle'
            // console.log(e.target.id)
            info.textContent="it is now "+go+"'s Go"
            //e.onclick=''
            e.target.onclick=''
            // console.log(e.onclick)
            checkScore()
        }
        function checkScore(){
            const allBox=document.querySelectorAll(".box")
            let anyOne=true
            const winingCombo=[
                [0,1,2],[3,4,5],[6,7,8],
                [0,3,6],[1,4,7],[2,5,8],
                [0,4,8],[2,4,6]
            ]
            

            winingCombo.forEach(array=>{
                let c=0
                allBox.forEach(box=>(box.onclick!=null)?c++:c)
                if(c==0){
                    info.innerHTML=`<h3>Draw the Game!</h3>
                    <button class="playAgain" onclick="playAgain(this)">Play Again</button>`
                    // console.log("Draw")
                    return 
                }
            })

            winingCombo.forEach(array=>{
                let c=0
                array.forEach(cell=>{
                    if(allBox[cell].firstChild?.classList.contains('circle')){
                        c++;
                    }
                })
                if(c==3){
                    info.innerHTML=`<h3><span class="O">O</span> (Cricle) Wins!</h3>
                    <button class="playAgain" onclick="playAgain(this)">Play Again</button>`
                    allBox.forEach(box=>box.onclick='')
                    // console.log("Circle wins!")
                    anyOne=false
                    return 
                }
            })
            if(anyOne){
                winingCombo.forEach(array=>{
                    let c=0
                    array.forEach(cell=>{
                        if(allBox[cell].firstChild?.classList.contains('cross')){
                            c++;
                        }
                    })
                    if(c==3){
                        info.innerHTML=`<h3><span class="X">X</span> (Cross) Wins!</h3>
                        <button class="playAgain" onclick="playAgain(this)">Play Again</button>`
                        allBox.forEach(box=>box.onclick='')
                        // console.log("Cross wins!")
                        return
                    }
                })
            }
            return 
            // console.log("ok cool")
        }
        
        function playAgain(e){
            main.innerHTML=''
            main.innerHTML=`
            <div id="startBtn">
                <button class="startBtn" onclick="startGame(this)">Play with Frd</button>
                <button class="startBtn" onclick="playWithCpu(this)">Play With cpu</button>
            </div>`
            arr.splice(0,arr.length)
            // console.log(arr)
        }


        function playWithCpu(e){
            // console.log(e.parentElement)
            e.parentElement.innerHTML=''
            const div=document.createElement('div')
            div.id='gameBoard'
            main.append(div)
            const div2=document.createElement('div')
            div2.id='info'
            main.append(div2)
            const gameBoard=document.querySelector("#gameboard")
            const info=document.querySelector("#info")
            createBoardCpu()
        }
        function createBoardCpu(e){
            gameBoard.innerHTML=''
            startCells.forEach((cell,idx)=>{
                const boxElement=document.createElement('div')
                boxElement.classList.add('box')
                boxElement.id=idx
                boxElement.onclick=addUser
                // console.log(boxElement)
                gameBoard.append(boxElement)
            })

        }
        function addUser(e){
            // console.log(arr)
            let user='circle'
            let cpu='cross'
            const userIp=document.createElement('div')
            userIp.classList.add(user)
            e.target.append(userIp)
            arr.push(parseInt(e.target.id))
            console.log(e.target.id)
            e.target.onclick=''
            checkScore()
            if(arr.length!=9){
                let n=parseInt(Math.random()*9)
                while(arr.indexOf(n)!=-1){
                    n=parseInt(Math.random()*9)
                }
                // console.log("value n: "+n)
                const cupIp=document.createElement('div')
                cupIp.classList.add(cpu)
                const b=document.getElementById(n)
                arr.push(n)
                b.append(cupIp)
                b.onclick=''
                // console.log(b.onclick)
                checkScore()
            }
            
            
        }