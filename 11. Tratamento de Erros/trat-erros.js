var video = []
video[1] = []
video[1]['Nome'] = 'Fullmetal Alchemist'
video[1]['Categoria'] = 'Anime'

function getVideo(video) {
    
    try {
    console.log(video[0]['nome'])
    } 

    catch(e) {
    console.log('Agora sim podemos tratar esse erro')
    }
    
    finally {
        console.log('Sempre passa por aqui (try/catch)')
    } 

console.log('A aplicação não morreu')
}

getVideo(video)