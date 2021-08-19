<template>
<v-container>
<v-row
        align="end"
         no-gutters
        style="height: 150px;">
      <h1 class="text-right">CONSULT BUYER</h1>
   </v-row> 
   <v-form @submit.prevent="buscarb">      
     <v-text-field label="Id:" v-model="idf" ></v-text-field>       
   </v-form>
   <v-card v-if="item = uno.find( comprador => comprador.id === idf )" >
    <v-card-text >    
      <v-chip label color="pink" text-color="white" class="ml">                                        
      <v-icon left></v-icon>
                       BUYERS
      </v-chip>                            
        <p><a>ID:</a>{{item.id}}</p>
        <p><a>NAME:</a>{{item.name}}</p>
        <p><a>AGE: </a>{{item.age}}</p>       
    </v-card-text>
    </v-card>
</v-container>
</template>
<script  src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";

export default ({  
  data() {     
      return {
        idf: '',     
        uno : null,         
      }
        },         
     mounted(){       
       axios
          .get('http://localhost:9000/listarc')
          .then(response => (this.uno = response.data.data.queryBuyers))
          .catch(e => {console.log(uno)})   
     } 
})
</script>