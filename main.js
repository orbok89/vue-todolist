Vue.config.devtools = true;
var app = new Vue ({
    el: '#root',
    data: {
        nuovo_todo:"",
        vettore_todo: [
            {
                to_do: 'fare spesa',
                fatto: true
            },
            {
                to_do: 'fare alo',
                fatto: true
            },
            {
                to_do: 'fare mangiare',
                fatto: false
            }
        ]
    },
    methods:{
        aggiungi(){
            var prova={
                to_do: this.nuovo_todo,
                fatto: false
            }
            this.vettore_todo.push(prova);
            console.log(this.vettore_todo);
        },
        rimuovi(index){
            this.vettore_todo.splice(index,1);
        }
    }
}) 